import React from "react";
import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CaseStudy from "./pages/CaseStudy";

function App() {
  return (
    <div className="page">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work/wellington-hub" element={<CaseStudy />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
