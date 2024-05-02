import React, { useEffect, useState } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Box, Grid, Typography, Button, Divider, Fab } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
const typ_mono = [
  { fontSize: "20pt", fontFamily: "monospace", fontWeight: "bold" },
  { fontSize: "14pt", fontFamily: "monospace", fontWeight: "bold" },
  { fontSize: "10pt", fontFamily: "monospace" },
  { fontSize: "8pt", fontFamily: "monospace", textAlign: "center" },
  {
    color: "#f00658",
    fontWeight: "bold",
  },
];

export default function EpubReader() {
  const [page, setPage] = useState(1);

  const pages = {
    1: [<P1 />, <P2 />],
    3: [<P3 />, <P4 />],
    5: [<P5 />, <P6 />],
    7: [<P7 />, <P8 />],
    9: [<P9 />, <P10 />],
    11: [<P11 />, <P12 />],
  };

  function forward() {
    setPage((prev) => (prev < 11 ? prev + 2 : prev)); // Ensure no increment beyond total pages
  }

  function backward() {
    setPage((prev) => (prev > 1 ? prev - 2 : prev)); // Ensure no decrement below 1
  }

  const currentPage = pages[page] || pages[1];

  return (
    <Box>
      <Grid container>
        {/* Left Button */}
        <Grid item xs={1}>
          <Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              height={"80vh"}
            >
              <Fab
                sx={{ bgcolor: "#f00658", color: "white" }}
                onClick={backward}
              >
                <ArrowBackIosNewIcon />
              </Fab>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={5}>
          <Box height={"83vh"} padding={3}>
            {currentPage[0]}
          </Box>
        </Grid>
        <Grid item>
          <Divider
            orientation="vertical"
            style={{
              height: "100%",
              borderRightWidth: 1,
              marginRight: "-1px",
            }}
          />
        </Grid>
        <Grid item xs={5}>
          <Box height={"83vh"} padding={3}>
            {currentPage[1]}
          </Box>
        </Grid>
        {/* Right Button */}
        <Grid item xs={1}>
          <Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              height={"80vh"}
            >
              <Fab
                sx={{ bgcolor: "#f00658", color: "white" }}
                onClick={forward}
              >
                <ArrowForwardIosIcon />
              </Fab>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

function P1() {
  return (
    <Box>
      <Typography sx={typ_mono[0]}>Introduction</Typography>
      <img src="img1.jpg" alt="My Design Manifesto" width="100%"></img>
      <Typography sx={typ_mono[1]}>
        Navigating the Complexity of Human-Centered Design
      </Typography>
      <br></br>
      <Typography sx={typ_mono[2]}>
        In the realm of Human-Computer Interaction(HCI), “design” transcends the
        mere “aesthetics of user interfaces” as most of people tend to think,
        but touches the very core of human experience. As we delve into the
        digital era, the ubiquity of computers in our lives makes HCI
        increasingly vital, as it significantly shapes the quality of our daily
        lives. This manifesto is a high-level conclusion of my perspectives on
        human-centered designs through various HCI projects this semester. It is
        a reflection of my evolving design philosophy — one deeply rooted in the
        principles of human-centered design.
      </Typography>
      <br></br>
      <Typography sx={typ_mono[2]}>
        Human-centered design is essentially a dialogue between user and
        designer, which seeks to understand and respond to the nuanced needs of
        diverse individuals. In the pages that follow, I will delve into
      </Typography>
    </Box>
  );
}

function P2() {
  return (
    <Box>
      <Typography sx={typ_mono[2]}>
        how I approach human-centered design by reflecting on how my design
        philosophy evolves over projects, as well as how I developed my personal
        design framework.
      </Typography>
      <br></br>
      <Typography sx={typ_mono[0]}>
        Rethinking the Design Process Framework
      </Typography>
      <br></br>
      <Typography sx={typ_mono[2]}>
        The allure of design thinking, particularly the “
        <a
          href="https://www.interaction-design.org/literature/article/5-stages-in-the-design-thinking-process"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#f00658", textDecoration: "underline" }}
        >
          5 Stages of the Design Thinking Process
        </a>
        ” proposed by Hasso Plattner at the Stanford Institute of Design, lies
        in its clear, structured and systematic approach to tackling complex
        design tasks. This framework, characterized by the stages of Empathize,
        Define, Ideate, Prototype, and Test, is often{" "}
        <span style={typ_mono[4]}>
          misleadingly heralded as a universal algorithm
        </span>{" "}
        that steadily outputs high-level design solutions. I was also once led
        down a winding path due to the naive understanding to the design
        thinking process. Here, I would like to discuss several key insights
        that will avoid the roundabout.
      </Typography>
      <br></br>
      <Typography sx={typ_mono[1]}>Iterative vs. Stage-Based</Typography>
      <br></br>
      <Typography sx={typ_mono[2]}>
        “Stages”' is a misleading word. Although the iterative nature of the
        design thinking is addressed over and over again, designers still tend
        to unconsciously take it as a linear and gradual process. Indeed,
        several processes imply a linearly progressive relationship: the
        material gathered from “need-finding” stage is passed down to the define
        stage where designers reframe the problem, and the redefinition of
        problems are passed down to ideation stage where we explore more
        possibilities by brainstorming HMW statements and POVs. The{" "}
        <span style={typ_mono[4]}>cyclic and iterative</span> nature is often
        obscured by the logical coherency of the process. When conducting my own
        design tasks, I also easily get to go with the inertia and keep moving
        forward until the product is done. However, effective design frequently
        involves cycling back to previous stages, revisiting and revising ideas
        as new
      </Typography>
    </Box>
  );
}

function P3() {
  return (
    <>
      <Typography sx={typ_mono[2]}>insights emerge.</Typography>
      <br></br>
      <Typography sx={typ_mono[2]}>
        For example, insights from testing can lead to revisions in the ideation
        or even empathize stages. During the project “
        <a
          href="https://medium.com/@cole.smith/i-have-become-data-b56f1edeb13f"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#f00658", textDecoration: "underline" }}
        >
          Re-design and Extend
        </a>
        ”, our goal was to re-evaluate a data visualization project and
        translate it into a physical product. After conducting detailed
        evaluation on our data visualization through{" "}
        <span style={typ_mono[4]}>usability testing</span> with end users,
        several new insights emerged which directly link to rounds of ideation
        or even need-finding. During the data visualization project, our primary
        goal was to clearly and informatively represent our data set. As
        physical installations restrained us from making highly interactive and
        communicative designs comparing with charts and plots, we decide to
        compensate with focusing on the affectiveness of the product. Hence, we
        decided to carefully investigate the potential emotions aroused as user
        interact with our data visualization.
      </Typography>
      <img src="img2.jpg" alt="Word Cloud Visualization" width="100%"></img>
      <Typography sx={typ_mono[3]}>
        Word cloud visualization of the words used to describe our website
      </Typography>
      <br></br>
      <Typography sx={typ_mono[2]}>
        The results from this evaluation process, as mentioned, directly led us
        to revisions on the needfinding and define stages. New needs and user
        stories are generated during the iteration, providing us with
      </Typography>
    </>
  );
}

function P4() {
  return (
    <>
      <Typography sx={typ_mono[2]}>
        more guidance when facing such complex and ambiguous design tasks.
      </Typography>
      <br></br>
      <Typography sx={typ_mono[2]}>
        Overall, the iterative approach allows for a more nuanced development of
        design solutions, continuously adapting to new information and evolving
        user needs. This leads to one of my key reflections:{" "}
        <span style={typ_mono[4]}>when in doubt, rethink the other stages</span>
        . rethink the other stages.
      </Typography>
      <br></br>
      <Typography sx={typ_mono[1]}>
        Dynamic Decision Network: The Interconnectedness of Design Stages
      </Typography>
      <br></br>
      <Typography sx={typ_mono[2]}>
        In last section, I discussed how easy it is to execute design thinking
        processes by passing down results from one stage to another
        algorithmically. However, the true beauty of design thinking lies in the
        <span style={typ_mono[4]}> interconnectedness</span> among stages
        non-linearly. Viewing the design stages as a{" "}
        <span style={typ_mono[4]}>dynamic decision network </span>
        rather than isolated steps can provide a more holistic approach to
        design.
      </Typography>
      <br></br>
      <Typography sx={typ_mono[2]}>
        Designers sometimes treat the specific tasks or heuristics of each stage
        as the ultimate directive, overlooking how dynamic and complex the
        process is. When conducting evaluation for “
        <a
          href="https://medium.com/@tierranaa29/the-illusive-an-illusionary-exhibit-148fffbb42a7"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#f00658", textDecoration: "underline" }}
        >
          Design for Another Dimension
        </a>
        ”, I strictly follows the “
        <a
          href="https://www.nngroup.com/articles/ten-usability-heuristics/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#f00658", textDecoration: "underline" }}
        >
          10 Usability Heuristics
        </a>
        ” proposed by Jakob Nielsen, and quickly realize how some heuristics
        such as “visibility of system status” might backlash and contradict HMW
        statements such as “How might we create sense of disorientation and
        mystery?” After careful consideration, I eventually decided to value
        ideation over certain heuristics. I found this quote from the “
        <a
          href="https://www.interaction-design.org/literature/article/5-stages-in-the-design-thinking-process"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#f00658", textDecoration: "underline" }}
        >
          5 Stages of the Design Thinking Process
        </a>
        ” concludes how we should correctly look at design thinking processes:
        “Design thinking dwells on the most prominent user of the design
        solution…designers should engage users throughout the design process.
        (Gwangwava, 2020)”
      </Typography>
      <br></br>
      <Typography sx={typ_mono[2]}>
        After all, design thinking is a methodology that ultimately provides
        solutions to the end user.{" "}
        <span style={typ_mono[4]}>
          The user should always be the guiding principle
        </span>
        . We should understand the model such that each design stages are
        interconnected nodes within a larger system, where the
      </Typography>
    </>
  );
}

