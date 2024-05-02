import { Grid, Typography, Box } from "@mui/material";
import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AiFillMediumCircle } from "react-icons/ai";
import { MdOutlineMap } from "react-icons/md";
import { MdDraw } from "react-icons/md";

export default function PersonalProjects() {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <Grid container>
        <Grid item xs={6}>
          <Box padding={3} height="38vh">
            <Typography
              sx={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "24pt",
                fontWeight: "800",
                color: "#f00658",
              }}
            >
              {"<Individual Project>:"}
            </Typography>
            <br></br>
            <Typography
              sx={{
                fontFamily: '"Courier Prime", "Courier", monospace',
                fontSize: "13pt",
              }}
            >
              This page displays projects conducted by myself, each delving into
              various stages of the{" "}
              <span style={{ color: "#f00658", fontWeight: "bold" }}>
                design thinking process
              </span>
              . Collectively, these projects explore the full spectrum of design
              stages.
            </Typography>
            <br></br>
            <Typography
              sx={{
                fontFamily: '"Courier Prime", "Courier", monospace',
                fontSize: "13pt",
              }}
            >
              Last but not least, a personal "
              <span
                style={{ color: "#f00658", textDecoration: "underline" }}
                onClick={() => {
                  navigate("/designmanifesto");
                }}
              >
                Design Manifesto
              </span>
              " is done to encapsulate a holistic reflection on my own
              principles of design thinking.
            </Typography>
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
              {"Needfinding in UX of Fitness & Wellness Apps"}
            </Typography>
            <Grid item container xs={12} border={0}>
              <Grid xs={6} border={0}>
                <img
                  src="/PP1.jpg"
                  alt="PP1"
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
                  I delved into{" "}
                  <span style={{ color: "#f00658", fontWeight: "bold" }}>
                    user experiences{" "}
                  </span>
                  with fitness & wellness apps through detailed interviews,
                  unveiling insights into user engagement and motivational
                  strategies. By using{" "}
                  <span style={{ color: "#f00658", fontWeight: "bold" }}>
                    needfinding, interviewing, and empathetic analysis
                  </span>
                  , I guided improvements in app design to better meet user
                  needs and enhance user satisfaction.{" "}
                  <a
                    href="https://medium.com/@yshi373/needfinding-in-ux-of-fitness-wellness-apps-a2acd5e578ee"
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
                    href="https://medium.com/@yshi373/needfinding-in-ux-of-fitness-wellness-apps-a2acd5e578ee"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#f00658", textDecoration: "underline" }}
                  >
                    Document
                  </a>
                  {/* //Other stuff */}
                  {
                    <MdOutlineMap
                      style={{
                        position: "relative",
                        top: "5pt",
                        marginLeft: "15pt",
                      }}
                      size="25px"
                    ></MdOutlineMap>
                  }
                  :{" "}
                  <a
                    href="https://medium.com/@yshi373/needfinding-in-ux-of-fitness-wellness-apps-a2acd5e578ee"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#f00658", textDecoration: "underline" }}
                  >
                    Empathy Map
                  </a>
                </Typography>
              </Grid>
            </Grid>
            <Typography
              mt={-3}
              sx={{
                fontFamily: '"Courier Prime", "Courier", monospace',
                fontSize: "11pt",
              }}
            >
              {"(Need-finding, Empathize, Define)"}
            </Typography>
          </Box>
        </Grid>
        {/* Proj 2 */}
        <Grid container item xs={6} mt={-3}>
          <Box padding={3} height="38vh" border={0}>
            <Typography
              sx={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "20pt",
                fontWeight: "800",
                color: "#f00658",
              }}
            >
              {"Ideation/Prototyping in Fitness&Wellness Apps"}
            </Typography>
            <Grid item container xs={12} border={0}>
              <Grid xs={6} border={0}>
                <img
                  src="/PP2.jpg"
                  alt="PP2"
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
                  Resuming on the Needfinding Project, I dig into the
                  "subsequent" stages of design thinking process. Through
                  creating{" "}
                  <span style={{ color: "#f00658", fontWeight: "bold" }}>
                    POVs
                  </span>{" "}
                  and{" "}
                  <span style={{ color: "#f00658", fontWeight: "bold" }}>
                    HMW statements
                  </span>
                  , I developed paper prototypes and move into the{" "}
                  <span style={{ color: "#f00658", fontWeight: "bold" }}>
                    iteration cycle
                  </span>{" "}
                  of{" "}
                  <span style={{ color: "#f00658", fontWeight: "bold" }}>
                    prototyping and evaluation
                  </span>
                  .{" "}
                  <a
                    href="https://medium.com/@yshi373/ideation-prototyping-in-fitness-wellness-apps-c00a5213fa81"
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
                    href="https://medium.com/@yshi373/ideation-prototyping-in-fitness-wellness-apps-c00a5213fa81"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#f00658", textDecoration: "underline" }}
                  >
                    Document
                  </a>
                  {/* //Other stuff */}
                  {
                    <MdDraw
                      style={{
                        position: "relative",
                        top: "5pt",
                        marginLeft: "15pt",
                      }}
                      size="25px"
                    ></MdDraw>
                  }
                  :{" "}
                  <a
                    href="https://drive.google.com/file/d/1rRv57qQSArvAk_FbeQ2v45g07na4gv09/view?usp=drive_link"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#f00658", textDecoration: "underline" }}
                  >
                    Paper Prototypes
                  </a>
                </Typography>
              </Grid>
            </Grid>
            <Typography
              //   mt={0.5}
              sx={{
                fontFamily: '"Courier Prime", "Courier", monospace',
                fontSize: "11pt",
              }}
            >
              {"(Ideation, Prototyping, Evaluation)"}
            </Typography>
          </Box>
        </Grid>
        {/* Proj 3 */}
        <Grid container item xs={6} mt={-3}>
          <Box padding={3} height="38vh" border={0}>
            <Typography
              sx={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "20pt",
                fontWeight: "800",
                color: "#f00658",
              }}
            >
              {"Accessiblility Assessment on Emory University"}
            </Typography>
            <Grid item container xs={12} border={0}>
              <Grid xs={6} border={0}>
                <img
                  src="/PP3.jpg"
                  alt="PP3"
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
                  This project critically assessed the{" "}
                  <span style={{ color: "#f00658", fontWeight: "bold" }}>
                    handicap accessibility
                  </span>{" "}
                  of pathways at Emory University for individuals with
                  disabilities, using an{" "}
                  <span style={{ color: "#f00658", fontWeight: "bold" }}>
                    experiential approach
                  </span>{" "}
                  to simulate wheelchair navigation. The study highlighted
                  significant strengths and potential improvements based on
                  observations of obstacles encountered, integrating the
                  <span style={{ color: "#f00658", fontWeight: "bold" }}>
                    Universal Design Principles
                  </span>{" "}
                  throughout the assessment.
                  <a
                    href="https://medium.com/@yshi373/design-for-accessibility-assessment-on-handicap-accessible-pathways-at-emory-university-atlanta-0c592391097e"
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
                    href="https://medium.com/@yshi373/design-for-accessibility-assessment-on-handicap-accessible-pathways-at-emory-university-atlanta-0c592391097e"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#f00658", textDecoration: "underline" }}
                  >
                    Document
                  </a>
                  {/* //Other stuff */}
                  {
                    <MdOutlineMap
                      style={{
                        position: "relative",
                        top: "5pt",
                        marginLeft: "15pt",
                      }}
                      size="25px"
                    ></MdOutlineMap>
                  }
                  :{" "}
                  <a
                    href=" https://www.dropbox.com/scl/fi/6viwy9xlve89t1t1julcs/Emory-University-Accessibility-Annotated-Map.jpg?rlkey=bb6e9cmadbpplk6eiiv0tkou0&dl=0"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#f00658", textDecoration: "underline" }}
                  >
                    Annotated Map
                  </a>
                </Typography>
              </Grid>
            </Grid>
            <Typography
               mt={-3}
              sx={{
                fontFamily: '"Courier Prime", "Courier", monospace',
                fontSize: "11pt",
              }}
            >
              {"(Evaluation)"}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
