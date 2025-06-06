const MessageBubble = ({ text, sender }) => {
  const base = "px-4 py-2 max-w-[80%] w-fit rounded-xl text-sm";
  const user = "bg-violet-700 ml-auto text-[#e2e1ff]";
  const bot = "bg-[#e8e6ff] text-left mr-auto text-violet-700";


  return (
    <div className={`flex items-start ${sender === "user" ? "justify-end" : "justify-start"}`}>
      {sender === "bot" && <span className="text-xl mr-1">🤖</span>}
      {sender === "bot" ? (
        <div className={`${base} ${bot}`}>
          <div dangerouslySetInnerHTML={{ __html: text }} />
        </div>
      ) : (
        <div className={`${base} ${user}`}>
          {text}
        </div>
      )}
    </div>
  );
};
export default MessageBubble;
