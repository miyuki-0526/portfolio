import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export default function Lp() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={{ height: "100vh" }}>
          <Typography variant="h2" gutterBottom>
            A programmer and designer as nutritious as broccoli!
          </Typography>
        </Box>
      </Container>
      <Container maxWidth="sm">
        <Box sx={{ height: "100vh" }}>
          <Typography variant="h2" gutterBottom>
            About me
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
            Works
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
          <Typography variant="p" gutterBottom>
            aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa
            aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa
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
          <Typography variant="p" gutterBottom>
            aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa
            aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa
          </Typography>
        </Box>
      </Container>
    </React.Fragment>
  );
}
