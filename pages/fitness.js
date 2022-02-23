import ActivityButton from "../components/ActivityButton/ActivityButton.js";
import TimeButton from "../components/TimeButton/TimeButton.js";
import { useState } from "react";
import Link from "next/link";
import { Box } from "@mui/material";

const dummyFitness = [
  {
    title: "running",
    category: "fitness",
    description: "run to the shops",
    duration: "45 minutes",
  },
  {
    title: "weights",
    category: "fitness",
    description: "20kgs",
  },
  {
    title: "mat workout",
    category: "fitness",
    description: "sit ups",
  },
  {
    title: "Skipping",
    category: "fitness",
    description: "skip outside",
  },
  {
    title: "Cycling",
    category: "fitness",
    description: "cycle 10 miles",
  },
  {
    title: "Swimming",
    category: "fitness",
    description: "Swim 10 lengths",
  },
];

const times = ["15 mins", "30mins", "45mins", "1 hours"];

const Fitness = () => {
  const [fitnessInfo, setFitnessInfo] = useState();

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
      <h1>Fitness</h1>

      <Box sx={{ display: "flex", flexWrap: "wrap" }}>
        {fitnessInfo === undefined
          ? dummyFitness.map((exercise) => (
              <ActivityButton
                title={exercise.title}
                category={exercise.category}
                description={exercise.description}
                key={exercise.title}
                setFitnessInfo={setFitnessInfo}
              />
            ))
          : times.map((time, index) => (
              <TimeButton time={time} key={index} onClick={getTime} />
            ))}
      </Box>

      <Link href="/">Back</Link>
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
