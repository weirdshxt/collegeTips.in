import React, { useState } from "react";
import bot from "../assets/BotHuman.mp4";
import { Sparkles } from "lucide-react";
import Navbar from "../components/Navbar";

const Home = () => {
  const [showChat, setShowChat] = useState(false); // Note: This state variable is declared but not used.
  const [activeChat, setActiveChat] = useState(2); // Set to 2 to make the second chat section active by default
  return (
    <div className="min-h-screen w-full reltive">
      <Navbar />
      <video
        className="absolute w-full h-full object-cover"
        src={bot}
        muted
        autoPlay
        loop
      ></video>
      <div className="overlay w-full h-full absolute left-0 top-0 flex">
        <div className="hero-txt text-[#2E3A40] text-8xl space-y-4 w-1/2 ml-12 flex flex-col items-start justify-end mb-16">
          <h1>Empowering</h1>
          <h1>Digital Literacy</h1>
          <h1>to Help Everyone</h1>
        </div>

        <div className="chat w-1/2 h-full flex flex-col items-center justify-center pl-35 ">
          <div className="flex flex-col h-full items-end justify-center mt-28 space-y-5">
            <div
              className={`flex mr-12 h-1/5 space-x-2 ${
                activeChat === 1 ? "h-1/5" : ""
              }`}
            >
              <div
                className={`p-2 w-fit h-fit ${
                  activeChat === 1 ? "active chat-btn" : ""
                }`}
                onClick={() => setActiveChat(activeChat === 1 ? null : 1)}
              >
                <Sparkles
                  strokeWidth={1.25}
                  size={20}
                  fill="#2E3A40"
                  stroke="#2E3A40"
                />
              </div>
              <div
                className={`chat-container inset-shadow-xs inset-shadow-white w-3xs space-y-4 transition-all duration-500 ease-in-out overflow-hidden ${
                  activeChat === 1
                    ? "max-h-full opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="message-bubble max-w-[80%] w-fit">
                  <p className="text-xs">This is a message.</p>
                </div>
                <div className="message-bubble max-w-[80%] w-fit ml-auto">
                  <p className="text-xs">This is a message.</p>
                </div>
              </div>
            </div>
            <div
              className={`flex h-1/5 ml-12 space-x-2 ${
                activeChat === 2 ? "h-1/5" : ""
              }`}
            >
              <div
                className={`p-2 w-fit h-fit ${
                  activeChat === 2 ? "active chat-btn" : ""
                }`}
                onClick={() => setActiveChat(activeChat === 2 ? null : 2)}
              >
                <Sparkles
                  strokeWidth={1.25}
                  size={20}
                  fill="#2E3A40"
                  stroke="#2E3A40"
                />
              </div>
              <div
                className={`chat-container inset-shadow-xs inset-shadow-white w-3xs space-y-4 transition-all duration-500 ease-in-out overflow-hidden ${
                  activeChat === 2
                    ? "max-h-full opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="message-bubble max-w-[80%] w-fit">
                  <p className="text-xs">This is a message.</p>
                </div>
                <div className="message-bubble max-w-[80%] w-fit ml-auto">
                  <p className="text-xs">This is a message.</p>
                </div>
              </div>
            </div>
            <div
              className={`flex mr-12 h-1/5 space-x-2 ${
                activeChat === 3 ? "h-1/5" : ""
              }`}
            >
              <div
                className={`p-2 w-fit h-fit cursor-pointer ${
                  activeChat === 3 ? "active chat-btn" : ""
                }`}
                onClick={() => setActiveChat(activeChat === 3 ? null : 3)}
              >
                <Sparkles
                  strokeWidth={1.25}
                  size={20}
                  fill="#2E3A40"
                  stroke="#2E3A40"
                />
              </div>
              <div
                className={`chat-container inset-shadow-xs inset-shadow-white w-3xs space-y-4 transition-all duration-500 ease-in-out overflow-hidden ${
                  activeChat === 3
                    ? "max-h-full opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="message-bubble max-w-[80%] w-fit">
                  <p className="text-xs">This is a message.</p>
                </div>
                <div className="message-bubble max-w-[80%] w-fit ml-auto">
                  <p className="text-xs">This is a message.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
