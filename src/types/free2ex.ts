export type Free2exCSVMeta = [string, string];

export type Free2exType =
  | "BUY Market"
  | "Deposit"
  | "SELL Market"
  | "Withdrawal";
export type Free2exOperationType = "OrderFilled" | "Balance";

export type Free2exAssetOperation = [
  orderId: number,
  date: string,
  type: Free2exType,
  operation: Free2exOperationType,
  splitRation: unknown,
  symbol: string,
  requestedVolume: number,
  visibleVolume: unknown,
  requestedPrice: number,
  executionTime: string,
  executedVolume: number,
  executedPrice: number,
  limitPrice: number,
  restVolume: number,
  slippageControl: string,
  tax: unknown,
  comission: string,
  feeDiscount: unknown,
  rebate: unknown,
  assetOne: string,
  assetTwo: string,
  due: unknown,
  comment: string
];

export type Free2exCSV = Array<Free2exCSVMeta | Free2exAssetOperation>;