function P5() {
  return (
    <>
      <Typography sx={typ_mono[2]}>
        true ultimate directive is the user. We might sometimes meet scenarios
        where we have to make adjustments between decisions made within stages,
        at this time, we should remember that we are ultimately{" "}
        <span style={typ_mono[4]}>designing for users</span>.
      </Typography>
      <br></br>
      <Typography sx={typ_mono[0]}>
        Evaluation and Definition: The Core of Design
      </Typography>
      <br></br>
      <Typography sx={typ_mono[1]}>
        Beyond Heuristics: Adapting Evaluation Methods
      </Typography>
      <br></br>
      <Typography sx={typ_mono[2]}>
        Standard heuristics offer a foundation for evaluating usability and
        interface design. However, these heuristics, while invaluable, are not
        universally applicable across all scenarios. The limitations of applying
        a one-size-fits-all approach to heuristics become apparent when the
        unique context of a project demands high flexibility. As designers, our
        goal should not be merely to avoid “violations of known usability
        guidelines”, but rather deeply empathize with users, understanding their
        specific needs and experiences.
      </Typography>
      <br></br>
      <Typography sx={typ_mono[2]}>
        With that being said,{" "}
        <a
          href="https://www.nngroup.com/articles/usability-testing-101/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#f00658", textDecoration: "underline" }}
        >
          Usability Testing
        </a>{" "}
        is a valuable evaluation method that makes it easy to highly empathize
        with the user. In a usability testing session, “a researcher asks a
        participant to perform tasks…researcher observes the participant’s
        behavior and listens for feedback. (Moran, 2019)” This direct evaluation
        approach moves beyond just “scoring the product”, instead. onducting an
        in-depth subjective assessment, capturing users’ interactions and
        emotional responses to understand their experiences. These insights
        influence other stages of the development process, such as uncovering
        new user needs or identifying potential product positioning issues.
      </Typography>
      <br></br>
      <Typography sx={typ_mono[2]}>
        In my project “
        <a
          href="https://medium.com/@cole.smith/i-have-become-data-b56f1edeb13f"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#f00658", textDecoration: "underline" }}
        >
          Re-design and extend
        </a>
        ”, we conducted a thorough evaluation on the first iteration of our
        prototypes by doing Experience Prototyping (a specific form of usability
        testing) that
      </Typography>
    </>
  );
}

