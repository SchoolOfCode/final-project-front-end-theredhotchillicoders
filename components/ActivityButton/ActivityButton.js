import React from "react";

import {
  Button,
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";

function ActivityButton({ title, description, category, setFitnessInfo }) {
  function getExercise() {
    setFitnessInfo({
      title: title,
      category: category,
      description: description,
    });
  }

  return (
    <Grid item xs={12} sm={6} md={3}>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea onClick={getExercise}>
          <CardMedia
            component="img"
            height="140"
            image="/static/images/cards/contemplative-reptile.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );

  {
    /* <Button
        sx={{ p: 15, m: 1, width: 30, height: 30 }}
        variant="contained"
        onClick={getExercise}
      >
        {title}
      </Button>
    </Grid> 
  );*/
  }
}
export default ActivityButton;
