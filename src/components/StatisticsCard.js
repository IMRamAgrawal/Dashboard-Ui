import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { Autocomplete, TextField, Popper } from "@mui/material";
import GoalCard from "./GoalCard";

const StatisticsCard = ({ title, value, button, cardColor, color }) => {
  const top100Films = [
    { label: "1%" },
    { label: "2%" },
    { label: "3%" },
    { label: "4%" },
    { label: "5%" },
  ];
  const defaultValue = top100Films.find((option) => option.label === "3%");
  const CustomPopper = (props) => {
    return <Popper {...props} placement="top-start" />;
  };
  return (
    <Card sx={{ position: "relative", bgcolor: "#202028", color: "white" }}>
      <CardContent>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <IconButton
            size="large"
            aria-label={button?.ariaLabel || ""}
            onClick={button?.onClick}
            aria-controls={button?.ariaControls}
            aria-haspopup={button?.ariaHaspopup}
            color="inherit"
            sx={{
              width: 38,
              height: 35,
              borderRadius: "25%",
              backgroundColor: cardColor,
            }}
          >
            {button}
          </IconButton>
          <Typography variant="h8">{title}</Typography>
          <Typography variant="h5" sx={{ paddingTop: "5px" }}>
            {value}
          </Typography>
        </div>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={top100Films}
          defaultValue={defaultValue}
          PopperComponent={CustomPopper}
          sx={{ width: 70, position: "absolute", bottom: 10, right: 5 }}
          renderInput={(params) => (
            <TextField
              {...params}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "transparent",
                  },
                  "&:hover fieldset": {
                    borderColor: "transparent",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "transparent",
                  },
                },
                "& .MuiInputLabel-root": {
                  color: color,
                },
                "& .MuiInputBase-input": {
                  color: color,
                },
              }}
            />
          )}
        />
        {(title==="Net Profit") ? <GoalCard/> : "" }
      </CardContent>
    </Card>
  );
};

export default StatisticsCard;