function P6() {
  return (
    <>
      <Typography sx={typ_mono[2]}>
        focuses on letting users experience and interact with the prototype and
        meanwhile observe and collect their thinking process. “Experience
        Prototyping allows the designer to think of the design problem in terms
        of designing an integrated experience, rather than one or more specific
        artifacts. (
        <a
          href="https://dl.acm.org/doi/pdf/10.1145/347642.347802"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#f00658", textDecoration: "underline" }}
        >
          Buchenau and Suri
        </a>
        )” To be more specific, it substantially helps designers to get rid of
        the preconceptions of their product, and simply learn how users perceive
        the product.
      </Typography>
      <br></br>
      <Typography sx={typ_mono[2]}>
        By closely analyzing user feedback, particularly the intuitive and
        emotional reactions, I identified key areas that required refinement.
        These insights not only informed the subsequence design iterations, but
        also link back to decisions in other “earlier” stages. For instance, the
        surprise and confusion exhibited by the uninformed group who didn’t have
        briefing of our project’s contexts indicate a strong need for more
        intuitive visual or tactile cues within the prototype. This could
        involve redesigning some of the HMW statements, which at that time focus
        more on arising emotional responses instead of making stronger
        correlations that are apparent without explicit instructions.
      </Typography>
      <br></br>
      <Typography sx={typ_mono[1]}>Define & Re-define</Typography>
      <br></br>
      <Typography sx={typ_mono[2]}>
        Another important piece in design thinking process is the define stage.
        It is the bridge between observation and insight through inference. “One
        simple form of knowledge is to derive goals and values from your data. (
        <a
          href="https://faculty.washington.edu/ajko/books/design-methods/problems"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#f00658", textDecoration: "underline" }}
        >
          Ko, 2024
        </a>
        )” In other words, in the define stage, we are essentially translating
        our abstract observations into actionable insights that are of business
        values. It lays down the foundation for all subsequent actions as it
        translates user needs to actions. However, it is also significant to
        keep in mind that it is not the absolute directive, user needs might
        still get lost in translation.
      </Typography>
      <br></br>
      <Typography sx={typ_mono[2]}>
        In my “
        <a
          href="https://medium.com/@yshi373/ideation-prototyping-in-fitness-wellness-apps-c00a5213fa81"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#f00658", textDecoration: "underline" }}
        >
          Ideation & Prototyping in Fitness & Wellness Apps
        </a>
        ” Project, the define stage played a critical role. Initially, the
        project’s
      </Typography>
    </>
  );
}

