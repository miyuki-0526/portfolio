import React, { useEffect } from "react";
import { CssBaseline, Box, Container, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import Birds from "../components/animation/birds";
import ScrollTarget from "../components/common/scrolltarget";
import Header from "../components/common/header";
import textAnimation from "../components/animation/textAnimation";

// img
import myPhoto from "../assets/img/my_photo.png";
import myPortfolio from "../assets/img/works/myPortfolio/myPortfolio-thumbnail.png";

// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

// icon
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
import php from "../assets/img/icons/php-logo.svg";
import sass from "../assets/img/icons/sass-logo.svg";
import { useInView } from "react-intersection-observer";

const inViewObj = () => ({
  rootMargin: `-${String(parseInt(window.innerHeight / 4))}px`,
  triggerOnce: true,
});

const Lp = () => {
  useEffect(() => {
    textAnimation();
  }, []);

  const { ref: ref1, inView: inView1 } = useInView(inViewObj());
  const { ref: ref2, inView: inView2 } = useInView(inViewObj());
  const { ref: ref3, inView: inView3 } = useInView(inViewObj());
  const { ref: ref4, inView: inView4 } = useInView(inViewObj());
  const { ref: ref5, inView: inView5 } = useInView(inViewObj());

  return (
    <>
      <CssBaseline />
      <Header />
      <Container
        maxWidth="false"
        sx={{ height: "100vh" }}
        className="birds-container no-padding-container"
      >
        <Birds />
      </Container>
      <Container maxWidth="false" component="section">
        <Box className="fitst-view">
          <Typography
            className="text-anime text-anime-opacity"
            variant="h2"
            gutterBottom
          >
            I am an open minded programmer and designer!
          </Typography>
        </Box>
      </Container>
      <Container
        maxWidth="false"
        className="no-padding-container about-me-conteiner"
        component="section"
        ref={ref1}
      >
        <ScrollTarget id="About" />

        <Box
          sx={{ minHeight: "100vh", minWidth: "100%" }}
          className={
            inView1
              ? "about-me-box scroll-fadeup scroll-wait"
              : "about-me-box scroll-wait"
          }
        >
          <Typography variant="h2" gutterBottom>
            About me
          </Typography>
          <Box className="about-me-contents">
            <Typography variant="body1" component="p" gutterBottom>
              I love to learn new things and have used various languages and
              tools. I am good at solving complex problems in the simplest way
              possible!
            </Typography>
            <Typography variant="body1" component="p" gutterBottom>
              I love coffee and sweets more than anything else, and I enjoy
              cooking. Recently, I've been into visiting vintage clothing stores
              in Toronto.
            </Typography>
            <img className="my-photo" src={myPhoto} />
          </Box>
        </Box>
      </Container>
      <Container
        maxWidth="false"
        className="no-padding-container works-conteiner"
        component="section"
        ref={ref2}
      >
        <ScrollTarget id="Works" />
        <Box
          className={
            inView2
              ? "works-contents scroll-fadeup scroll-wait"
              : "works-contents scroll-wait"
          }
        >
          <Typography variant="h2" className="white-text" gutterBottom>
            Works
          </Typography>
          <Box className="works-img-wrap">
            <Box className="works-imges">
              <figure className="work-figure">
                <Link to="/myPortfolio" data-site-title="My portfolio">
                  <img src={myPortfolio} />
                </Link>
                <figcaption>My portfolio</figcaption>
              </figure>
            </Box>
          </Box>
        </Box>
      </Container>
      <Container
        maxWidth="false"
        className="skills-conteiner"
        component="section"
        ref={ref3}
      >
        <ScrollTarget id="Skills" />
        <Box
          className={
            inView3
              ? "skils-contents scroll-fadeup scroll-wait"
              : "skils-contents scroll-wait"
          }
        >
          <Typography variant="h2" gutterBottom>
            Skills
          </Typography>
          <Box className="skills">
            <img src={wordpress} className="skill-icon" alt="wordpress-icon" />
            <img src={bootstrap} className="skill-icon" />
            <img src={css} className="skill-icon" alt="css-icon" />
            <img src={sass} className="skill-icon" alt="sass-icon" />
            <img src={html} className="skill-icon" alt="html-icon" />
            <img src={js} className="skill-icon" alt="js-icon" />
            <img src={ts} className="skill-icon" alt="ts-icon" />
            <img src={jquery} className="skill-icon" alt="jquery-icon" />
            <img src={react} className="skill-icon" alt="react-icon" />
            <img src={php} className="skill-icon" alt="php-icon" />
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
      <Container
        maxWidth="false"
        className="no-padding-container career-history-container"
        component="section"
        ref={ref4}
      >
        <ScrollTarget id="Career" />
        <Box
          className={
            inView4
              ? "career-history-contents scroll-fadeup scroll-wait"
              : "career-history-contents scroll-wait"
          }
        >
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
                Toronto and worked as a programmer for a local company.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
      <Container
        maxWidth="false"
        className="no-padding-container contact-container"
        component="section"
        ref={ref5}
      >
        <ScrollTarget id="Contact" />
        <Box
          className={
            inView5
              ? "contact-contents scroll-fadeup scroll-wait"
              : "contact-contents scroll-wait"
          }
        >
          <Box className="contact-contents-inner" maxWidth="sm">
            <Typography variant="h2" gutterBottom>
              Contact
            </Typography>
            <Box>
              <a href="mailto:miyuki.takahashi.0526&#64;gmail.com">
                <Button size="large" variant="contained" className="cta-button">
                  By email
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
