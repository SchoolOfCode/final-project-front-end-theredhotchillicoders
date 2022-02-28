import React, { useState, useEffect } from "react";
import "../styles/globals.css";
import { darkMode, lightMode } from "../styles/themes";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import NavBar from "../components/NavBar/NavBar";
import "normalize.css/normalize.css";
import { app } from "../components/firebaseAuth/firebase";
import { useRouter } from "next/router";
import LoginForm from "../components/LoginForm/LoginForm";
import SignupForm from "../components/SignupForm/SignupForm";
import { getAuth, getIdToken, onAuthStateChanged } from "firebase/auth";
import { Box, Button, CircularProgress } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import ModeNightIcon from "@mui/icons-material/ModeNight";

const auth = getAuth();

function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState();
  const router = useRouter();
  const [activeMode, setActiveMode] = useState(lightMode);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const icon =
    activeMode.type === "light" ? <LightModeIcon /> : <ModeNightIcon />;

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        console.log(user.accessToken);
        const uid = user.uid;
        sessionStorage.setItem("Auth Token", user.accessToken);
        // ...
      } else {
        // User is signed out
        // ...
        console.log("User is not logged in");
      }
    });
  }, []);

  useEffect(() => {
    sessionStorage.setItem("mode", JSON.stringify(activeMode));
  }, [activeMode]);

  useEffect(() => {
    let authToken = sessionStorage.getItem("Auth Token");
    if (!authToken) {
      setIsLoading(false);
    } else {
      setIsLoggedIn(true);
      setIsLoading(false);
    }
  }, []);
  return (
    <ThemeProvider theme={activeMode}>
      <CssBaseline />
      {user ? (
        <>
          <NavBar></NavBar>
          <Component
            icon={icon}
            isLoggedIn={isLoggedIn}
            setIsLoggedIn={setIsLoggedIn}
            pageProps={pageProps}
            toggleColorMode={() =>
              setActiveMode(activeMode.type === "light" ? darkMode : lightMode)
            }
            user={user}
            mode={activeMode.type}
          />
        </>
      ) : isLoading ? (
        <Box sx={{ display: "flex" }}>
          <CircularProgress></CircularProgress>
        </Box>
      ) : (
        <>
          <LoginForm
            setIsLoggedIn={setIsLoggedIn}
            setUser={setUser}
          ></LoginForm>
          <SignupForm
            setIsLoggedIn={setIsLoggedIn}
            setUser={setUser}
          ></SignupForm>
        </>
      )}
    </ThemeProvider>
  );
}

export default MyApp;
