import * as React from "react";
import Grid from "@mui/material";
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
        height: "500px",
      }}
    >
      <CardMedia
        component="img"
        height="300px"
        width=""
        image={recipe.images.REGULAR.url}
        alt={recipe.label}
      />

      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {recipe.label}
        </Typography>
        <div
          style={{
            display: "flex",
            justifyContent: "centre",
            width: "100%",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <Typography variant="body2" color="text.secondary">
            {recipe.yield ? `${recipe.yield} Servings ` : null}{" "}
            {recipe.totalTime ? `|| ${recipe.totalTime} Minutes ` : null}{" "}
            {recipe.calories
              ? `|| ${Math.round(recipe.calories)} Calories`
              : null}
          </Typography>
        </div>
      </CardContent>
      <CardActions>
        <Button size="small">Favourite</Button>
      </CardActions>
    </Card>
  );
}
