import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { getChatHistory, chat, getEmail } from "../libs/api/api_utils";

const Chat = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef(null);

  // Auto scroll to bottom
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  // Fetch chat history
  useEffect(() => {
    const fetchHistory = async () => {
      const email = getEmail();
      if (!email) {
        navigate("/auth");
        return;
      }
      try {
        const data = await getChatHistory(email);
        setMessages(data || []);
      } catch (err) {
        console.error("Error fetching chat history:", err);
      }
    };
    fetchHistory();
  }, [navigate]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const email = getEmail();
    const newMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, newMessage]);
    setInput("");
    setLoading(true);

    try {
      const res = await chat(email, input);
      if (res?.reply) {
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: res.reply },
        ]);
      }
    } catch (err) {
      console.error("Error sending message:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative h-[100svh] flex flex-col">
      {/* Background */}
      <img
        src="/background2.webp"
        alt="Chat Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div className="absolute inset-0 bg-black/20 backdrop-blur-md z-0" />

      {/* Top Bar (Fixed) */}
      <div className="absolute top-0 left-0 right-0 z-20 flex items-center gap-3 px-4 py-3 bg-white/0 backdrop-blur-md shadow border-b border-white/40">
        <button
          onClick={() => navigate("/dashboard")}
          className="p-2 rounded-full hover:bg-black/10"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h1 className="font-times text-lg">Sanaya AI</h1>
      </div>

      {/* Chat Messages (Scrollable) */}
      <div className="flex-1 overflow-y-auto px-3 sm:px-6 lg:px-36 pt-16 pb-24 space-y-3 z-10">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex ${
              msg.role === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-[70%] px-4 py-2 text-sm sm:text-base rounded-2xl border shadow 
              backdrop-blur-xl
              ${
                msg.role === "user"
                  ? "ml-auto text-black bg-white/30"
                  : "mr-auto bg-blue-300/30 text-white"
              }`}
            >
              {msg.content}
            </div>
          </div>
        ))}

        {/* Typing Animation */}
        {loading && (
          <div className="flex justify-start">
            <div className="px-4 py-2 rounded-2xl shadow bg-blue-500/80 text-white flex gap-1">
              <span className="animate-bounce">.</span>
              <span className="animate-bounce delay-150">.</span>
              <span className="animate-bounce delay-300">.</span>
            </div>
          </div>
        )}

        <div ref={chatEndRef} />
      </div>

      {/* Input Box (Fixed bottom) */}
      <div className="absolute bottom-0 left-0 right-0 z-20 p-3 lg:px-36 pt-4 pb-6 bg-white/0 backdrop-blur-xl border-t border-white/40 flex items-center gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          placeholder="Type your message..."
          className="flex-1 px-4 py-2 rounded-full border border-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white/60 backdrop-blur-md"
        />
        <button
          onClick={handleSend}
          className="px-4 py-2 rounded-full bg-blue-500/80 text-white hover:bg-blue-600 transition"
        >
          Send
        </button>
      </div>
    </section>
  );
};

export default Chat;
