import React, { useState } from "react";
import {
  Paper,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Typography,
  Rating,
  Grid,
  Divider,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const feedbacks = [
  {
    name: "Jenny Wilson",
    feedback:
      "Food is one of the basic necessities of life. Food contains nutrients—substances essential for the growth, repair, and maintenance of body tissues and for the regulation of vital processes. Nutrients provide the energy our bodies need to function. The energy in food is measured in units called calories",
    rating: 5,
  },
  {
    name: "Dianne Russell",
    feedback: "We enjoyed the Eggs Benedict served on homemade focaccia bread.",
    rating: 4,
  },
  {
    name: "Dianne Russell",
    feedback: "We enjoyed the Eggs Benedict served on homemade focaccia bread.",
    rating: 4,
  },
  {
    name: "Dianne Russell",
    feedback: "We enjoyed the Eggs Benedict served on homemade focaccia bread.",
    rating: 4,
  },
  // Add more feedback here
];

const CustomerFeedback = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [ratings, setRatings] = useState(feedbacks.map((fb) => fb.rating));

  const handleRatingChange = (index, newValue) => {
    const newRatings = [...ratings];
    newRatings[index] = newValue;
    setRatings(newRatings);
  };

  return (
    <Paper
      sx={{
        padding: isMobile ? "5px" : "10px",
        bgcolor: "#202028",
        color: "white",
        maxHeight: "570px",
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
      <Typography variant={isMobile ? "subtitle1" : "h6"} gutterBottom>
        Customer's Feedback
      </Typography>
      <List sx={{ color: "white" }}>
        {feedbacks.map((fb, index) => (
          <ListItem key={index}>
            <Grid container direction="column">
              <Grid item container alignItems="center">
                <ListItemAvatar>
                  <Avatar>{fb.name[0]}</Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={fb.name}
                  primaryTypographyProps={{
                    variant: isMobile ? "body2" : "body1",
                  }}
                />
              </Grid>
              <Grid
                item
                container
                direction="column"
                sx={{ padding: isMobile ? "5px" : "10px" }}
              >
                <Rating
                  name={`rating-${index}`}
                  value={ratings[index]}
                  onChange={(event, newValue) => {
                    handleRatingChange(index, newValue);
                  }}
                  size={isMobile ? "small" : "medium"}
                />
                <ListItemText
                  sx={{ color: "white", paddingTop: "5px" }}
                  primary={fb.feedback}
                  primaryTypographyProps={{
                    variant: isMobile ? "body2" : "body1",
                  }}
                />
              </Grid>
              <Divider sx={{ backgroundColor: "white", opacity: "0.5" }} />
            </Grid>
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default CustomerFeedback;
