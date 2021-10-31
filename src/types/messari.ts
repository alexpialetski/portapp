import { AssetSymbol } from "./asset";

export type AssetTimeseriesQueryParams = Partial<{
  start: string;
  end: string;
  interval: "1d" | "1w";
  columns: "open" | "close";
  order: "asc" | "desc";
  format: "csv" | "json";
}>;

type MessariResponse<T> = {
  status: { elapsed: number; timestamp: string };
  data: T;
};

export type AssetTimeseriesResponse = MessariResponse<{
  id: string;
  symbol: AssetSymbol;
  name: string;
  slug: string;
  values: [date: number, price: number][];
}>;

export type AssetSeries = Partial<Record<AssetSymbol, number>>;

export type GroupedSeries = Record<string, AssetSeries>;
