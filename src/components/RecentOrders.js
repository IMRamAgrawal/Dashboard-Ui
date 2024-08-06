import React from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Avatar,
  Button,
  Box,
  createTheme,
  ThemeProvider,
} from "@mui/material";

const orders = [
  {
    customer: "Wade Warren",
    avatar: "/static/images/avatar/1.jpg",
    orderNo: "15478256",
    amount: "$124.00",
    status: "Delivered",
  },
  {
    customer: "Jane Cooper",
    avatar: "/static/images/avatar/2.jpg",
    orderNo: "48965786",
    amount: "$305.02",
    status: "Delivered",
  },
  {
    customer: "Guy Hawkins",
    avatar: "/static/images/avatar/3.jpg",
    orderNo: "78985215",
    amount: "$54.88",
    status: "Cancelled",
  },
  {
    customer: "Kristin Watson",
    avatar: "/static/images/avatar/4.jpg",
    orderNo: "20965732",
    amount: "$65.00",
    status: "Pending",
  },
  {
    customer: "Cody Fisher",
    avatar: "/static/images/avatar/5.jpg",
    orderNo: "95715620",
    amount: "$545.00",
    status: "Delivered",
  },
  {
    customer: "Savannah Nguyen",
    avatar: "/static/images/avatar/6.jpg",
    orderNo: "78514568",
    amount: "$128.20",
    status: "Delivered",
  },
  // Add more orders here
];

const theme = createTheme({
  components: {
    MuiTableCell: {
      styleOverrides: {
        root: {
          color: "white", // Sets the default text color for TableCell
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: "white", // Sets the default text color for Typography
        },
      },
    },
  },
});

const RecentOrders = () => {
  return (
    <ThemeProvider theme={theme}>
      <TableContainer
        component={Paper}
        sx={{ padding: "20px", bgcolor: "#202028" }}
      >
        <Typography variant="h6" gutterBottom>
          Recent Orders
        </Typography>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Customer</TableCell>
              <TableCell>Order No.</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.orderNo} sx={{ color: "white" }}>
                <TableCell>
                  <Box display="flex" alignItems="center">
                    <Avatar
                      alt={order.customer}
                      src={order.avatar}
                      style={{ marginRight: "10px" }}
                    />
                    {order.customer}
                  </Box>
                </TableCell>
                <TableCell>{order.orderNo}</TableCell>
                <TableCell>{order.amount}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    sx={{
                      bgcolor:
                        order.status === "Delivered" ? "#175347" : "#5f3339",
                      borderRadius: "25px",
                      fontSize: "10px",
                      height: "20px",
                      color:
                        order.status === "Delivered" ? "#09a87a" : "#da5857",
                      alignItems: "center",
                      textTransform: "none",
                    }}
                  >
                    {order.status}
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </ThemeProvider>
  );
};

export default RecentOrders;
