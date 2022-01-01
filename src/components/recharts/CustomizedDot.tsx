import React from "react";
import { styled } from "@mui/material/styles";

import { DailyAssetPrice } from "types";

const SellBuyOperationIcon: React.FC<{
  cx: number;
  cy: number;
  strokeColor?: string;
  className?: string;
}> = ({ cx, cy, strokeColor, className }) => (
  <svg
    className={className}
    x={cx - 12}
    y={cy - 20}
    stroke={strokeColor}
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <g>
      <polygon points="12 6.414 19.293 13.707 20.707 12.293 12 3.586 3.293 12.293 4.707 13.707 12 6.414" />
      <polygon points="3.293 18.293 4.707 19.707 12 12.414 19.293 19.707 20.707 18.293 12 9.586 3.293 18.293" />
    </g>
  </svg>
);

const RotatedIcon = styled(SellBuyOperationIcon)(
  ({ rotated }: { rotated?: boolean }) => ({
    g: {
      transform: rotated && "rotateX(185deg) translateY(-24px)",
    },
  })
);

export type CustomizedDotProps = {
  cx?: number;
  cy?: number;
  index?: number;
  color?: string;
  points?: {
    payload: DailyAssetPrice;
  }[];
};

export const CustomizedDot: React.FC<CustomizedDotProps> = ({
  cx,
  cy,
  points,
  index,
  color,
}) => {
  const circle = (
    <circle
      r="3"
      type="natural"
      stroke={color}
      strokeWidth="1"
      fill="#fff"
      width="1130"
      height="311"
      cx={String(cx)}
      cy={String(cy)}
    ></circle>
  );
  const pointInfo = points && points[Number(index)];

  if (!index || !pointInfo) {
    return circle;
  }

  if (pointInfo.payload.volume < points[index + 1]?.payload.volume) {
    return (
      <>
        {circle}
        <RotatedIcon cx={Number(cx)} cy={Number(cy)} strokeColor={color} />
      </>
    );
  } else if (pointInfo.payload.volume > points[index + 1]?.payload.volume) {
    return (
      <>
        {circle}
        <RotatedIcon
          cx={Number(cx)}
          cy={Number(cy)}
          strokeColor={color}
          rotated={true}
        />
      </>
    );
  }

  return circle;
};
