import NavBar from "../components/NavBar/NavBar.js";

const dashboard = () => {
  return (
    <div>
      <NavBar />
      <h1>Dashboard</h1>
    </div>
  );
};

export default dashboard;

/* Home page components:
navBar
title that changes with time of day 
button for light and dark mode 
container
    -daily progress bar 
        -title 
        - bar
    *how to get progress bar starting on 0% with 0 tasks
  container
    - tasks
  add tasks button
  */
