import React from "react";

import {
  Grid,
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from "@mui/material";

function TimeButton({ time, setFitnessInfo, fitnessInfo }) {
  function getTime(e) {
    setFitnessInfo({ ...fitnessInfo, duration: e.target.innerHTML });
    sendPostRequest(fitnessInfo);
    window.location.replace("/");
  }

  async function sendPostRequest(fitnessInfo) {
    // Default options are marked with *
    const response = await fetch(
      `https://socfinalproject.herokuapp.com/activities`,
      {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(fitnessInfo), // body data type must match "Content-Type" header
      }
    );
    // return response.json(); // parses JSON response into native JavaScript objects
  }

  return (
    <div>
      <Grid item xs={12} sm={6} md={3} p={1}>
        <Card sx={{ maxWidth: 345, bgcolor: "#f58452", borderRadius: "30px" }}>
          <CardActionArea onClick={getTime}>
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                color="#fff"
                align="center"
              >
                {time}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </div>
  );
}

export default TimeButton;

//we want to add a calender on this page
// select date and add this to our object of setFitnessInfo
// then send this to the data base
// we need to add date columv to the database
