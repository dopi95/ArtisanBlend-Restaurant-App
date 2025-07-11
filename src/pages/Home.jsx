import React from 'react';
import Hero from '../components/Hero';
import SignatureDishes from '../components/SignatureDishes';

export default function Home() {
  return (
    <main>
      <section id="hero">
        <Hero />
      </section>

      <section id="signature" className="mt-20">
        <SignatureDishes />
      </section>
    </main>
  );
}
