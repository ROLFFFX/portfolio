import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { AiFillMediumCircle } from "react-icons/ai";
import { CgFigma } from "react-icons/cg";
import { FaVideo } from "react-icons/fa";
import { IoGameController } from "react-icons/io5";
import { TbWorldWww } from "react-icons/tb";

export default function GroupProjects() {
  return (
    <React.Fragment>
      <Box>
        <Grid container>
          {/* Proj 0 */}
          <Grid container item xs={6}>
            <Box padding={3} height="38vh" border={0}>
              <Typography
                sx={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "20pt",
                  fontWeight: "800",
                  color: "#f00658",
                }}
              >
                {"Design for Dimensions: Redesigning the Website for Tea Leaf"}
              </Typography>
              <Grid item container xs={12} border={0}>
                <Grid xs={6} border={0}>
                  <img
                    src="/GP1.jpg"
                    alt="GP1"
                    style={{ width: "300px", height: "auto" }}
                  />
                </Grid>
                <Grid xs={6} border={0}>
                  <Typography
                    sx={{
                      fontFamily: '"Courier Prime", "Courier", monospace',
                      fontSize: "11pt",
                    }}
                  >
                    This project involved a{" "}
                    <span style={{ color: "#f00658", fontWeight: "bold" }}>
                      redesign
                    </span>{" "}
                    of the Tea Leaf website through stages of
                    <span style={{ color: "#f00658", fontWeight: "bold" }}>
                      needfinding, mood boarding, and prototyping
                    </span>{" "}
                    across various devices.
                    <a
                      href="https://medium.com/@yshi373/design-for-dimensions-redesigning-the-website-for-tea-leaf-and-creamery-7250d0bde475"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "#f00658", textDecoration: "underline" }}
                    >
                      Read More...
                    </a>
                  </Typography>
                  {/* Link to sources */}
                  <Typography
                    sx={{
                      fontFamily: '"Courier Prime", "Courier", monospace',
                      fontSize: "11pt",
                    }}
                    mt={2}
                  >
                    {
                      <AiFillMediumCircle
                        style={{ position: "relative", top: "5pt" }}
                        size="25px"
                      ></AiFillMediumCircle>
                    }
                    :{" "}
                    <a
                      href="https://medium.com/@yshi373/design-for-dimensions-redesigning-the-website-for-tea-leaf-and-creamery-7250d0bde475"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "#f00658", textDecoration: "underline" }}
                    >
                      Document
                    </a>
                    {/* //Other stuff */}
                    {
                      <CgFigma
                        style={{
                          position: "relative",
                          top: "5pt",
                          marginLeft: "15pt",
                        }}
                        size="25px"
                      ></CgFigma>
                    }
                    :{" "}
                    <a
                      href="https://www.figma.com/file/kbo19GSEVCxryO5VhB6vyh/Tea-Leaf---Integrated?type=design&node-id=0-1&mode=design"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "#f00658", textDecoration: "underline" }}
                    >
                      Figma Design
                    </a>
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          {/* Proj 1/ */}
          <Grid container item xs={6}>
            <Box padding={3} height="38vh" border={0}>
              <Typography
                sx={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "20pt",
                  fontWeight: "800",
                  color: "#f00658",
                }}
              >
                {
                  "Design for Understanding: Data Visualization on Nuclear Testing"
                }
              </Typography>
              <Grid item container xs={12} border={0}>
                <Grid xs={6} border={0}>
                  <img
                    src="GP2.jpg"
                    alt="GP2"
                    style={{ height: "275px", width: "300px" }}
                  />
                </Grid>
                <Grid xs={6} border={0}>
                  <Typography
                    sx={{
                      fontFamily: '"Courier Prime", "Courier", monospace',
                      fontSize: "11pt",
                    }}
                  >
                    This project creates a data visualization of{" "}
                    <span style={{ color: "#f00658", fontWeight: "bold" }}>
                      nuclear testing
                    </span>
                    . By integrating techniques from the{" "}
                    <span style={{ color: "#f00658", fontWeight: "bold" }}>
                      5 Design Sheet method
                    </span>{" "}
                    and feedback through{" "}
                    <span style={{ color: "#f00658", fontWeight: "bold" }}>
                      heuristic evaluation
                    </span>
                    , our team produced a set of both analytical and persuasive
                    graphs.
                    <a
                      href="https://medium.com/@cole.smith/design-for-understanding-nuclear-testing-3e766a4447be"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "#f00658", textDecoration: "underline" }}
                    >
                      Read More...
                    </a>
                  </Typography>
                  {/* Link to sources */}
                  <Typography
                    sx={{
                      fontFamily: '"Courier Prime", "Courier", monospace',
                      fontSize: "11pt",
                    }}
                    mt={2}
                  >
                    {
                      <AiFillMediumCircle
                        style={{ position: "relative", top: "5pt" }}
                        size="25px"
                      ></AiFillMediumCircle>
                    }
                    :{" "}
                    <a
                      href="https://medium.com/@cole.smith/design-for-understanding-nuclear-testing-3e766a4447be"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "#f00658", textDecoration: "underline" }}
                    >
                      Document
                    </a>
                    {/* //Other stuff */}
                    {
                      <TbWorldWww
                        style={{
                          position: "relative",
                          top: "5pt",
                          marginLeft: "15pt",
                        }}
                        size="25px"
                      ></TbWorldWww>
                    }
                    :{" "}
                    <a
                      href="https://nucexpo.vercel.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "#f00658", textDecoration: "underline" }}
                    >
                      Data Viz Website
                    </a>
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          {/* Proj 2 */}
          <Grid container item xs={6} mt={1}>
            <Box padding={3} height="38vh" border={0}>
              <Typography
                sx={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "20pt",
                  fontWeight: "800",
                  color: "#f00658",
                }}
              >
                {"Design for Another World: Anamorphosis in VR"}
              </Typography>
              <Grid item container xs={12} border={0}>
                <Grid xs={6} border={0}>
                  <img
                    src="/GP3.jpg"
                    alt="GP3"
                    style={{ width: "300px", height: "auto" }}
                  />
                </Grid>
                <Grid xs={6} border={0}>
                  <Typography
                    sx={{
                      fontFamily: '"Courier Prime", "Courier", monospace',
                      fontSize: "11pt",
                    }}
                  >
                    This project merges virtual reality with the concept of{" "}
                    <span style={{ color: "#f00658", fontWeight: "bold" }}>
                      anamorphosis
                    </span>{" "}
                    to create interactive, immersive experiences. The
                    development process followed the{" "}
                    <span style={{ color: "#f00658", fontWeight: "bold" }}>
                      design thinking process
                    </span>
                    , while innovatively integrate inspirations from various
                    media to design unique visual illusions.
                    <a
                      href="https://medium.com/@tierranaa29/the-illusive-an-illusionary-exhibit-148fffbb42a7"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "#f00658", textDecoration: "underline" }}
                    >
                      Read More...
                    </a>
                  </Typography>
                  {/* Link to sources */}
                  <Typography
                    sx={{
                      fontFamily: '"Courier Prime", "Courier", monospace',
                      fontSize: "11pt",
                    }}
                    mt={2}
                  >
                    {
                      <AiFillMediumCircle
                        style={{ position: "relative", top: "5pt" }}
                        size="25px"
                      ></AiFillMediumCircle>
                    }
                    :{" "}
                    <a
                      href="https://medium.com/@tierranaa29/the-illusive-an-illusionary-exhibit-148fffbb42a7"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "#f00658", textDecoration: "underline" }}
                    >
                      Document
                    </a>
                    {/* //Other stuff */}
                    {
                      <IoGameController
                        style={{
                          position: "relative",
                          top: "5pt",
                          marginLeft: "15pt",
                        }}
                        size="25px"
                      ></IoGameController>
                    }
                    :{" "}
                    <a
                      href="https://anamorphosis.netlify.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "#f00658", textDecoration: "underline" }}
                    >
                      Online Game Site
                    </a>
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          {/* Proj 3 */}
          <Grid container item xs={6} mt={1}>
            <Box padding={3} height="38vh" border={0}>
              <Typography
                sx={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "20pt",
                  fontWeight: "800",
                  color: "#f00658",
                }}
              >
                {"Re-Design and Extend: I Have Become Data…"}
              </Typography>
              <Grid item container xs={12} border={0}>
                <Grid xs={6} border={0}>
                  <img
                    src="GP4.jpg"
                    alt="GP4"
                    style={{ width: "300px", height: "auto" }}
                  />
                </Grid>
                <Grid xs={6} border={0}>
                  <Typography
                    sx={{
                      fontFamily: '"Courier Prime", "Courier", monospace',
                      fontSize: "11pt",
                    }}
                  >
                    Continuing on the data visualization project, we aim to
                    present{" "}
                    <span style={{ color: "#f00658", fontWeight: "bold" }}>
                      nuclear explosion
                    </span>{" "}
                    data through a{" "}
                    <span style={{ color: "#f00658", fontWeight: "bold" }}>
                      physical installation
                    </span>
                    . After exploring multiple materials and forms, we created
                    <span style={{ color: "#f00658", fontWeight: "bold" }}>
                      acrylic disks
                    </span>{" "}
                    and a{" "}
                    <span style={{ color: "#f00658", fontWeight: "bold" }}>
                      middle size installation
                    </span>{" "}
                    to transform dataset into tagible forms.
                    <a
                      href="https://medium.com/@cole.smith/i-have-become-data-b56f1edeb13f"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "#f00658", textDecoration: "underline" }}
                    >
                      Read More...
                    </a>
                  </Typography>
                  {/* Link to sources */}
                  <Typography
                    sx={{
                      fontFamily: '"Courier Prime", "Courier", monospace',
                      fontSize: "11pt",
                    }}
                    mt={2}
                  >
                    {
                      <AiFillMediumCircle
                        style={{ position: "relative", top: "5pt" }}
                        size="25px"
                      ></AiFillMediumCircle>
                    }
                    :{" "}
                    <a
                      href="https://medium.com/@cole.smith/i-have-become-data-b56f1edeb13f"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "#f00658", textDecoration: "underline" }}
                    >
                      Document
                    </a>
                    {/* //Other stuff */}
                    {
                      <FaVideo
                        style={{
                          position: "relative",
                          top: "5pt",
                          marginLeft: "15pt",
                        }}
                        size="25px"
                      ></FaVideo>
                    }
                    :{" "}
                    <a
                      href="https://www.youtube.com/watch?v=_BoH1koe-Fg"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "#f00658", textDecoration: "underline" }}
                    >
                      Demo Video 1
                    </a>
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: '"Courier Prime", "Courier", monospace',
                      fontSize: "11pt",
                    }}
                    ml={-2.3}
                  >
                    {
                      <FaVideo
                        style={{
                          position: "relative",
                          top: "5pt",
                          marginLeft: "15pt",
                        }}
                        size="25px"
                      ></FaVideo>
                    }
                    :{" "}
                    <a
                      href="https://www.youtube.com/watch?v=FtsK28ho7xI"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "#f00658", textDecoration: "underline" }}
                    >
                      Demo Video 2
                    </a>
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </React.Fragment>
  );
}
