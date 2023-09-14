import * as React from "react";
import Typography from "@mui/material/Typography";
import Nav from "./nav.js";
import useScroll from "../../hooks/useScroll.js";
import { useEffect, useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";

// change btn color in only header
const headerTheme = createTheme({
  palette: {
    secondary: { main: "#1976d2" },
  },
});

export default function Header() {
  const [headerHeight, setHeaderHeight] = useState(0);
  const [isFixed, setIsFixed] = useState(false);
  const scrollPosition = useScroll();

  // make scroll motion
  useEffect(() => {
    const headerHeightValue = document.querySelector("header").clientHeight;
    setHeaderHeight(headerHeightValue);
  }, []);

  useEffect(() => {
    if (scrollPosition > headerHeight) {
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }
  }, [scrollPosition, headerHeight]);

  return (
    <ThemeProvider theme={isFixed ? "" : headerTheme}>
      <header className={isFixed ? "header-fixed" : ""}>
        <section>
          <div className="logo_wrap">
            <Typography variant="h1" gutterBottom>
              Miyuki.T
            </Typography>
          </div>
          <div className="menu">
            <Nav />
          </div>
        </section>
      </header>
    </ThemeProvider>
  );
}
