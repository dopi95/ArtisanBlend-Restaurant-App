// src/pages/Home.jsx
import React from 'react';
import Hero from '../components/Hero';
import SignatureDishes from '../components/SignatureDishes';
import ChatBot from '../components/ChatBot';
import About from '../components/About';

export default function Home() {
  return (
    <main className="flex flex-col">
      <section id="hero">
        <Hero />
      </section>
      <section id="about" className="mt-20">
        <About />
      </section>

      <section id="signature" className="mt-20">
        <SignatureDishes />
      </section>
      <section id="chatbot" className="mt-20">
        <ChatBot />
      </section>
      
     
      
    </main>
  );
}
