// src/components/ChatBot.jsx
import React, { useState } from 'react';
import { ArrowRight, ChevronLeft } from 'lucide-react';

const samplePrompts = [
  "What’s the most popular dish?",
  "Do you have vegan options?",
  "Can I make a reservation for Friday?"
];


export default function ChatBot() {
  const [messages, setMessages] = useState([
    { type: 'bot', text: 'Hi! Ask any questions you have on our services below!' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const sendMessage = () => {
    if (!input.trim()) return;
    const newMessage = { type: 'user', text: input };
    setMessages(prev => [...prev, newMessage]);
    setInput('');
    setLoading(true);

    // Simulated bot reply delay
    setTimeout(() => {
      setMessages(prev => [...prev, { type: 'bot', text: "Thanks for your message. We'll get back shortly!" }]);
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="w-full max-w-3xl mx-auto mt-6 border border-gray-300 rounded-xl p-4 bg-white relative overflow-hidden">
      {/* Top-left forward icon */}
      <a href="#" className="absolute top-4 left-4 w-8 h-8 flex items-center justify-center rounded-full border-2 border-[#ccaa35] text-[#ccaa35] hover:bg-[#ccaa35] hover:text-white transition\">
  <ChevronLeft size={16} />
</a>

      {/* Top-right decorative circle */}
      <div className="absolute top-0 right-0 w-24 h-24 rounded-full border-[6px] border-[#ccaa35] translate-x-1/3 -translate-y-1/3\">
  <div className="w-3 h-3 rounded-full bg-[#ccaa35] absolute top-1 left-1\"></div>
</div>
      {/* Bottom-left decorative circle */}
      <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full border-[6px] border-[#ccaa35] -translate-x-1/3 translate-y-1/3\">
  <div className="w-3 h-3 rounded-full bg-[#ccaa35] absolute bottom-1 right-1\"></div>
</div>
      <h2 className="text-center text-xl font-semibold">How can we assist you today?</h2>
      <p className="text-center text-sm text-gray-500 mb-4">Talk to Artist AI about our services, origin, food and so much more.</p>

      <div className="bg-[#f9f7e9] rounded-xl h-64 overflow-y-auto p-4 space-y-2 text-sm text-gray-800">
        {messages.map((msg, i) => (
          <div key={i} className={`text-left ${msg.type === 'user' ? 'text-right' : ''}`}>
            <div className={`inline-block px-4 py-2 rounded-lg ${msg.type === 'user' ? 'bg-[#ccaa35] text-white' : 'bg-white border'}`}>
              {msg.text}
            </div>
          </div>
        ))}
        {loading && <div className="italic text-gray-400">Bot is typing...</div>}
      </div>

      <div className="flex items-center mt-4 gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your prompt here..."
          className="flex-1 px-4 py-2 rounded-full border border-gray-300 focus:outline-none"
        />
        <button
          onClick={sendMessage}
          className="bg-[#ccaa35] p-2 rounded-full text-white hover:opacity-90 transition"
        >
          <ArrowRight size={20} />
        </button>
      </div>

      <div className="flex justify-around text-xs text-center mt-6 text-black">
        <div>
          <p className="font-semibold">Open hours</p>
          <p className="text-gray-500">Mon-Sat: 8:00 am to 10:00 pm</p>
        </div>
        <div>
          <p className="font-semibold">Food Offered</p>
          <p className="text-gray-500">Dine-in, take-away, and home delivery</p>
        </div>
        <div>
          <p className="font-semibold">Make Reservation</p>
          <p className="text-gray-500">Easy online or walk-in reservations</p>
        </div>
      </div>

      <div className="mt-4 text-sm text-gray-500">Suggestions:</div>
      <div className="flex gap-2 mt-2 flex-wrap">
        {samplePrompts.map((prompt, idx) => (
          <button
            key={idx}
            onClick={() => setInput(prompt)}
            className="px-3 py-1 bg-gray-100 rounded-full text-xs hover:bg-gray-200"
          >
            {prompt}
          </button>
        ))}
      </div>
    </div>
  );
}
