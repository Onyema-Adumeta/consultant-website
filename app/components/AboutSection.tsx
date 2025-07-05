'use client';
import Image from 'next/image';
import React from 'react';

export default function AboutSection() {
  return (
    <section id="about" className="py-16 px-6 bg-white max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-6">About</h2>
      <div className="flex flex-col sm:flex-row items-center gap-8 text-center sm:text-left">
        <div className="flex flex-col items-center">
          <Image
            src="/images/Personal.jpg"
            alt="Consultant"
            width={180}
            height={180}
            priority
            className="rounded-full object-cover shadow-lg ring-4 ring-blue-500"
          />
          <p className="text-xl font-semibold mt-4">Onyema Davidson Adumeta</p>
        </div>
        <p className="text-lg">
          I’m a consultant committed to helping businesses build modern data solutions, optimize processes,
          ensure financial accuracy, and meet compliance with confidence. My expertise spans technical and strategic disciplines,
          tailored to support your growth. I’m currently building <span className="font-semibold text-blue-600">InsightBridge</span> — an AI-powered financial analysis platform designed to help small and medium businesses turn raw financial data into actionable insights.
        </p>
      </div>
    </section>
  );
}
