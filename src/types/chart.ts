export type DailyAssetPrice = {
  date: number;
  price: number;
  volume: number;
};

export type Series = {
  label: string;
  data: DailyAssetPrice[];
};
