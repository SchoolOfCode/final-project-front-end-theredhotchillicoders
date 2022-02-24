import React from "react";
import css from "./ProgressBar.module.css";
import {
  LinearProgress,
  Box,
  Typography,
  linearProgressClasses,
} from "@mui/material";
import { styled } from "@mui/material/styles";

const green = "#8fd89b";
const white = "#ffffff";
const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: white,
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: green,
  },
}));

function ProgressBar({ TaskPercent }) {
  {
    return (
      <Box
        backgroundColor="#f5f0e669"
        border="1px solid rgba(0, 0, 0, 0.151)"
        padding="30px"
        borderRadius="20px"
        marginTop="1rem"
        marginLeft="auto"
        marginRight="auto"
      >
        <h4 style={{ margin: "1px" }}>Your Daily Progress:</h4>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box sx={{ width: "90%", mr: 5, ml: 5 }}>
            <BorderLinearProgress
              variant="determinate"
              value={TaskPercent}
              style={{
                height: "20px",
              }}
            />
          </Box>
          <Box sx={{ minWidth: 35 }}>
            <Typography variant="body2" color="text.secondary">
              {TaskPercent}%
            </Typography>
          </Box>
        </Box>
      </Box>
    );
  }
}

export default ProgressBar;
