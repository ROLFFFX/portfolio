import { Grid, Typography, Box } from "@mui/material";
import React from "react";

const BoxStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const Cloud = () => {
  const fillOpacity = 0.7;
  return (
    <svg viewBox="-20 20 150 100">
      <defs>
        <linearGradient id="pinkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop
            offset="0%"
            style={{ stopColor: "#f00658", stopOpacity: fillOpacity }}
          />
          <stop
            offset="100%"
            style={{ stopColor: "#f06", stopOpacity: fillOpacity }}
          />
        </linearGradient>
      </defs>
      <path
        fill="url(#pinkGradient)"
        d="M 25,60 a 20,20 1 0,0 0,40 h 50 a 20,20 1 0,0 0,-40 a 10,10 1 0,0 -15,-10 a 15,15 1 0,0 -35,10 z"
      />
    </svg>
  );
};
const Cloud2 = () => {
  return (
    <svg viewBox="-40 20 150 100">
      <path
        fill="#f00658"
        d="M 25,60 
           a 20,20 1 0,0 0,40 
           h 50 
           a 20,20 1 0,0 0,-40 
           a 10,10 1 0,0 -15,-10 
           a 15,15 1 0,0 -35,10  
           z"
      />
    </svg>
  );
};

export default function HomePage() {
  return (
    <div>
      <Grid container>
        <Grid item xs={3}>
          <Box border={0}>
            <Cloud></Cloud>
          </Box>
        </Grid>
        <Grid item xs={5}>
          <Box sx={BoxStyle} minHeight="16vh">
            <Box>
              <Typography
                sx={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "20pt",
                  fontWeight: "800",
                  color: "#f00658",
                }}
              >
                {"< ROLF'S BIO >:"}
              </Typography>
            </Box>
          </Box>
          <Box border={0}>
            <Typography
              sx={{
                fontFamily: '"Courier Prime", "Courier", monospace',
                fontSize: "13pt",
              }}
            >
              <span style={{ fontWeight: "bold" }}>Hello.</span> I'm{" "}
              <span style={{ fontWeight: "bold", color: "#f00658" }}>
                Yuxuan(Rolf) Shi
              </span>
              , a junior at Emory University majoring in Computer Science.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={4}></Grid>
      </Grid>
    </div>
  );
}
