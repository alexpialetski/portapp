export type DailyAssetPrice = {
  date: Date;
  price: number;
};

export type Series = {
  label: string;
  data: DailyAssetPrice[];
};