function P7() {
  return (
    <>
      <Typography sx={typ_mono[2]}>
        focus was on general user engagement with fitness apps. This translates
        to a set of highly abstract and ungrounded HMW statement and POVs.
        Hence, after the first iteration of prototyping, I quickly conducted
        further evaluation through user interviews, and found out that the crux
        of the problem lays in the non-customizable nature of the apps which did
        not align well with their varying schedules and levels of fitness
        expertise.
      </Typography>
      <br></br>
      <Typography sx={typ_mono[2]}>
        This insight led me to <span style={typ_mono[4]}>redefine</span> the
        problem statement to focus on creating a highly customizable and
        adaptable fitness app that caters specifically to the diverse needs and
        schedules of users. This “re-define” not only push forward a redo on
        prototyping, but more importantly influenced my design direction and
        deepened my understanding of the user needs. In this case, all
        “subsequent” stages of the project such as ideation and prototyping, all
        shifted focus to gear towards refining the problem statement.
      </Typography>
      <br></br>
      <img
        src="img3.jpg"
        alt="Modified Prototype with focus on Customization"
        width="100%"
      ></img>
      <Typography sx={typ_mono[3]}>
        Modified Prototype with focus on Customization
      </Typography>
    </>
  );
}
function P8() {
  return (
    <>
      <Typography sx={typ_mono[0]}>
        Navigating Challenges and Limitations in Design
      </Typography>
      <br></br>
      <Typography sx={typ_mono[2]}>
        During design process, one often encounters a range of limitations that
        stem from adapting to different modalities and technologies. Each
        modality, whether it involves digital interfaces, physical interactions,
        or immersive environments like VR, all come from its unique set of
        challenges that can significantly impact the design outcomes. As
        designers, one of our primary job is to resolve such challenges!
      </Typography>
      <br></br>
      <Typography sx={typ_mono[1]}>
        Reality Check: When expectations Clash with Reality
      </Typography>
      <br></br>
      <Typography sx={typ_mono[2]}>
        A vivid illustration of expectation versus reality is encountered in the
        VR sprint mentioned earlier. The project envisioned a seamless and
        immersive user experience. However, performance issues clash our
        expectations with lag and low frame rates as we implement one of the key
        components, the morphing torus knot.
      </Typography>
      <br></br>
      <img
        src="img4.jpg"
        alt="The morphing torus knot changes form and pattern every second"
        width="100%"
      ></img>
      <Typography sx={typ_mono[3]}>
        The morphing torus knot changes form and pattern every second
      </Typography>
      <br></br>
      <Typography sx={typ_mono[2]}>
        The key performance issue lies in its generation logic. To make sure of
        a smooth transition, we quickly generate new form based on the previous
        form and make slight tweaks based on a randomized algorithm. In order to
        do this smoothly, such generation and disposal must take
      </Typography>
    </>
  );
}

