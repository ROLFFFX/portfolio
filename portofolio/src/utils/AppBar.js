import { Divider, Grid, Box, Button } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const BoxStyle = {
  display: "flex",
  alignitems: "center",
  justifyContent: "center",
  minHeight: "8vh",
};
const ButtonTextStyle = {
  color: "#f00658",
  fontFamily: '"Courier Prime", "Courier", monospace',
  fontSize: "13pt",
};

export default function AppBar() {
  const [menuState, setMenuState] = useState("Design Manifesto");
  const navigate = useNavigate();
  return (
    <div>
      <Grid
        container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Grid item xs={2}></Grid>
        <Grid item xs={2}>
          <Box sx={BoxStyle} bgcolor={""}>
            <Button
              sx={ButtonTextStyle}
              onClick={() => {
                navigate("/");
              }}
            >
              About Me
            </Button>
          </Box>
        </Grid>
        <Grid item xs={2}>
          <Box sx={BoxStyle}>
            <Button
              sx={ButtonTextStyle}
              onClick={() => {
                navigate("/designmanifesto");
              }}
            >
              Design Manifesto
            </Button>
          </Box>
        </Grid>
        <Grid item xs={2}>
          <Box sx={BoxStyle}>
            <Button
              sx={ButtonTextStyle}
              onClick={() => {
                navigate("/personalprojects");
              }}
            >
              Individual Projects
            </Button>
          </Box>
        </Grid>
        <Grid item xs={2}>
          <Box sx={BoxStyle}>
            <Button
              sx={ButtonTextStyle}
              onClick={() => {
                navigate("/groupprojects");
              }}
            >
              Group Projects
            </Button>
          </Box>
        </Grid>
        <Grid item xs={2}></Grid>
        <Divider width="90%"></Divider>
      </Grid>
    </div>
  );
}
