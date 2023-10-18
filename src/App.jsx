import "./App.css";
import React from "react";
import LandingPage from "./pages/LandingPage";
import AboutMePage from "./pages/AboutMePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<LandingPage />} />
        <Route path="/about-me" element={<AboutMePage />} />
      </Routes>
    </Router>
  );
}

export default App;
