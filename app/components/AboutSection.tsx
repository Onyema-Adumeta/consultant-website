'use client';
import Image from 'next/image';
import React from 'react';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-teal-100 text-teal-600 font-semibold text-sm uppercase tracking-wider rounded-lg mb-4">
            About
          </span>
          <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-gray-900">
            Onyema Davidson Adumeta
          </h2>
          <p className="text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
            Helping growing businesses turn data chaos into competitive advantage
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          {/* Image Column */}
          <div className="lg:col-span-2 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
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
              I help small and mid-sized businesses build the data infrastructure they need to compete—without 
              the enterprise complexity or massive budgets.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              After spending 15+ years working with companies from ambitious startups to established mid-market 
              leaders, I noticed a pattern: brilliant teams making critical decisions based on gut feel, outdated 
              spreadsheets, and data scattered across a dozen systems. The irony? They were sitting on goldmines 
              of data—they just couldn't access it, trust it, or turn it into action fast enough.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              That's why I founded <span className="font-semibold text-gray-900">Credence Consulting</span>. Every business 
              deserves access to the same data infrastructure that powers the world's most successful companies—without 
              needing an army of engineers or million-dollar budgets.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Currently building{' '}
              <span className="font-bold bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
                InsightBridge
              </span>
              —an AI-powered financial analysis platform that helps small and medium businesses turn raw 
              financial data into actionable insights in minutes, not days.
            </p>

            {/* Highlights */}
            <div className="pt-6 space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-lg font-semibold text-gray-900">
                  Microsoft Certified Data Engineer
                </span>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-lg font-semibold text-gray-900">
                  CBAP Certified Business Analyst
                </span>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-lg font-semibold text-gray-900">
                  15+ Years Industry Experience
                </span>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-8">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
              >
                Let's Talk About Your Data Challenges
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}