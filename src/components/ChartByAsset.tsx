import {
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  CartesianGrid,
  Legend,
} from "recharts";

import {
  formatSeriesDate,
  formatSeriesNumber,
  formatSeriesFloat,
} from "utils/chart";
import { DailyAssetPrice, Series } from "types";

import { CustomTooltip } from "./recharts/CustomTooltip";

const DOMAIN = ["auto", "auto"];
const COLOR_PALETTE = ["#1976d2", "#F99B1C"];

export type ChartByAssetProps = {
  series: Series[];
  seriesKey?: Exclude<keyof DailyAssetPrice, "date">;
};

export const ChartByAsset: React.FC<ChartByAssetProps> = ({
  series,
  seriesKey = "price",
}) => (
  <ResponsiveContainer>
    <LineChart>
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <XAxis
        dataKey="date"
        scale="time"
        type="number"
        tickFormatter={formatSeriesDate}
        domain={DOMAIN}
      />
      <YAxis
        dataKey={seriesKey}
        type="number"
        tickFormatter={
          seriesKey === "price" ? formatSeriesNumber : formatSeriesFloat
        }
        domain={DOMAIN}
      />
      <Tooltip content={<CustomTooltip />} />
      {series.map((s, index) => {
        const strokeColor = COLOR_PALETTE[index] || COLOR_PALETTE[0];

        return (
          <Line
            type="monotone"
            dataKey={seriesKey}
            data={s.data}
            name={s.label}
            key={s.label}
            stroke={strokeColor}
          />
        );
      })}
      {series.length > 1 && <Legend />}
    </LineChart>
  </ResponsiveContainer>
);
