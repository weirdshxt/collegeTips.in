import React from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#e2e1ff]">
      <div className="sm:h-[80vh] sm:w-[25%] h-screen w-full bg-violet-700 text-white sm:rounded-3xl rounded-none flex flex-col items-center justify-center p-6 shadow-xl/30">
        <h1 className="text-2xl mb-6">Hello</h1>
        <h2 className="text-4xl font-semibold mb-14">I'm Izyan!</h2>
        <div className="w-34 h-34 bg-white/20 rounded-full flex items-center justify-center mb-12">
          <span className="text-7xl">🤖</span>
        </div>
        <p className="text-xl mb-8 text-center">How can I help you?</p>
        <button
          onClick={() => navigate("/chat")}
          className="bg-white text-[#5e2eff] px-6 py-2 rounded-full text-sm font-medium shadow"
        >
          I want to know!
        </button>
      </div>
    </div>
  );
}

export default Home