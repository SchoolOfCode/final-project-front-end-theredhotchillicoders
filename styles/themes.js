import { amber, deepOrange, grey } from "@mui/material/colors";
import { createTheme } from "@mui/material";

//Define colours
const darkBlue = "#0a2342";
const cream = "#fdf7ec";

export const lightMode = createTheme({
  palette: {
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
});

export const darkMode = createTheme({
  // palette values for dark mode
  palette: {
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
});
