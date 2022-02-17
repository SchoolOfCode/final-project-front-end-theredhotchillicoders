<<<<<<< HEAD
import NavBar from "../components/NavBar/NavBar";

const index = () => {
  return (
    <div>
      <h1>Home</h1>
      <NavBar />
    </div>
  );
=======
import NavBar from '../components/NavBar/NavBar.js';

const dashboard = () => {
	return (
		<div>
			<h1>Dashboard</h1>
			<NavBar />
		</div>
	);
>>>>>>> 09ce415bac82b4d59a15570a84b90c722408dc72
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
