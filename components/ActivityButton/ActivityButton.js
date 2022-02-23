import React from "react";

import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";

function ActivityButton({
  title,
  description,
  category,
  setFitnessInfo,
  image,
}) {
  function getExercise() {
    setFitnessInfo({
      title: title,
      category: category,
      description: description,
    });
  }

  return (
    <Grid item xs={6} sm={3} md={3} p={1}>
      <Card
        sx={{ maxWidth: 200, bgcolor: "#f58452", borderRadius: "30px", p: 3 }}
      >
        <CardActionArea onClick={getExercise}>
          <CardMedia component="img" height="100%" image={image} alt={title} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" color="#fff">
              {title}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}
export default ActivityButton;

// Description text removed
{
  /* <Typography variant="body2" color="#fff">
{description}
</Typography> */
}
