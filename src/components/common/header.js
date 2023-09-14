import * as React from "react";
import Typography from "@mui/material/Typography";
import Nav from "./nav.js";
import useScroll from "../../hooks/useScroll.js";
import { useEffect, useState } from "react";

export default function Header() {
  // console.log(useScroll);

  const [headerHeight, setHeaderHeight] = useState(0);
  const [isFixed, setIsFixed] = useState(false);
  const scrollPosition = useScroll();

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
  );
}
