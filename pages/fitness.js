
import ActivityButton from "../components/ActivityButton/ActivityButton.js";
import TimeButton from "../components/TimeButton/TimeButton.js";
import { useState } from "react";
import Link from "next/link";
import { Box, Typography, Grid, Button } from "@mui/material";
import { dummyFitness, times } from "../DummyData/DummyFitnessData.js";
import Calendar from "../components/Calendar/Calendar.js";

const Fitness = () => {

  const [fitnessInfo, setFitnessInfo] = useState({
    title: "",
    category: "",
    description: "",
    date: "",
  });


  

  function getTime(e) {
    setFitnessInfo({ ...fitnessInfo, duration: e.target.innerHTML });
    sendPostRequest(fitnessInfo);
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
  console.log(fitnessInfo);

  return (
    <div>


      <h1 className=" fitnessbg ">Fitness</h1>

      <Calendar setFitnessInfo={setFitnessInfo} fitnessInfo={fitnessInfo} />
      <Grid container>
        {fitnessInfo.title === ""

     

          ? dummyFitness.map((exercise) => (
              <ActivityButton
                title={exercise.title}
                category={exercise.category}
                description={exercise.description}
                key={exercise.title}
                setFitnessInfo={setFitnessInfo}
                image={exercise.image}

                fitnessInfo={fitnessInfo}
                // date={date}

              />
            ))
          : times.map((time, index) => (
              <TimeButton
                time={time}
                key={index}
                setFitnessInfo={setFitnessInfo}
                fitnessInfo={fitnessInfo}
              />
            ))}
      </Grid>

      <Link href="/">

        <a>
          <div className="backBtn">
            <Typography> Back </Typography>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default Fitness;

// create our own array of objects with the exercise information in.
// We will map over this array to create our tiles.
// The tile will be styled in it's own component.
// click the tile then this will hide the exercises & reveal the times.
// somehow we want to save the information on each button.
// This information will be saved in a use state object will be posted to our database.... and fetched when we load the daily page.

//
