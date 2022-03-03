import { useEffect, useState } from "react";
import Link from "next/link";
import { Box, Typography, Grid, Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import RecipeCard from "../components/RecipeCard/RecipeCard.js";

async function fetchData(searchTerm) {
  let query = {
    recipes: searchTerm,
  };
  let authToken = sessionStorage.getItem("Auth Token");
  const response = await fetch(`http://localhost:3001/recipes/search`, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + authToken,
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(query), // body data type must match "Content-Type" header
  });
  const data = await response.json();
  console.log(data.payload);
  return data.payload;
}

const RecipePage = ({ user }) => {
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  function handleChange(value) {
    setSearchInput(value);
  }

  async function fetchResults(event) {
    event.preventDefault();
    const results = await fetchData(searchInput);
    setSearchResults([...results]);
  }

  return (
    <>
      <h1 className=" recipesbg ">Recipes</h1>
      <div className="searchContainer">
        <form onSubmit={(e) => fetchResults(e)}>
          <TextField
            value={searchInput}
            onChange={(e) => handleChange(e.target.value)}
            fullWidth
            label="Search for a recipe"
            id="fullWidth"
          />
          <button onClick={(e) => fetchResults(e)}>Search</button>
        </form>
        <h1>Results: </h1>
        {/* <div className="resultsContainer"> */}
        <Grid container>
          {searchResults.length > 0
            ? searchResults.map((recipe, index) => (
                <Grid item xs={12} sm={4} md={4} p={1}>
                  <RecipeCard key={index} recipe={recipe}></RecipeCard>
                </Grid>
              ))
            : null}
        </Grid>
        {/* </div> */}
        <Link href="/">
          <a style={{ overflow: "hidden" }}>
            <div className="backBtn">
              <Typography> Back </Typography>
            </div>
          </a>
        </Link>
      </div>
    </>
  );
};

export default RecipePage;

// create our own array of objects with the exercise information in.
// We will map over this array to create our tiles.
// The tile will be styled in it's own component.
// click the tile then this will hide the exercises & reveal the times.
// somehow we want to save the information on each button.
// This information will be saved in a use state object will be posted to our database.... and fetched when we load the daily page.

//
