import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Birds from "../components/animation/birds";
import myPhoto from "../assets/img/my_photo.png";

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
            A programmer and designer as nutritious as broccoli!
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
              I am a curious programmer and designer!
            </Typography>
            <Typography variant="body1" component="p" gutterBottom>
              I love to learn new things and have used many different languages
              and tools. <br />I am good at solving complex problems in a simple
              way!
            </Typography>
            <img className="my-photo" src={myPhoto} />
          </Box>
        </Box>
      </Container>
      <Container maxWidth="sm">
        <Box sx={{ height: "100vh" }}>
          <Typography variant="h2" gutterBottom>
            Works
          </Typography>
          <Typography variant="body1" component="p" gutterBottom>
            I love to learn new things and have used many different languages
            and tools. <br />I am good at solving complex problems in a simple
            way!
          </Typography>
        </Box>
      </Container>
      <Container maxWidth="sm">
        <Box sx={{ height: "100vh" }}>
          <Typography variant="h2" gutterBottom>
            Skils
          </Typography>
          <Box component="section" sx={{ height: "100vh" }}>
            <Typography variant="h3" gutterBottom>
              programming
            </Typography>
          </Box>
          <Box component="section" sx={{ height: "100vh" }}>
            <Typography variant="h3" gutterBottom>
              design
            </Typography>
          </Box>
        </Box>
      </Container>
      <Container maxWidth="sm">
        <Box sx={{ height: "100vh" }}>
          <Typography variant="h2" gutterBottom>
            my plofile
          </Typography>
          <Typography variant="body1" component="p" gutterBottom>
            I love to learn new things and have used many different languages
            and tools. <br />I am good at solving complex problems in a simple
            way!
          </Typography>
        </Box>
      </Container>
      <Container maxWidth="sm">
        <Box sx={{ height: "100vh" }}>
          <Typography variant="h2" gutterBottom>
            recently my favorite things
          </Typography>
          <Typography variant="p" gutterBottom>
            aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa
            aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa
          </Typography>
        </Box>
      </Container>
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
