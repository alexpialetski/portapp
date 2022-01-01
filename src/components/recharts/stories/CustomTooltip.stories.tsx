import { CustomTooltip, CustomTooltipProps } from "../CustomTooltip";

const ARGS: CustomTooltipProps = {
  active: true,
  payload: [
    {
      name: "ETH",
      color: "rgb(15, 131, 171)",
      payload: {
        date: new Date().getTime(),
        price: 1000.123,
        volume: 100.123,
      },
    },
    {
      name: "MATIC",
      color: "rgb(25, 131, 171)",
      payload: {
        date: new Date().getTime(),
        price: 2000.123,
        volume: 200.123,
      },
    },
  ],
};

export default {
  title: "Components/CustomTooltip",
  component: CustomTooltip,
  parameters: { layout: "centered" },
  args: ARGS,
};

export const Default = CustomTooltip.bind({});
