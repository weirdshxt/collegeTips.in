import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TeamVibes from "./pages/TeamVibes";
import WorkPlay from "./pages/WorkPlay";
import BTS from "./pages/BTS";
import Celebration from "./pages/Cele";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/teamvibe" element={<TeamVibes />} />
        <Route path="/category/workplay" element={<WorkPlay />} />
        <Route path="/category/bts" element={<BTS />} />
        <Route path="/category/celebration" element={<Celebration />} />
      </Routes>
    </Router>
  );
}

export default App;
