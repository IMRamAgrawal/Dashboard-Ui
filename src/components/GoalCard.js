import * as React from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

import { PieChart } from "@mui/x-charts/PieChart";

const data2 = [
  { label: "A1", value: 70, color: "#FF6384" }, // Red color for A1
  { label: "A2", value: 30, color: "#36A2EB" }, // Blue color for A2
];

const series = [
  {
    innerRadius: 35,
    outerRadius: 50,
    id: "series-2",
    data: data2,
  },
];

export default function PieClickNoSnap() {
  const [itemData, setItemData] = React.useState();

  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      spacing={{ xs: 0, md: 4 }}
      sx={{ width: "100%" }}
    >
      <Box
        sx={{
          flexGrow: 1,
          position: "absolute",
          bottom: 5,
          right: 5,
          color: "white",
        }}
      >
        <PieChart
          series={series}
          width={200}
          height={150}
          slotProps={{
            legend: { hidden: true },
          }}
          onItemClick={(event, d) => setItemData(d)}
          // Provide the color mapping if needed
          color={data2.map((d) => d.color)}
        />
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-104%, -50%)",
            textAlign: "center",
            pointerEvents: "none", // Prevent interaction with the text
          }}
        >
          <Typography
            variant="h6"
            sx={{ color: "text.primary", fontSize: "20px", color: "white" }}
          >
            70%
          </Typography>
          <Typography
            variant="h6"
            sx={{ color: "text.primary", fontSize: "12px", color: "white" }}
          >
            Goal Completed
          </Typography>
        </Box>
      </Box>

      <Stack direction="column" sx={{ width: { xs: "100%", md: "40%" } }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <IconButton
            aria-label="reset"
            size="small"
            onClick={() => {
              setItemData(null);
            }}
          ></IconButton>
        </Box>
      </Stack>
    </Stack>
  );
}
