// src/components/ChatBot.jsx
import React, { useState, useEffect } from "react";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

const samplePrompts = [
  "What’s the most popular dish?",
  "Do you have vegan options?",
  "Can I make a reservation for Friday?",
];

export default function ChatBot() {
  const [messages, setMessages] = useState([
    {
      type: "bot",
      text: "Hi! Ask any questions you have on our services below!",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const sessionIdRef = useRef(null);
  const messagesEndRef = useRef(null);

  // Initialize session
  useEffect(() => {
    sessionIdRef.current = crypto.randomUUID();
  }, []);

  // Auto-scroll
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const newMessage = { type: "user", text: input };
    setMessages((prev) => [...prev, newMessage]);
    setInput("");
    setLoading(true);

    //   setTimeout(() => {
    //     setMessages(prev => [
    //       ...prev,
    //       { type: 'bot', text: "Thanks for your message. We'll get back shortly!" }
    //     ]);
    //     setLoading(false);
    //   }, 1500);
    // };
    try {
      const res = await fetch("https://c562fe7439da.ngrok-free.app/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: input,
          session_id: sessionIdRef.current,
        }),
      });

      const data = await res.json();
      sessionIdRef.current = data.session_id; // store session ID
      setMessages((prev) => [...prev, { type: "bot", text: data.response }]);
    } catch (err) {
      console.error("Chatbot error:", err);
      setMessages((prev) => [
        ...prev,
        { type: "bot", text: "Something went wrong. Please try again." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
      id="chatbot"
    >
      {/* Chatbot Container */}
      <div className="relative z-10 w-full max-w-4xl border border-gray-300 dark:border-gray-700 rounded-2xl p-6 bg-white dark:bg-gray-800 shadow-lg min-h-[600px] flex flex-col justify-between">
        {/* Header Text */}
        <div>
          <h2 className="text-center text-2xl font-semibold">
            How can we assist you today?
          </h2>
          <p className="text-center text-sm text-gray-500 dark:text-gray-400 mb-4">
            Talk to Artist AI about our services, origin, food and so much more.
          </p>
        </div>

        {/* Chat Messages Area */}
        <div className="bg-[#f9f7e9] dark:bg-gray-700 rounded-xl overflow-y-auto p-4 space-y-2 text-sm text-gray-800 dark:text-gray-100 flex-1 mb-4">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`text-left ${msg.type === "user" ? "text-right" : ""}`}
            >
              <div
                className={`inline-block px-4 py-2 rounded-lg ${
                  msg.type === "user"
                    ? "bg-[#ccaa35] text-white"
                    : "bg-white dark:bg-gray-600 border border-gray-200 dark:border-gray-500"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {loading && (
            <div className="italic text-gray-400 dark:text-gray-300">
              Bot is typing...
            </div>
          )}
        </div>

        {/* Input and Send Button */}
        <div className="flex items-center gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your prompt here..."
            className="flex-1 px-4 py-2 rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none"
          />
          <button
            onClick={sendMessage}
            className="bg-[#ccaa35] p-2 rounded-full text-white hover:opacity-90 transition"
          >
            <ArrowRight size={20} />
          </button>
        </div>

        {/* Info Section */}
        <div className="flex flex-col md:flex-row justify-around text-xs text-center mt-6 text-black dark:text-white gap-4">
          <div>
            <p className="font-semibold">Open hours</p>
            <p className="text-gray-500 dark:text-gray-300">
              Mon-Sat: 8:00 am to 10:00 pm
            </p>
          </div>
          <div>
            <p className="font-semibold">Food Offered</p>
            <p className="text-gray-500 dark:text-gray-300">
              Dine-in, take-away, delivery
            </p>
          </div>
          <div>
            <p className="font-semibold">Make Reservation</p>
            <p className="text-gray-500 dark:text-gray-300">
              Online or walk-in reservations
            </p>
          </div>
        </div>

        {/* Prompt Suggestions */}
        <div className="mt-4 text-sm text-gray-500 dark:text-gray-300">
          Suggestions:
        </div>
        <div className="flex gap-2 mt-2 flex-wrap">
          {samplePrompts.map((prompt, idx) => (
            <button
              key={idx}
              onClick={() => setInput(prompt)}
              className="px-3 py-1 bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-100 rounded-full text-xs hover:bg-gray-200 dark:hover:bg-gray-500"
            >
              {prompt}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
