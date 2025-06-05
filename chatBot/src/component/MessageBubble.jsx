const MessageBubble = ({ text, sender }) => {
  const base = "px-4 py-2 max-w-[80%] w-fit rounded-xl text-sm";
  const user = "bg-violet-700 ml-auto text-[#e2e1ff]";
  const bot = "bg-[#e8e6ff] text-left mr-auto text-violet-700";

  // If the sender is 'bot', the text might be HTML, so use dangerouslySetInnerHTML.
  // Otherwise, render text directly to prevent XSS from user input.
  return (
    <div className={`${base} ${sender === "user" ? user : bot}`}>
      {sender === "bot" ? (
        <div dangerouslySetInnerHTML={{ __html: text }} />
      ) : (
        text
      )}
    </div>
  );
};
export default MessageBubble;
