import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

import Birds from "../components/animation/birds";
import ScrollTarget from "../components/common/scrolltarget";
import Button from "@mui/material/Button";

import myPhoto from "../assets/img/my_photo.png";
import airRegi from "../assets/img/works/AirRegi.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
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
import Header from "../components/common/header";

const Lp = () => {
  return (
    <>
      <Header />
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
        <ScrollTarget id="About" />
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
        <ScrollTarget id="Works" />
        <Box className="works-contents">
          <Typography variant="h2" className="white-text" gutterBottom>
            Works
          </Typography>
          <Box className="works-img-wrap">
            <Box className="works-imges">
              <Link to="/workTemplate">
                <img src={airRegi} />
              </Link>
              <Link to="/workTemplate">
                <img src={airRegi} />
              </Link>
              <Link to="/workTemplate">
                <img src={airRegi} />
              </Link>
            </Box>
          </Box>
        </Box>
      </Container>
      <Container maxWidth="false" className="skills-conteiner">
        <ScrollTarget id="Skills" />
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
        <ScrollTarget id="Career" />
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
      <Container maxWidth="false" className="no-padding-container">
        <ScrollTarget id="Contact" />
        <Box className="contact-contents">
          <Box className="contact-contents-inner" maxWidth="sm">
            <Typography variant="h2" gutterBottom>
              Contact
            </Typography>
            <Box>
              <a href="mailto:miyuki.takahashi.0526&#64;gmail.com">
                <Button size="large" variant="contained" className="cta-button">
                  Send Email
                </Button>
              </a>
            </Box>
            <Box>
              <Typography
                variant="body1"
                component="p"
                className="or-style"
                gutterBottom
              >
                or
              </Typography>
            </Box>
            <Box className="contact-icons">
              <a href="https://www.linkedin.com/in/miyuki-takahashi-055b1627b/">
                <FontAwesomeIcon
                  icon={faLinkedin}
                  style={{ color: "#0072b1" }}
                />
              </a>
              <a href="https://github.com/miyuki-0526">
                <FontAwesomeIcon icon={faGithub} style={{ color: "#171515" }} />
              </a>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Lp;
