import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Tutorials from "./pages/Tutorials";
import AIChat from "./pages/AIChat";
import Feedback from "./pages/Feedback";
import NotFound from "./pages/NotFound";

function App() {
  return (
    
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tutorials" element={<Tutorials />} />
          <Route path="/chatbot" element={<AIChat />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
  );
}

export default App;
