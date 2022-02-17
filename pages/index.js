import NavBar from "../components/NavBar/NavBar";

const index = () => {
  return (
    <div>
      <h1>Home</h1>
      <NavBar />
    </div>
  );
};

export default index;

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
