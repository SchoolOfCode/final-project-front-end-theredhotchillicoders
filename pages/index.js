import NavBar from "../components/NavBar/NavBar";
import React from "react";
import { useEffect } from "react";

const Dashboard = () => {
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://socfinalproject.herokuapp.com/users`
      );
      const data = await response.json();
      console.log(data);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <NavBar />
    </div>
  );
};

export default Dashboard;
