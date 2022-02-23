import React, { useState, useEffect } from "react";
import "../styles/globals.css";
import { darkMode, lightMode } from "../styles/themes";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { AuthProvider } from "../contexts/AuthContext";

function MyApp({ Component, pageProps }) {
  console.log("app render");
  const [activeMode, setActiveMode] = useState(lightMode);

  useEffect(() => {
    localStorage.setItem("mode", JSON.stringify(activeMode));
  }, [activeMode]);

  return (
    <ThemeProvider theme={activeMode}>
      <CssBaseline />
      <Component
        pageProps={pageProps}
        toggleColorMode={() =>
          setActiveMode(activeMode.type === "light" ? darkMode : lightMode)
        }
        mode={activeMode.type}
      />
    </ThemeProvider>
  );
}

export default MyApp;
