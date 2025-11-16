'use client';
import Image from 'next/image';
import React from 'react';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 font-semibold text-sm uppercase tracking-wider rounded-lg mb-4">
            About
          </span>
          <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-gray-900">
            Onyema Davidson Adumeta
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          {/* Image Column */}
          <div className="lg:col-span-2 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
              <div className="relative">
                <Image
                  src="/images/Personal.jpg"
                  alt="Onyema Davidson Adumeta - Credence Consulting"
                  width={300}
                  height={300}
                  priority
                  className="rounded-full object-cover shadow-2xl ring-4 ring-white"
                />
              </div>
            </div>
          </div>

          {/* Text Column */}
          <div className="lg:col-span-3 space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              I'm a consultant committed to helping businesses build modern data solutions, optimize processes,
              ensure financial accuracy, and meet compliance with confidence.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              My expertise spans technical and strategic disciplines, tailored to support your growth. With certifications 
              in data engineering and business analysis, I bring a unique blend of technical depth and strategic thinking 
              to every project.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Currently building{' '}
              <span className="font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                InsightBridge
              </span>{' '}
              — an AI-powered financial analysis platform designed to help small and medium businesses turn raw 
              financial data into actionable insights.
            </p>

            {/* Highlights */}
            <div className="pt-6 space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-lg font-semibold text-gray-900">
                  Microsoft Certified Data Engineer
                </span>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-lg font-semibold text-gray-900">
                  CBAP Certified Business Analyst
                </span>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-lg font-semibold text-gray-900">
                  15+ Years Industry Experience
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}