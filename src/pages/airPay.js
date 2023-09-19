import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { CssBaseline, Box, Container, Typography } from "@mui/material";
import { HashLink } from "react-router-hash-link";
import ImageGalleryCreater from "../components/imageGalleryCreater";
import "react-image-gallery/styles/css/image-gallery.css";

const AirRegi = () => {
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
                Air PAY faq
              </Typography>
              <Typography variant="p" gutterBottom>
                Making the site responsive for PCs
              </Typography>
            </Box>
            <Box component="section" className="work-contents">
              <Box component="div" className="work-imgs-container">
                <ImageGalleryCreater site="airPay" />
              </Box>
              <Box component="div" className="work-description">
                <Typography variant="h2" gutterBottom>
                  Work in charge
                </Typography>
                <Typography variant="p" gutterBottom>
                  <ul className="work-list">
                    <li>
                      The site, which was originally intended for PCs, was
                      successfully made responsive with minimal html changes.
                      This was achieved by rewriting the CSS for the major parts
                      of the site, then looking for areas that needed to be
                      modified in detail and making the necessary corrections.
                    </li>
                    <li>
                      Improved user experience by adding semantic colors,
                      thereby allowing the information in articles to be
                      categorized and displayed by type
                    </li>
                    <li>
                      The site was originally operated by the PR department, and
                      the code was not organized, but the team worked together
                      to modify it to make it easier to operate.
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

export default AirRegi;
