import NavBar from "../components/NavBar/NavBar.js";

export default function Dashboard({ toggleColorMode, theme }) {
  return (
    <div>
      <NavBar theme={theme} />
      <h1>Dashboard</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ullam
        laborum deserunt consequatur, assumenda quos. Aspernatur placeat ex
        error provident unde velit temporibus libero. Quaerat, temporibus
        tenetur dignissimos perspiciatis libero quasi! Eaque maxime fugiat
        nesciunt accusamus dolorum eligendi maiores reprehenderit quibusdam
        voluptate, aperiam, quia ad dolore. Provident minima similique aliquid?
      </p>
      <button onClick={toggleColorMode}>Light/dark mode</button>
    </div>
  );
}

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
