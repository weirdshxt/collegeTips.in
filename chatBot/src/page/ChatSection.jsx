import { useState, useRef, useEffect } from "react";
import MessageBubble from "../component/MessageBubble";
import getAIReply from "../utils/AI";
import { useNavigate } from "react-router-dom";
import { ArrowLeftIcon } from "lucide-react";


const ChatSection = () => {
  const [messages, setMessages] = useState([
    { text: "Ask me anything!", sender: "bot" },
  ]);
  const [input, setInput] = useState("");
  const chatEndRef = useRef(null);

  const navigate = useNavigate();

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const formatBotReplyToHtml = (reply) => {
    // Format the reply to handle line breaks, bold text, and bullet points
    let formattedReply = reply.replace(/\n/g, '<br>'); // Handle line breaks
    formattedReply = formattedReply.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>'); // Handle bold text **...**
    
    // Handle single * as bullet points, assuming they are at the start of a line
    const lines = formattedReply.split('<br>');
    let hasListItems = false;
    const processedLines = lines.map(line => {
      const trimmedLine = line.trim();
      if (trimmedLine.startsWith('* ')) {
        hasListItems = true;
        return `<li>${trimmedLine.substring(2)}</li>`; // Remove '* ' and wrap in <li>
      }
      return line;
    });
    formattedReply = processedLines.join("<br><br>");
    
    if (hasListItems) {
      formattedReply = `<ul>${formattedReply}</ul>`; // Wrap in <ul> if list items exist
    }
    return formattedReply;
  };

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = { text: input, sender: "user" };
    setMessages((prev) => [...prev, userMsg, { text: "...", sender: "bot" }]);
    setInput("");

    const reply = await getAIReply(input);
    const formattedHtmlReply = formatBotReplyToHtml(reply);
    setMessages((prev) => [
      ...prev.slice(0, -1),
      { text: formattedHtmlReply, sender: "bot" },
    ]);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-t from-violet-600 to-violet-700">
      <div className="sm:h-[80vh] sm:w-[25%] h-screen w-full bg-white sm:rounded-3xl rounded-none shadow-xl/30 flex flex-col overflow-hidden">
        <div className="flex items-center p-4 text-violet-700 text-xl font-medium border-b">
          <span onClick={() => navigate("/")} className="cursor-pointer">
            <ArrowLeftIcon />
          </span>
          <p className="ml-3">Hello, I’m Izyan 🤖</p>
        </div>

        <div className="flex-1 overflow-y-auto p-4 bg-[#f8f8ff] space-y-3">
          {messages.map((msg, idx) => (
            <MessageBubble key={idx} text={msg.text} sender={msg.sender} />
          ))}
          <div ref={chatEndRef}></div>
        </div>

        <form
          onSubmit={sendMessage}
          className="p-3 pb-5 pt-12 border-t-violet-500 border-t-1 bg-violet-700 rounded-tl-4xl rounded-tr-4xl"
        >
          <div className="flex items-center bg-violet-500 rounded-full px-4 py-2">
            <input
              type="text"
              className="flex-1 bg outline-none text-sm text-white"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Message"
            />
            <button type="submit" className="text-white text-xl cursor-pointer">
              ➤
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChatSection;
