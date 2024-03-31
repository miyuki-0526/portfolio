import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/common/footer";
import Lp from "./pages/lp";
import MyPortfolio from "./pages/myPortfolio";
import "./styles/main.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import LoadingAnimation from "./components/animation/loadingAnimation";
import ScrollTarget from "./components/common/scrolltarget";
import PageTop from "./components/common/pageTop";
import useScroll from "./hooks/useScroll.js";

export const theme = createTheme({
  palette: {
    secondary: { main: "#da9e35" },
    primary: { main: "#84814b" },
  },
});

const App = () => {
  const [loading, setLoading] = useState(true);
  const [pagetop, setPgetop] = useState(false);
  const scrollPosition = useScroll();

  useEffect(() => {
    window.onload = () => {
      // Delete spinner when screen is finished loading.
      setTimeout(() => {
        setLoading(false);
      }, 500);
    };
  }, []);

  useEffect(() => {
    if (scrollPosition > window.innerHeight) {
      setPgetop(true);
    } else {
      setPgetop(false);
    }
  }, [scrollPosition]);

  // Force the spinner to deactivate if it takes more than 3 seconds to load.
  setTimeout(() => {
    setLoading(false);
  }, 3000);
  return (
    <ThemeProvider theme={theme}>
      {loading ? (
        <LoadingAnimation />
      ) : (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <ScrollTarget id="Top" />
          <Routes>
            <Route path="/" element={<Lp />} />
            <Route path="/myPortfolio" element={<MyPortfolio />} />
          </Routes>
          <Footer />
          <PageTop dispStatus={pagetop} />
        </BrowserRouter>
      )}
    </ThemeProvider>
  );
};

export default App;
