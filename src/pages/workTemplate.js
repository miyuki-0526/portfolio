import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { CssBaseline, Box, Container, Typography } from "@mui/material";
import { HashLink } from "react-router-hash-link";

const WorkTemplate = () => {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="false" className="close-header">
        <HashLink to="/#Works">
          <FontAwesomeIcon icon={faXmark} style={{ color: "#333333" }} />
        </HashLink>
      </Container>
      <Container
        maxWidth="false"
        component="article"
        className="no-padding-container"
      >
        <Box component="section">
          <Typography variant="h1" gutterBottom>
            Air REGI faq
          </Typography>
        </Box>
      </Container>
    </>
  );
};

export default WorkTemplate;
