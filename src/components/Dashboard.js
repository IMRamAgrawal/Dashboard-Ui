import React from "react";
import { Grid, Paper, Typography, Box } from "@mui/material";
import StatisticsCard from "./StatisticsCard";
import RecentOrders from "./RecentOrders";
import CustomerFeedback from "./CustomerFeedback";
import ActivityChart from "./ActivityChart";
import MarkEmailUnreadOutlinedIcon from "@mui/icons-material/MarkEmailUnreadOutlined";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import RouteIcon from "@mui/icons-material/Route";
import GoalCard from "./GoalCard";

const Dashboard = () => {
  return (
    <Box
      sx={{
        overflow: "auto",
        "&::-webkit-scrollbar": {
          width: "8px",
          height: "80px",
        },
        "&::-webkit-scrollbar-track": {
          background: "#202028",
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "#888",
          borderRadius: "10px",
          border: "2px solid #202028",
        },
      }}
    >
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={4} md={2}>
          <StatisticsCard
            title="Total Orders"
            value="75"
            button={<ShoppingBagIcon sx={{ fontSize: 20 }} />}
            cardColor="#283267"
            color="green"
          />
        </Grid>
        <Grid item xs={4} md={2}>
          <StatisticsCard
            title="Total Delivered"
            value="78"
            button={<ShoppingBagIcon sx={{ fontSize: 20 }} />}
            cardColor="#195146"
            color="red"
          />
        </Grid>
        <Grid item xs={4} md={2}>
          <StatisticsCard
            title="Total Cancelled"
            value="05"
            button={<ShoppingBagIcon sx={{ fontSize: 20 }} />}
            cardColor="#5f3237"
            color="green"
          />
        </Grid>
        <Grid item xs={4} md={2}>
          <StatisticsCard
            title="Total Revenue"
            value="$12k"
            button={<RouteIcon sx={{ fontSize: 20 }} />}
            cardColor="#5b2a4a"
            color="red"
            
          />
        </Grid>

        <Grid item xs={8} md={4}>
          <StatisticsCard title="Net Profit" value="$6759.25" color="green"/>
        </Grid>
        <Grid item xs={12} md={8}>
          <ActivityChart />
        </Grid>

        <Grid container spacing={4} sx={{ paddingLeft: "20px" }}>
          <Grid item xs={12} md={8}>
            <RecentOrders />
          </Grid>
          <Grid item xs={12} md={4}>
            <CustomerFeedback /
              >
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