function P9() {
  return (
    <>
      <Typography sx={typ_mono[2]}>
        place 24 times per second to match up with the standard FPS (frames per
        second). However, the intensity in computation backlashed and lowered
        the entire FPS of our project.
      </Typography>
      <br></br>
      <Typography sx={typ_mono[2]}>
        Addressing challenges like this require a versatile and robust adaption
        strategy. Our team ended up prioritizing optimization and performance
        enhancements over some of the initially planned features. This involved
        simplifying the visual elements by reducing the resolution of textures
        and making the interactive elements less resource-intensive.
      </Typography>
      <br></br>
      <Typography sx={typ_mono[1]}>
        Adaption Strategy: Local Optimum vs. Global Optimum
      </Typography>
      <br></br>
      <Typography sx={typ_mono[2]}>
        Looking back at our initial adaption strategy, I find several potential
        improvements to be made. After the issue emerged I immediately start
        seeking optimizations on performance, which end up with a{" "}
        <span style={typ_mono[4]}>local optimum</span>, a sort of compromise to
        balance off the issue and user experience. To be more specific, I was
        trying to simply{" "}
        <span style={typ_mono[4]}>
          making the best possible improvements within a defined set of
          constraints
        </span>
        .
      </Typography>
      <br></br>
      <Typography sx={typ_mono[2]}>
        While it preserves the original vision and avoids the disruptions of a
        major redesign, it may only provide a temporary or suboptimal solution.
        In our case, slightly improved FPS may still not achieve the fluidity
        required fro an optimal user experience. Especially in immersive
        environment like VR, potential discomfort or disengagement for user
        might be the deal breaker.
      </Typography>
      <br></br>
      <Typography sx={typ_mono[2]}>
        On the other hand, aiming for a global optimum involves{" "}
        <span style={typ_mono[4]}>
          stepping back and reassessing the entire design processes
        </span>
        . If time and cost allowed, it is always a good idea, when major issues
        happen, to find a more comprehensive and fundamentally sound solution.
        “The real challenge of design is to go beyond the expected. This often
        requires a complete rethinking of the problem, leading to major
        innovations.
      </Typography>
    </>
  );
}

