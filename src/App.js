import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/common/footer";
import Lp from "./pages/lp";
import AirRegi from "./pages/airRegi";
import AirPay from "./pages/airPay";
import MyPortfolio from "./pages/myPortfolio";
import "./styles/main.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import LoadingAnimation from "./components/animation/loadingAnimation";
import textAnimation from "./components/animation/textAnimation";

export const theme = createTheme({
  palette: {
    secondary: { main: "#da9e35" },
    primary: { main: "#84814b" },
  },
});

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.onload = () => {
      // Delete spinner when screen is finished loading.
      setTimeout(() => {
        setLoading(false);
      }, 500);

      // text animation
      textAnimation();
    };
  }, []);

  // Force the spinner to deactivate if it takes more than 3 seconds to load.
  setTimeout(() => {
    setLoading(false);
  }, 3000);
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Lp />} />
          <Route path="/airRegi" element={<AirRegi />} />
          <Route path="/airPay" element={<AirPay />} />
          <Route path="/myPortfolio" element={<MyPortfolio />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
    // <ThemeProvider theme={theme}>
    //   {loading ? (
    //     <LoadingAnimation />
    //   ) : (
    //     <BrowserRouter basename={process.env.PUBLIC_URL}>
    //       <Routes>
    //         <Route path="/" element={<Lp />} />
    //         <Route path="/airRegi" element={<AirRegi />} />
    //         <Route path="/airPay" element={<AirPay />} />
    //         <Route path="/myPortfolio" element={<MyPortfolio />} />
    //       </Routes>
    //       <Footer />
    //     </BrowserRouter>
    //   )}
    // </ThemeProvider>
  );
};

export default App;
