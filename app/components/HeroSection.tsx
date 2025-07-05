import React from 'react';

export default function HeroSection() {
  return (
    <section
      className="relative bg-cover bg-center h-[400px] flex items-center justify-center text-white text-center"
      style={{ backgroundImage: "url('/images/chilli.jpg')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0" />
      <div className="z-10 p-6 rounded">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Credence Consulting</h1>
        <p className="text-xl sm:text-2xl">
          Data Engineering, Business Consulting,<br />
          Bookkeeping & Accounting
        </p>
      </div>
    </section>
  );
}