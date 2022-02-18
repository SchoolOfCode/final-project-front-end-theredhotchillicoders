import React, { useState, useEffect } from "react";
import "../styles/globals.css";
import { darkMode, lightMode } from "../styles/themes";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

function getActiveMode(currentMode) {
  if (currentMode === "light") {
    return lightMode;
  } else {
    return darkMode;
  }
}

function MyApp({ Component, pageProps }) {
  const [activeMode, setActiveMode] = useState(lightMode);
  const [currentMode, setCurrentMode] = useState("light");

  function toggleColorMode() {
    console.log("Toggle theme");
    const desiredMode = currentMode === "light" ? "dark" : "light";
    setCurrentMode(desiredMode);
  }

  useEffect(() => {
    setActiveMode(getActiveMode(currentMode));
  }, [currentMode]);

  return (
    <ThemeProvider theme={activeMode}>
      <CssBaseline />
      <Component
        pageProps={pageProps}
        toggleColorMode={toggleColorMode}
        theme={currentMode}
      />
    </ThemeProvider>
  );
}

export default MyApp;
