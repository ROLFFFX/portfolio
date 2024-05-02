import { Divider, Grid, Box, Button } from "@mui/material";
import React, { useState } from "react";

const BoxStyle = {
  display: "flex",
  alignitems: "center",
  justifyContent: "center",
  minHeight: "10vh",
};
const ButtonTextStyle = {
  color: "#f00658",
  fontFamily: '"Courier Prime", "Courier", monospace',
  fontSize: "13pt",
};

export default function AppBar() {
  const [menuState, setMenuState] = useState("Design Manifesto");
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
          <Box sx={BoxStyle}>
            <Button sx={ButtonTextStyle}>About Me</Button>
          </Box>
        </Grid>
        <Grid item xs={2}>
          <Box sx={BoxStyle}>
            <Button sx={ButtonTextStyle}>Design Manifesto</Button>
          </Box>
        </Grid>
        <Grid item xs={2}>
          <Box sx={BoxStyle}>
            <Button sx={ButtonTextStyle}>Personal Projects</Button>
          </Box>
        </Grid>
        <Grid item xs={2}>
          <Box sx={BoxStyle}>
            <Button sx={ButtonTextStyle}>Group Projects</Button>
          </Box>
        </Grid>
        <Grid item xs={2}></Grid>
        <Divider width="90%"></Divider>
      </Grid>
    </div>
  );
}
