import React from "react";
import { styled } from "@mui/material/styles";

import { DailyAssetPrice } from "types";
import {
  formatSeriesDate,
  formatSeriesNumber,
  formatSeriesFloat,
} from "utils/chart";

const Container = styled("div")(() => ({
  fontSize: "10px",
  padding: "4px",
  background: "rgba(0, 26, 39, 0.9)",
  color: "white",
  borderRadius: "4px",
  textAlign: "center",
  fontFamily: "sans-serif",
}));
const Table = styled("table")(() => ({
  whiteSpace: "nowrap",
}));
const TableRow = styled("tr")(() => ({
  fontWeight: "bold",
}));
const CircleContainer = styled("td")(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));
const Circle = styled("circle")(({ color }) => ({
  stroke: "white",
  fill: color,
  strokeWidth: 2,
}));
const Date = styled("strong")(() => ({
  marginBottom: "3px",
  display: "inline-block",
}));

export type CustomTooltipProps = {
  active?: boolean;
  payload?: { payload: DailyAssetPrice; name: string; color: string }[];
  color?: string;
};

export const CustomTooltip: React.FC<CustomTooltipProps> = ({
  active,
  payload,
}) => {
  if (active && payload?.length) {
    return (
      <Container className="area-chart-tooltip">
        <Date>{formatSeriesDate(payload[0].payload.date)}</Date>
        <Table>
          <thead>
            <tr>
              <th />
              <th>Symbol</th>
              <th>Price</th>
              <th>Volume</th>
            </tr>
          </thead>
          <tbody>
            {payload.map(({ payload: data, name, color }) => (
              <TableRow>
                <CircleContainer>
                  <svg width="14" height="14">
                    <Circle cx="7" cy="7" r="5" color={color} />
                  </svg>
                </CircleContainer>
                <td>{name}</td>
                <td>{formatSeriesNumber(data.price)}</td>
                <td>{data.volume ? formatSeriesFloat(data.volume) : "---"}</td>
              </TableRow>
            ))}
          </tbody>
        </Table>
      </Container>
    );
  }

  return <div />;
};
