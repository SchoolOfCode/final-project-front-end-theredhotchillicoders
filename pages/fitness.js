import NavBar from "../components/NavBar/NavBar.js";
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

  console.log(fitnessInfo);

  return (
    <div>
      <NavBar />

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
        <div className="backBtn">
          <Typography> Back </Typography>
        </div>
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
