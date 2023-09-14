import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/common/footer";
import Lp from "./pages/lp";
import WorkTemplate from "./pages/workTemplate";
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
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Lp />} />
          <Route path="/workTemplate" element={<WorkTemplate />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
