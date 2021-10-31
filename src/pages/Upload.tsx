import React from "react";
import Papa from "papaparse";
import Dropzone, { IDropzoneProps } from "react-dropzone-uploader";
import { useHistory } from "react-router-dom";

import { parseFree2exPortfolio } from "utils/csv";
import { usePortfolioManager } from "services/PortfolioManager";
import { isFree2exCSV } from "utils";

import "react-dropzone-uploader/dist/styles.css";

export const Upload: React.FC = () => {
  const { setPortfolio } = usePortfolioManager();
  const history = useHistory();

  const handleSubmit: IDropzoneProps["onSubmit"] = (files) => {
    if (files.length) {
      files[0].file
        .text()
        .then((content) => Papa.parse(content).data)
        .then((csv) => {
          if (isFree2exCSV(csv)) {
            return parseFree2exPortfolio(csv);
          }

          return;
        })
        .then((p) => {
          if (p) {
            setPortfolio(p);
            history.push("/");
          } else {
            files[0].remove();
          }
        });
    }
  };

  return (
    <Dropzone
      styles={{ dropzone: { overflow: "hidden", height: "100%" } }}
      onSubmit={handleSubmit}
      accept=".csv"
      multiple={false}
    />
  );
};
