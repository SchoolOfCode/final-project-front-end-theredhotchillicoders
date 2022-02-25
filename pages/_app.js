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
import { getAuth, getIdToken } from "firebase/auth";
import { Box, CircularProgress } from "@mui/material";

const auth = getAuth();

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [activeMode, setActiveMode] = useState(lightMode);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState();
  const [isLoading, setIsLoading] = useState(true);
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
      {isLoggedIn ? (
        <>
          <NavBar></NavBar>
          <Component
            isLoggedIn={isLoggedIn}
            setIsLoggedIn={setIsLoggedIn}
            pageProps={pageProps}
            toggleColorMode={() =>
              setActiveMode(activeMode.type === "light" ? darkMode : lightMode)
            }
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
