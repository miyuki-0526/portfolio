import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { CssBaseline, Box, Container, Typography } from "@mui/material";
import { HashLink } from "react-router-hash-link";
import ImageGalleryCreater from "../components/imageGalleryCreater";
import "react-image-gallery/styles/css/image-gallery.css";

const MyPortfolio = () => {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="false" className="work-background">
        <Container maxWidth="lg" className="work-contents-wraper">
          <Box className="close-header">
            <HashLink to="/#Works">
              <FontAwesomeIcon icon={faXmark} style={{ color: "#333333" }} />
            </HashLink>
          </Box>
          <Box
            maxWidth="lg"
            component="article"
            className="no-padding-containe work-article"
          >
            <Box component="section" className="work-introduction">
              <Typography variant="h1" gutterBottom>
                My Portfolio
              </Typography>
              <Typography variant="p" gutterBottom>
                A portfolio of designs that make visitors feel refreshed
              </Typography>
            </Box>
            <Box component="section" className="work-contents">
              <Box component="div" className="work-imgs-container">
                <ImageGalleryCreater site="myPortfolio" />
              </Box>
              <Box component="div" className="work-description">
                <Typography variant="h2" gutterBottom>
                  Key Development Points
                </Typography>
                <Typography variant="p" gutterBottom>
                  <ul className="work-list">
                    <li>Developed with react for my own study.</li>
                    <li>
                      Redux is used for passing data between different
                      components (scroll position, element acquisition).
                    </li>
                    <li>
                      Most components are created using mui in anticipation of
                      implementing a theme switching function in the future.
                    </li>
                    <li>
                      Vanta.js is used to display CG bird animations, providing
                      a dramatic experience for visitors.
                    </li>
                    <li>
                      Components are separated in a way that is easy to manage
                      for a personal site, while maintaining a balance between
                      man-hours and reusability of parts.
                    </li>
                    <li>
                      Bright blue is the base color, with gray as the primary
                      color and yellow as the secondary color. Although the
                      design is simple, this gradation of colors and the
                      animation of the birds give the screen a sense of space.
                    </li>
                  </ul>
                </Typography>
              </Box>
            </Box>
          </Box>
        </Container>
      </Container>
    </>
  );
};

export default MyPortfolio;
