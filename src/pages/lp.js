import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Birds from "../components/animation/birds";
import myPhoto from "../assets/img/my_photo.png";
import airRegi from "../assets/img/works/AirRegi.png";

import bootstrap from "../assets/img/icons/bootstrap-logo.svg";
import css from "../assets/img/icons/css-logo.svg";
import django from "../assets/img/icons/django-logo.svg";
import figma from "../assets/img/icons/figma-logo.svg";
import html from "../assets/img/icons/html-logo.svg";
import illustrator from "../assets/img/icons/illustrator-logo.svg";
import jquery from "../assets/img/icons/jquery-logo.svg";
import js from "../assets/img/icons/js-logo.svg";
import photoshop from "../assets/img/icons/photoshop-logo.svg";
import react from "../assets/img/icons/react-logo.svg";
import ts from "../assets/img/icons/ts-logo.svg";
import wordpress from "../assets/img/icons/wordpress-logo.svg";
import xd from "../assets/img/icons/xd-logo.svg";

export default function Lp() {
  return (
    <>
      <CssBaseline />
      {/* <Container
        maxWidth="false"
        sx={{ height: "100vh" }}
        className="birds-wrap no-padding-container"
      >
        <Birds />
      </Container> */}
      <Container maxWidth="false">
        <Box
          maxWidth="sm"
          sx={{ height: "calc( 100vh - 151px )" }}
          className="fitst-view"
        >
          <Typography variant="h2" gutterBottom>
            I am a curious programmer and designer!
          </Typography>
        </Box>
      </Container>
      <Container maxWidth="false" className="no-padding-container">
        <Box
          sx={{ height: "100vh", minWidth: "100%" }}
          className="about-me-box"
        >
          <Typography variant="h2" gutterBottom>
            About me
          </Typography>
          <Box className="about-me-contents">
            <Typography variant="body1" component="p" gutterBottom>
              I love to learn new things and have used many different languages
              and tools. I am good at solving complex problems in a simple way!
            </Typography>
            <Typography variant="body1" component="p" gutterBottom>
              I love coffee and sweets more than anything else, and I enjoy
              cooking. Recently, I'm into visiting vintage clothing stores in
              Toronto.
            </Typography>
            <img className="my-photo" src={myPhoto} />
          </Box>
        </Box>
      </Container>
      <Container maxWidth="false" className="no-padding-container">
        <Box className="works-contents">
          <Typography variant="h2" className="white-text" gutterBottom>
            Works
          </Typography>
          <Box className="works-img-wrap">
            <Box className="works-imges">
              <div>
                <img src={airRegi} />
              </div>
              <div>
                <img src="aaa" />
              </div>
              <div>
                <img src="aaa" />
              </div>
              <div>
                <img src="aaa" />
              </div>
              <div>
                <img src="aaa" />
              </div>
              <div>
                <img src="aaa" />
              </div>
            </Box>
          </Box>
        </Box>
      </Container>
      <Container maxWidth="false" className="skills-conteiner">
        <Typography variant="h2" gutterBottom>
          Skils
        </Typography>
        <Box className="skils-contents">
          <Box className="skills">
            <img src={wordpress} className="skill-icon" alt="wordpress-icon" />
            <img src={bootstrap} className="skill-icon" />
            <img src={css} className="skill-icon" alt="css-icon" />
            <img src={html} className="skill-icon" alt="html-icon" />
            <img src={js} className="skill-icon" alt="js-icon" />
            <img src={jquery} className="skill-icon" alt="jquery-icon" />
            <img src={ts} className="skill-icon" alt="ts-icon" />
            <img src={react} className="skill-icon" alt="react-icon" />
            <img src={django} className="skill-icon" alt="django-icon" />
            <img src={figma} className="skill-icon" alt="figma-icon" />
            <img src={photoshop} className="skill-icon" alt="photoshop-icon" />
            <img
              src={illustrator}
              className="skill-icon"
              alt="illustrator-icon"
            />
            <img src={xd} className="skill-icon" alt="xd-icon" />
          </Box>
        </Box>
      </Container>
      <Container maxWidth="false" className="no-padding-container">
        <Box className="career-history-contents">
          <Box maxWidth="sm">
            <Typography variant="h2" className="white-text" gutterBottom>
              Career History
            </Typography>
            <Box className="m-1rem">
              <Typography
                variant="body1"
                component="p"
                className="white-text"
                gutterBottom
              >
                After working as a programmer at a Japanese start-up company for
                2 years, I went independent and then turned freelance, gaining
                experience at 3 companies. In May of this year, I moved to
                Toronto and worked as a programmer for a local company for one
                month.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
      {/* <Container maxWidth="false" className="career-history-conteiner">
        <Box maxWidth="sm" className="career-history-contents">
          <Typography variant="h2" className="white-text" gutterBottom>
            Career History
          </Typography>
          <Typography
            variant="body1"
            component="p"
            className="white-text"
            gutterBottom
          >
            After working as a programmer at a Japanese start-up company for 2
            years, I went independent and then turned freelance, gaining
            experience at 3 companies. In May of this year, I moved to Toronto
            and worked as a programmer for a local company for one month.
          </Typography>
        </Box>
      </Container> */}
      <Container maxWidth="sm">
        <Box sx={{ height: "100vh" }}>
          <Typography variant="h2" gutterBottom>
            contact
          </Typography>
          <Typography variant="body1" component="p" gutterBottom>
            I love to learn new things and have used many different languages
            and tools. <br />I am good at solving complex problems in a simple
            way!
          </Typography>
        </Box>
      </Container>
    </>
  );
}