function P10() {
  return (
    <>
      <Typography sx={typ_mono[2]}>
        (Tim Brown, CEO of IDEO)” Rethinking the problem might mean
        re-evaluating the use of VR itself, considering whether a different
        modality implementation(such as AR or MR) might better meet the
        project’s objectives; or it might mean redirect the design focus and
        resort for substituting implementations that might also satisfy the
        definition of our problems.
      </Typography>
      <br></br>
      <Typography sx={typ_mono[1]}>
        Balancing Local and Global Strategies
      </Typography>
      <br></br>
      <Typography sx={typ_mono[2]}>
        Choosing between local and global optimization strategies involves a
        thorough understanding of the project’s goals, constraints, and the
        potential impact on user experience. Local optimizations are quicker and
        less risky in the short term but may not address underlying issues
        efficiently. Global optimizations, while more resource-intensive and
        risky, can lead to more sustainable and innovative outcomes. In
        practice, the best approach often involves a combination of both. During
        the physical data visualization sprint, I also encountered performance
        issues where I have to re-consider and re-build parts of the
        installation. To summarize, I’ve employed the following strategies:
      </Typography>
      <br></br>
      <Typography sx={typ_mono[2]}>
        - <span style={typ_mono[4]}>Initial Local Adjustment</span>: I approach
        the problem with local optimizations to test the best make-up can
        achieve. For instance, due to material constraints, we had to switch the
        material and mix them together with existing materials. This causes
        inconsistency in the existing system, but it makes an impossible task
        done. The local adjustment quickly addresses the problem by stabilizing
        the system and enhancing the user experience in some ways. However, in
        the long run, it still does not meet our initial design and requires
        reassessment.
      </Typography>
      <br></br>
      <Typography sx={typ_mono[2]}>
        - <span style={typ_mono[4]}>Global Reassessment</span>: At this point,
        it is important to undertake a strategic review of the project to
        identify if there’s any{" "}
        <span style={typ_mono[4]}>fundamental misalignments</span> with user
        needs. If deal-breaker conditions are met (for instance, the material
        replaced cause large enough
      </Typography>
    </>
  );
}

function P11() {
  return (
    <>
      <Typography sx={typ_mono[2]}>
        inconsistency that disturbs the user experience), reconstruction is
        urgently needed. Designers should reinvestigate other design processes
        and look for other ways out in terms of potential translation from
        need-finding to definition, and/or problem statement to ideation.
      </Typography>
      <br></br>
      <Typography sx={typ_mono[2]}>
        - <span style={typ_mono[4]}>Iterative Testing and Feedback Loop</span>:
        Use iterative cycles (Remember that{" "}
        <span style={typ_mono[4]}>
          when in doubt, rethink the other stages!
        </span>
        ). Reassessment is the most powerful when{" "}
        <span style={typ_mono[4]}>users are engaged</span> to address potential
        problems. Essentially, design is a conversation between designer and
        users, preconceptions from the designer’s perspective always comes
        secondary to user feedback. Feedback loop is essential in helping to
        determine when local optimizations suffice and when a shift towards
        substantial redesign is needed.
      </Typography>
      <br></br>
      <Typography sx={typ_mono[0]}>Conclusion</Typography>
      <br></br>
      <Typography sx={typ_mono[2]}>
        This manifesto reflects on the essence of designing for human
        experiences, advocating for a profound understanding of the
        <span style={typ_mono[4]}> interconnectedness</span> of design stages
        and the <span style={typ_mono[4]}>iterative nature</span> of design
        processes. Human-centered design revolves around the core of human
        interaction and human experiences, which underscores the importance of
        thorough understanding of the design task that is centered around user.
      </Typography>
      <br></br>
      <Typography sx={typ_mono[2]}>
        Through various projects, it has been demonstrated that the naive
        understanding of linear progression of design stages often misrepresents
        and/or miss out on the dynamic and flexible nature of design thinking;
        and the iterative process is crucial, especially when dealing with
        <span style={typ_mono[4]}> technologies and modalities</span> that pose
        unique challenges, such as VR and physical installations. By advocating
        for a balanced approach between{" "}
        <span style={typ_mono[4]}>local/global optimization strategies</span>,
        we empathize the importance of immediate functional improvements while
        also being open to broader and innovative solutions that may require
        thinking the entire project scope.
      </Typography>
    </>
  );
}

