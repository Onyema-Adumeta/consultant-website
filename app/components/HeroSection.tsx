'use client';
import React from 'react';

export default function HeroSection() {
  return (
    <section
      className="relative bg-cover bg-center min-h-screen flex items-center justify-center text-white"
      style={{ backgroundImage: "url('/images/chilli.jpg')" }}
    >
      {/* Clean Overlay - No patterns */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/85 via-gray-900/75 to-gray-900/85" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-20">
        
        {/* Badge */}
        <div className="inline-block mb-6">
          <span className="px-4 py-2 bg-teal-500/15 border border-teal-400/40 rounded-full text-teal-300 text-sm font-semibold tracking-wide backdrop-blur-sm">
            Data Solutions for Growing Businesses
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          Stop Wrestling With Spreadsheets.
          <span className="block bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent mt-2">
            Start Making Data-Driven Decisions.
          </span>
        </h1>
        
        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
          We help small and mid-sized businesses build the data infrastructure they need to compete—automated pipelines, real-time dashboards, and insights you can actually use. No enterprise complexity. No massive budgets required.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <a
            href="#contact"
            className="px-8 py-4 bg-gradient-to-r from-teal-500 to-teal-600 text-gray-900 font-semibold rounded-lg shadow-xl hover:shadow-2xl hover:-translate-y-1 hover:from-teal-400 hover:to-teal-500 transition-all duration-300 text-lg group"
          >
            Book Free Consultation
            <svg 
              className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
          <a
            href="#services"
            className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg border-2 border-white/40 hover:bg-white/20 hover:border-white/60 transition-all duration-300 text-lg"
          >
            Download Free Guide
          </a>
        </div>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-3 gap-6 max-w-2xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 sm:p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
              15hrs+
            </div>
            <div className="text-xs sm:text-sm text-gray-300 mt-2 font-medium">Saved Per Week</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 sm:p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
              10+
            </div>
            <div className="text-xs sm:text-sm text-gray-300 mt-2 font-medium">Years Experience</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 sm:p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
              6-12mo
            </div>
            <div className="text-xs sm:text-sm text-gray-300 mt-2 font-medium">Typical ROI</div>
          </div>
        </div>

        {/* Trust Markers */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="text-xs sm:text-sm text-gray-400 uppercase tracking-wider mb-4 font-semibold">
            Built For
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-300">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <span>Small & Mid-Sized Businesses</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span>Fast-Growing Companies</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span>Teams of 10-200 People</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2 text-white/70">
          <span className="text-sm font-medium">Scroll to explore</span>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}