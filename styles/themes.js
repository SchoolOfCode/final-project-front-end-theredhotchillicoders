import { amber, deepOrange, grey } from "@mui/material/colors";
import { createTheme } from "@mui/material";

//Define colours
const darkBlue = "#0a2342";
const cream = "#fdf7ec";

export const lightMode = createTheme({
  palette: {
    type: "light",
    primary: amber,
    divider: amber[200],
    background: {
      default: cream,
    },
    text: {
      primary: darkBlue,
      secondary: grey[800],
    },
  },
  light: {
    background: cream,
    text: darkBlue,
  },
  type: "light", //theme.type property returns whether light or dark is currently applied
});

export const darkMode = createTheme({
  // palette values for dark mode
  palette: {
    type: "dark",
    primary: deepOrange,
    divider: deepOrange[700],
    background: {
      default: darkBlue,
      paper: deepOrange[900],
    },
    text: {
      primary: cream,
      secondary: grey[500],
    },
  },
  type: "dark", //theme.type property returns whether light or dark is currently applied
});

//To use colours from modes use the following syntax:
//theme.darkMode.palette.primary
