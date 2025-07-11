import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import hero1 from "../../public/images/sl1.jpg";
import hero2 from "../../public/images/sl2.jpg";
import hero3 from "../../public/images/sl3.jpg";
import hero4 from "../../public/images/sl4.jpg";
import chatboticon from "../../public/icons/chatbot.png";


const images = [hero1, hero2, hero3, hero4];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const fullText = "Artisan Blend";
  const [typedText, setTypedText] = useState("");
  const [typingIndex, setTypingIndex] = useState(0);

  // Carousel autoplay every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Typewriter effect
  useEffect(() => {
    if (typingIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText((prev) => prev + fullText.charAt(typingIndex));
        setTypingIndex((prev) => prev + 1);
      }, 150);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setTypedText("");
        setTypingIndex(0);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [typingIndex, fullText]);

  return (
    <section className="relative w-full h-screen overflow-hidden" id="hero">
      <div className="absolute inset-0">
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`Slide ${idx + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              idx === currentSlide ? "opacity-100" : "opacity-0"
            }`}
            loading="lazy"
          />
        ))}
        {/* Dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Center the content vertically and horizontally */}
      <div className="relative z-10 flex justify-center items-center h-full px-6 md:px-12">
        {/* Content box with lighter background and left border */}
        <div
          className="bg-black bg-opacity-20 border-l-4 border-[#CCAA35] px-8 py-10 max-w-4xl"
          style={{ minWidth: "320px" }}
        >
          <h1
            className="text-white text-5xl md:text-7xl font-bold mb-4 select-none"
            aria-label="Restaurant Name"
            style={{ minHeight: "4.5rem" }}
          >
            {typedText}
          </h1>

          <p className="text-white text-lg md:text-xl font-light mb-8 max-w-xl">
            We're more than just a cafe. A hub of warmth, creativity, and exceptional flavors. Discover the ultimate brunch destination in Nairobi.
          </p>

          <Link
            to="signature"
            smooth={true}
            duration={500}
            className="inline-block px-6 py-3 rounded-md bg-[#CCAA35] text-white font-semibold cursor-pointer hover:bg-yellow-400 transition w-max"
          >
            See Menu
          </Link>
                 {/* Chatbot icon in bottom-right corner of Hero only */}
      <Link
        to="chatbot"
        smooth={true}
        duration={500}
        className="absolute bottom-6 right-6 z-20"
      >
        <div className="bg-[#CCAA35] hover:bg-yellow-400 transition p-3 rounded-full shadow-lg cursor-pointer">
          <img
            src={chatboticon}
            alt="Chatbot"
            className="w-10 h-10 object-contain"
          />
        </div>
      </Link>

        </div>
      </div>
    </section>
  );
}
