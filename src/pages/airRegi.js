import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { CssBaseline, Box, Container, Typography } from "@mui/material";
import { HashLink } from "react-router-hash-link";
import ImageGalleryCreater from "../components/imageGalleryCreater";
import "react-image-gallery/styles/css/image-gallery.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setTargetElement } from "../redux/slices/scrollSlise";

const AirRegi = () => {
  // scroll to top
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setTargetElement("Top"));
  }, []);

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
                Air REGI faq
              </Typography>
              <Typography variant="p" gutterBottom>
                Maintenance and operation of the faq site of the registry
                application
              </Typography>
            </Box>
            <Box component="section" className="work-contents">
              <Box component="div" className="work-imgs-container">
                <ImageGalleryCreater site="airRegi" />
              </Box>
              <Box component="div" className="work-description">
                <Typography variant="h2" gutterBottom>
                  Work in charge
                </Typography>
                <Typography variant="p" gutterBottom>
                  <ul className="work-list">
                    <li>
                      The team added parts to organize articles in an
                      easy-to-read manner by effectively using semantic colors
                      and icons, such as accordions.
                    </li>
                    <li>
                      The team consulted and improved the flow of traffic to
                      improve user self-resolution of problems and reduce the
                      number of inquiries.
                    </li>
                    <li>
                      Whenever a new feature of the application was released, we
                      added the new feature to the article.
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
