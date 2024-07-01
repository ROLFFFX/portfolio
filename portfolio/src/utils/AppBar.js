import { Box, Button, Divider, Grid, Menu, MenuItem } from "@mui/material";
import React from "react";
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
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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
                navigate("/hci");
              }}
            >
              About Me
            </Button>
          </Box>
        </Grid>
        <Grid item xs={2}>
          <Box sx={BoxStyle}>
            <Button sx={ButtonTextStyle} onClick={handleClick}>
              Design Manifesto
            </Button>
            <div>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem
                  onClick={() => {
                    window.open(
                      "https://medium.com/@yshi373/design-for-user-my-design-manifesto-4d87eef8f1e4",
                      "_blank"
                    );
                    setAnchorEl(null);
                  }}
                  sx={{ fontFamily: "monospace" }}
                >
                  View it on&nbsp;
                  <span style={{ color: "#f00658" }}>Medium</span>
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    navigate("/hci/designmanifesto");
                    setAnchorEl(null);
                  }}
                  sx={{ fontFamily: "monospace" }}
                >
                  View it on&nbsp;{" "}
                  <span style={{ color: "#f00658" }}> This Website</span>
                </MenuItem>
              </Menu>
            </div>
          </Box>
        </Grid>
        <Grid item xs={2}>
          <Box sx={BoxStyle}>
            <Button
              sx={ButtonTextStyle}
              onClick={() => {
                navigate("/hci/personalprojects");
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
                navigate("/hci/groupprojects");
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
