import { Free2exAssetOperation, Free2exCSV } from "types/free2ex";

export const isFree2exAssetOperation = (
  data: unknown
): data is Free2exAssetOperation => (data as Free2exAssetOperation).length > 22;

export const isFree2exCSV = (csv: Array<unknown>): csv is Free2exCSV =>
  !!csv.find((record) =>
    Boolean(
      Array.isArray(record) &&
        record.length === 2 &&
        record[0] === "Broker:" &&
        record[1] === "Free2ex (free2ex.com)"
    )
  );