function P12() {
  return (
    <>
      <Typography sx={typ_mono[2]}>
        Ultimately, this design philosophy is committed to enhancing user
        experience and ensuring that our designs respond deeply and meaningfully
        with the intended audiences. After all, always keep in mind that:{" "}
        <span style={typ_mono[4]}>design is design for user</span>.
      </Typography>
      <br></br>
      <br></br>
      <Typography sx={typ_mono[0]}>References</Typography>
      <br></br>
      <Typography sx={typ_mono[1]}>Referenced Papers</Typography>
      <Typography sx={typ_mono[2]}>
        Friis Dam, R. (n.d.). The 5 Stages in the Design Thinking Process.
        Interaction Design Foundation.{" "}
        <a
          href="https://www.interaction-design.org/literature/article/5-stages-in-the-design-thinking-process"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#f00658", textDecoration: "underline" }}
        >
          Retrieved from this link
        </a>
        .
      </Typography>
      <br></br>
      <Typography sx={typ_mono[2]}>
        Nielsen, J. (1994, April 24). 10 Usability Heuristics for User Interface
        Design. Nielsen Norman Group.{" "}
        <a
          href="https://www.nngroup.com/articles/ten-usability-heuristics/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#f00658", textDecoration: "underline" }}
        >
          Retrieved from this link
        </a>
        .
      </Typography>
      <br></br>
      <Typography sx={typ_mono[2]}>
        Moran, K. (2019, December 1). Usability Testing 101. Nielsen Norman
        Group.{" "}
        <a
          href="https://www.nngroup.com/articles/usability-testing-101/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#f00658", textDecoration: "underline" }}
        >
          Retrieved from this link
        </a>
        .
      </Typography>
      <br></br>
      <Typography sx={typ_mono[2]}>
        Buchenau, M., & Fulton Suri, J. (2000). Experience Prototyping. In
        Proceedings of the 3rd conference on Designing interactive systems:
        processes, practices, methods, and techniques (pp. 424–433). ACM.{" "}
        <a
          href="https://dl.acm.org/doi/10.1145/347642.347802"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#f00658", textDecoration: "underline" }}
        >
          Retrieved from this link
        </a>
        .
      </Typography>
      <br></br>
      <Typography sx={typ_mono[1]}>Referenced Projects</Typography>
      <Typography sx={typ_mono[2]}>
        Re-design and Extend.{" "}
        <a
          href="https://medium.com/@cole.smith/i-have-become-data-b56f1edeb13f"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#f00658", textDecoration: "underline" }}
        >
          Design Documents can be found here
        </a>
        .
      </Typography>
      <br></br>
      <Typography sx={typ_mono[2]}>
        Design for Another Dimension.{" "}
        <a
          href="https://medium.com/@tierranaa29/the-illusive-an-illusionary-exhibit-148fffbb42a7"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#f00658", textDecoration: "underline" }}
        >
          Design Documents can be found here
        </a>
        .
      </Typography>
      <br></br>
      <Typography sx={typ_mono[2]}>
        Needfinding in UX of Fitness & Wellness Apps.{" "}
        <a
          href="https://medium.com/@yshi373/needfinding-in-ux-of-fitness-wellness-apps-a2acd5e578ee"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#f00658", textDecoration: "underline" }}
        >
          Design Documents can be found here
        </a>
        .
      </Typography>
      <br></br>
      <Typography sx={typ_mono[2]}>
        Ideation & Prototyping in Fitness & Wellness Apps.{" "}
        <a
          href="https://medium.com/@yshi373/ideation-prototyping-in-fitness-wellness-apps-c00a5213fa81"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#f00658", textDecoration: "underline" }}
        >
          Design Documents can be found here
        </a>
        .
      </Typography>
    </>
  );
}
