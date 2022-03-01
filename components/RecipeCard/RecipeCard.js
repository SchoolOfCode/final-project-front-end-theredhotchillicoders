import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function RecipeCard({ recipe }) {
  return (
    <Card
      className="recipeCard"
      style={{
        marginLeft: "auto",
        marginRight: "auto",
        marginBottom: "3rem",
        overflow: "hidden",
      }}
    >
      <CardMedia
        component="img"
        height="300px"
        width=""
        image={recipe.image}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {recipe.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Description
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Favourite</Button>
      </CardActions>
    </Card>
  );
}
