import React from "react";
import Papa from "papaparse";
import Dropzone, { IDropzoneProps } from "react-dropzone-uploader";
import { useHistory } from "react-router-dom";
import * as R from "ramda";

import { parseFree2exPortfolio } from "utils/csv";
import { usePortfolioManager } from "services/PortfolioManager";
import { isFree2exAssetOperation, isFree2exCSV } from "utils";

import "react-dropzone-uploader/dist/styles.css";
import { Free2exAssetOperation, Free2exCSV } from "types";

export const Upload: React.FC = () => {
  const { setPortfolio } = usePortfolioManager();
  const history = useHistory();

  const handleSubmit: IDropzoneProps["onSubmit"] = (files) => {
    if (files.length) {
      Promise.all(R.map((meta) => meta.file.text(), files))
        .then(R.map((content) => Papa.parse(content).data))
        .then((csvs) => R.filter(isFree2exCSV, csvs))
        .then(
          R.reduce<Free2exCSV, Free2exAssetOperation[]>(
            (acc, csv) => [...acc, ...csv.filter(isFree2exAssetOperation)],
            []
          )
        )
        .then(parseFree2exPortfolio)
        .then((p) => {
          if (p) {
            setPortfolio(p);
            history.push("/");
          } else {
            R.forEach((file) => file.remove(), files);
          }
        });
    }
  };

  return (
    <Dropzone
      styles={{ dropzone: { overflow: "hidden", height: "100%" } }}
      onSubmit={handleSubmit}
      accept=".csv"
      multiple={true}
    />
  );
};
