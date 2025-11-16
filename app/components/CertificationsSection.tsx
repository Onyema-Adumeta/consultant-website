'use client';
import React from 'react';

export default function CertificationsSection() {
  return (
    <section id="certifications" className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 font-semibold text-sm uppercase tracking-wider rounded-lg mb-4">
            Credentials
          </span>
          <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Professional Certifications
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Industry-recognized certifications that validate expertise and commitment to excellence.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Microsoft Fabric Certification */}
          <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
            <div className="p-8">
              {/* Badge Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <svg className="w-9 h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="8" r="7"></circle>
                  <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                </svg>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-900 mb-2 leading-tight">
                DP-700: Implementing Data Engineering Solutions
              </h3>
              <p className="text-lg text-gray-600 mb-4">Using Microsoft Fabric</p>

              {/* Meta Information */}
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="px-3 py-1.5 bg-blue-100 text-blue-700 font-semibold text-sm rounded-lg">
                  Microsoft
                </span>
                <span className="px-3 py-1.5 bg-gray-100 text-gray-700 font-medium text-sm rounded-lg">
                  May 2025
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-700 leading-relaxed">
                Advanced certification in designing and implementing enterprise-scale data engineering 
                solutions using Microsoft Fabric platform.
              </p>
            </div>
          </div>

          {/* CBAP Certification */}
          <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
            <div className="p-8">
              {/* Badge Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <svg className="w-9 h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="8" r="7"></circle>
                  <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                </svg>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-900 mb-2 leading-tight">
                CBAP: Certified Business Analysis Professional
              </h3>
              <p className="text-lg text-gray-600 mb-4">International Institute of Business Analysis</p>

              {/* Meta Information */}
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="px-3 py-1.5 bg-blue-100 text-blue-700 font-semibold text-sm rounded-lg">
                  IIBA
                </span>
                <span className="px-3 py-1.5 bg-green-100 text-green-700 font-medium text-sm rounded-lg">
                  Valid through 2026
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-700 leading-relaxed">
                Premier certification demonstrating mastery in business analysis, requirements 
                engineering, and strategic planning.
              </p>
            </div>
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="mt-12 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h4 className="text-xl font-bold text-gray-900 mb-2">
                Committed to Continuous Learning
              </h4>
              <p className="text-gray-700">
                Staying current with the latest technologies and methodologies to deliver cutting-edge solutions 
                that drive real business value.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}