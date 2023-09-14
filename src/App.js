import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/common/footer";
import Lp from "./pages/lp";
import WorkTemplate from "./pages/workTemplate";
import "./styles/main.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Lp />} />
        <Route path="/workTemplate" element={<WorkTemplate />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
