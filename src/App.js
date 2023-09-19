import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/common/footer";
import Lp from "./pages/lp";
import AirRegi from "./pages/airRegi";
import AirPay from "./pages/airPay";
import MyPortfolio from "./pages/myPortfolio";
import "./styles/main.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    secondary: { main: "#da9e35" },
    primary: { main: "#84814b" },
  },
});

const App = () => {
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
  );
};

export default App;
