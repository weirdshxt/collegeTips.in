import { Routes, Route } from "react-router-dom";
import ChatSection from "./page/ChatSection";
import Home from "./page/Home";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/chat" element={<ChatSection />} />
    </Routes>
  );
}
