import * as React from "react";
import { Typography, Container, Box } from "@mui/material";
import Nav from "./nav.js";
import useScroll from "../../hooks/useScroll.js";
import { useEffect, useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { theme } from "../../App.js";
import { setHeaderHeght } from "../../redux/slices/headerHeghtSlise.js";
import { useDispatch, useSelector } from "react-redux";
import { setTargetElement } from "../../redux/slices/scrollSlise";

// change btn color in only header
const headerTheme = createTheme({
  palette: {
    secondary: { main: "#1976d2" },
  },
});

export default function Header() {
  const [isFixed, setIsFixed] = useState(false);
  const scrollPosition = useScroll();
  const dispatch = useDispatch();
  const headerHeight = useSelector((state) => state.headerHeght.headerHeght);

  // make scroll motion
  useEffect(() => {
    // set header height
    const headerHeightValue = document.querySelector("header").clientHeight;
    dispatch(setHeaderHeght(headerHeightValue));

    // scroll to hash
    const hash = window.location.hash;
    if (hash) {
      const targetId = hash.replace(/#/g, "");
      dispatch(setTargetElement(targetId));
    }
  }, []);

  useEffect(() => {
    if (scrollPosition > headerHeight) {
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }
  }, [scrollPosition, headerHeight]);

  return (
    <ThemeProvider theme={isFixed ? theme : headerTheme}>
      <Container
        maxWidth="false"
        className={
          isFixed ? "header-fixed no-padding-container" : "no-padding-container"
        }
        component="header"
      >
        <Box component="section">
          <Box component="div" className="logo_wrap">
            <Typography variant="h1" gutterBottom>
              Miyuki.T
            </Typography>
          </Box>
          <Box component="div" className="menu">
            <Nav />
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
