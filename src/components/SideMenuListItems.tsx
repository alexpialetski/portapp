import React, { useCallback } from "react";
import { useHistory, useLocation } from "react-router-dom";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import UploadFileRoundedIcon from "@mui/icons-material/UploadFileRounded";
import PieChartIcon from "@mui/icons-material/PieChart";
import { PAGE_SLUG } from "constants/app";

export const LINKS: Array<{
  path: string;
  text: string;
  Icon: React.ReactNode;
}> = [
  {
    path: `/${PAGE_SLUG.upload}`,
    text: "Upload",
    Icon: <UploadFileRoundedIcon />,
  },
  {
    path: `/${PAGE_SLUG.portfolio}`,
    text: "Portfolio",
    Icon: <BusinessCenterIcon />,
  },
  {
    path: `/${PAGE_SLUG.assets}`,
    text: "Asset",
    Icon: <PieChartIcon />,
  },
];

export const SideMenuListItems: React.FC = () => {
  const history = useHistory();
  const location = useLocation();

  const onButtonClick = useCallback(
    (path: string) => () => {
      history.push(path);
    },
    [history]
  );
  const isLinkActive = (path: string) => location.pathname.includes(path);

  return (
    <List>
      {LINKS.map(({ Icon, text, path }) => (
        <ListItemButton
          key={path}
          onClick={onButtonClick(path)}
          selected={isLinkActive(path)}
        >
          <ListItemIcon>{Icon}</ListItemIcon>
          <ListItemText primary={text} />
        </ListItemButton>
      ))}
    </List>
  );
};
