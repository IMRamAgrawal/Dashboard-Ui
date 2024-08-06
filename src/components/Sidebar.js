import React from "react";
import { Drawer, List, ListItem, ListItemIcon } from "@mui/material";
import PowerSettingsNewOutlinedIcon from "@mui/icons-material/PowerSettingsNewOutlined";
import DashboardIcon from "@mui/icons-material/Dashboard";
import HomeIcon from "@mui/icons-material/Home";
import ListAltIcon from "@mui/icons-material/ListAlt";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import AssignmentTurnedInOutlinedIcon from "@mui/icons-material/AssignmentTurnedInOutlined";
import { styled, useTheme } from "@mui/system";

import useMediaQuery from "@mui/material/useMediaQuery";

const drawerWidth = 80;

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  "& .MuiDrawer-paper": {
    width: drawerWidth,
    boxSizing: "border-box",
    backgroundColor: "#202028",
    color: "#fff",
  },
}));

const CustomListItemIcon = styled(ListItemIcon)(({ theme }) => ({
  color: "#fff",
  "&:hover": {
    color: "blue",
  },
}));

const Sidebar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  if (isMobile) {
    return null;
  }
  return (
    <StyledDrawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
      }}
    >
      <List
        sx={{
          position: "relative",

          height: "100vh",
        }}
      >
        <ListItem
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingLeft: "30px",
            rowGap: "50px",
          }}
        >
          <CustomListItemIcon>
            <DashboardIcon style={{ fontSize: 30 }} />
          </CustomListItemIcon>

          <CustomListItemIcon>
            <HomeIcon sx={{ fontSize: 30 }} />
          </CustomListItemIcon>

          <CustomListItemIcon>
            <ListAltIcon style={{ fontSize: 30 }} />
          </CustomListItemIcon>

          <CustomListItemIcon>
            <AssignmentTurnedInOutlinedIcon style={{ fontSize: 30 }} />
          </CustomListItemIcon>

          <CustomListItemIcon>
            <ShoppingBagOutlinedIcon style={{ fontSize: 30 }} />
          </CustomListItemIcon>
        </ListItem>

        <ListItem sx={{ position: "absolute", bottom: "10px" }}>
          <CustomListItemIcon>
            <PowerSettingsNewOutlinedIcon style={{ fontSize: 30 }} />
          </CustomListItemIcon>
        </ListItem>
      </List>
    </StyledDrawer>
  );
};

export default Sidebar;
