'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const InsightBridgePage = () => {
  const [activeTab, setActiveTab] = useState('analysis');
  const [email, setEmail] = useState('');
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success'>('idle');

  const handleEarlyAccess = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus('success');
    setEmail('');
    setTimeout(() => setSubmitStatus('idle'), 3000);
  };

  return (
    <>
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-md shadow-md fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-md">
                C
              </div>
              <span className="text-lg font-bold text-gray-900">
                Credence Consulting
              </span>
            </Link>
            <div className="flex items-center gap-6">
              <a href="#features" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors hidden md:block">
                Features
              </a>
              <a href="#how-it-works" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors hidden md:block">
                How It Works
              </a>
              <a href="#pricing" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors hidden md:block">
                Pricing
              </a>
              <a
                href="#early-access"
                className="px-5 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-semibold rounded-lg shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
              >
                Get Early Access
              </a>
            </div>
          </div>
        </div>
      </nav>

      <main className="bg-white text-gray-800 pt-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20 md:py-32">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Text */}
              <div>
                <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                  <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
                  AI-Powered Financial Intelligence
                </div>
                
                <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                  Turn Financial Data Into
                  <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mt-2">
                    Strategic Decisions
                  </span>
                </h1>
                
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  InsightBridge is an AI-powered platform that transforms complex financial documents into clear, 
                  actionable insights—automatically. Built for small and mid-sized businesses who need enterprise-level 
                  intelligence without the enterprise-level complexity.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <a
                    href="#early-access"
                    className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 text-center relative overflow-hidden"
                  >
                    <span className="relative z-10">Get Free 14-Day Trial</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </a>
                  <a
                    href="#demo-video"
                    className="px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg border-2 border-gray-200 hover:border-blue-600 hover:text-blue-600 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                    Watch 2-Min Demo
                  </a>
                </div>

                {/* Trust indicators */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 text-sm text-gray-600 border-t border-gray-200 pt-6">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="font-medium">No credit card required</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="font-medium">Setup in 5 minutes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="font-medium">Cancel anytime</span>
                  </div>
                </div>
              </div>

              {/* Right Column - Product Preview */}
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl opacity-20 blur-2xl"></div>
                <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
                  <Image
                    src="/images/insightbridge.jpg"
                    alt="InsightBridge Platform Dashboard"
                    width={800}
                    height={500}
                    className="w-full"
                    priority
                  />
                </div>
                
                {/* Floating Stats Cards */}
                <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 border border-gray-100 hover:scale-105 transition-transform duration-300">
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">98%</div>
                  <div className="text-sm text-gray-600">Accuracy Rate</div>
                </div>
                
                <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-xl p-4 border border-gray-100 hover:scale-105 transition-transform duration-300">
                  <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">10x</div>
                  <div className="text-sm text-gray-600">Faster Analysis</div>
                </div>

                <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-4 border border-gray-100 hover:scale-105 transition-transform duration-300">
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">20hrs</div>
                  <div className="text-sm text-gray-600">Saved/Month</div>
                </div>
              </div>
            </div>
          </div>
        </section>



        {/* Problem Statement */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Stop Drowning in Spreadsheets
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-12">
              Small businesses generate massive amounts of financial data but lack the resources for a dedicated 
              analytics team. You're left making critical decisions based on gut feeling rather than data-driven insights.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              <div className="bg-red-50 border border-red-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="text-red-600 mb-3">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Manual Analysis</h3>
                <p className="text-sm text-gray-600 mb-3">Hours spent on spreadsheets that could be automated</p>
                <p className="text-xs text-red-700 font-semibold">Costing you 20+ hrs/month</p>
              </div>
              
              <div className="bg-red-50 border border-red-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="text-red-600 mb-3">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Delayed Insights</h3>
                <p className="text-sm text-gray-600 mb-3">By the time you analyze data, opportunities are gone</p>
                <p className="text-xs text-red-700 font-semibold">Missing revenue opportunities</p>
              </div>
              
              <div className="bg-red-50 border border-red-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="text-red-600 mb-3">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Expensive Solutions</h3>
                <p className="text-sm text-gray-600 mb-3">Enterprise tools cost $10K+/month with complex setup</p>
                <p className="text-xs text-red-700 font-semibold">Out of budget for SMBs</p>
              </div>
            </div>
          </div>
        </section>

        {/* COMPREHENSIVE COMPARISON SECTION */}
        <section className="py-20 bg-gradient-to-b from-white via-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-6">
            {/* Section Header */}
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 font-semibold text-sm uppercase tracking-wider rounded-lg mb-4">
                Comparison
              </span>
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Why InsightBridge Wins
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Built specifically for SMBs who need enterprise power without enterprise complexity or cost
              </p>
            </div>

            {/* Main Comparison Table */}
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200 mb-12">
              <div className="overflow-x-auto">
                <table className="w-full">
                  {/* Table Header */}
                  <thead>
                    <tr className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white">
                      <th className="px-6 py-5 text-left font-bold text-lg">Feature</th>
                      <th className="px-6 py-5 text-center font-bold text-lg bg-white/10">
                        <div className="flex flex-col items-center">
                          <div className="text-2xl mb-1">🏆</div>
                          <div>InsightBridge</div>
                        </div>
                      </th>
                      <th className="px-6 py-5 text-center font-semibold">
                        Excel/<br/>Spreadsheets
                      </th>
                      <th className="px-6 py-5 text-center font-semibold">
                        QuickBooks/<br/>Xero
                      </th>
                      <th className="px-6 py-5 text-center font-semibold">
                        Tableau/<br/>Power BI
                      </th>
                      <th className="px-6 py-5 text-center font-semibold">
                        Enterprise<br/>Solutions
                      </th>
                    </tr>
                  </thead>

                  {/* Table Body */}
                  <tbody className="divide-y divide-gray-200">
                    {/* Setup & Ease of Use */}
                    <tr className="bg-blue-50/50">
                      <td colSpan={6} className="px-6 py-3 font-bold text-gray-900 text-sm uppercase tracking-wide">
                        Setup & Ease of Use
                      </td>
                    </tr>

                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 font-medium text-gray-900">Setup Time</td>
                      <td className="px-6 py-4 text-center bg-green-50">
                        <div className="flex flex-col items-center gap-1">
                          <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="font-bold text-green-700">5 minutes</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center text-gray-600">
                        <div className="text-sm">Immediate</div>
                        <div className="text-xs text-gray-500">(but manual)</div>
                      </td>
                      <td className="px-6 py-4 text-center text-gray-600">
                        <div className="text-sm">2-3 hours</div>
                        <div className="text-xs text-gray-500">(with setup)</div>
                      </td>
                      <td className="px-6 py-4 text-center text-gray-600">
                        <div className="text-sm">1-2 weeks</div>
                        <div className="text-xs text-gray-500">(training needed)</div>
                      </td>
                      <td className="px-6 py-4 text-center text-gray-600">
                        <div className="text-sm">4-12 weeks</div>
                        <div className="text-xs text-gray-500">(consultant required)</div>
                      </td>
                    </tr>

                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 font-medium text-gray-900">Technical Knowledge Required</td>
                      <td className="px-6 py-4 text-center bg-green-50">
                        <div className="flex flex-col items-center gap-1">
                          <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="font-bold text-green-700">None</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center text-gray-600">
                        <div className="text-sm">Low-Medium</div>
                      </td>
                      <td className="px-6 py-4 text-center text-gray-600">
                        <div className="text-sm">Low</div>
                      </td>
                      <td className="px-6 py-4 text-center text-gray-600">
                        <div className="text-sm">High</div>
                      </td>
                      <td className="px-6 py-4 text-center text-gray-600">
                        <div className="text-sm">Very High</div>
                      </td>
                    </tr>

                    {/* Cost */}
                    <tr className="bg-blue-50/50">
                      <td colSpan={6} className="px-6 py-3 font-bold text-gray-900 text-sm uppercase tracking-wide">
                        Cost & Value
                      </td>
                    </tr>

                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 font-medium text-gray-900">Monthly Cost</td>
                      <td className="px-6 py-4 text-center bg-green-50">
                        <div className="flex flex-col items-center gap-1">
                          <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="font-bold text-green-700">$49-$149</span>
                          <span className="text-xs text-gray-500">per month</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center text-gray-600">
                        <div className="text-sm font-semibold">Free</div>
                        <div className="text-xs text-gray-500">(+ labor cost)</div>
                      </td>
                      <td className="px-6 py-4 text-center text-gray-600">
                        <div className="text-sm">$30-$150</div>
                        <div className="text-xs text-gray-500">accounting only</div>
                      </td>
                      <td className="px-6 py-4 text-center text-gray-600">
                        <div className="text-sm">$70-$500+</div>
                        <div className="text-xs text-gray-500">per user</div>
                      </td>
                      <td className="px-6 py-4 text-center text-gray-600">
                        <div className="text-sm font-semibold text-red-600">$5K-$50K+</div>
                        <div className="text-xs text-gray-500">+ implementation</div>
                      </td>
                    </tr>

                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 font-medium text-gray-900">Time Saved Per Month</td>
                      <td className="px-6 py-4 text-center bg-green-50">
                        <div className="flex flex-col items-center gap-1">
                          <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="font-bold text-green-700">20+ hours</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center text-gray-600">
                        <div className="text-sm">0 hours</div>
                        <div className="text-xs text-gray-500">(manual work)</div>
                      </td>
                      <td className="px-6 py-4 text-center text-gray-600">5-10 hours</td>
                      <td className="px-6 py-4 text-center text-gray-600">10-15 hours</td>
                      <td className="px-6 py-4 text-center text-gray-600">15-20 hours</td>
                    </tr>

                    {/* AI & Intelligence Features */}
                    <tr className="bg-blue-50/50">
                      <td colSpan={6} className="px-6 py-3 font-bold text-gray-900 text-sm uppercase tracking-wide">
                        AI & Intelligence
                      </td>
                    </tr>

                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 font-medium text-gray-900">AI-Powered Insights</td>
                      <td className="px-6 py-4 text-center bg-green-50">
                        <div className="flex flex-col items-center gap-1">
                          <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="font-bold text-green-700">Advanced</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <svg className="w-6 h-6 text-red-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <svg className="w-6 h-6 text-red-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="text-yellow-600 font-semibold">Limited</div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <svg className="w-6 h-6 text-green-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </td>
                    </tr>

                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 font-medium text-gray-900">Predictive Analytics</td>
                      <td className="px-6 py-4 text-center bg-green-50">
                        <div className="flex flex-col items-center gap-1">
                          <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="font-bold text-green-700">Yes</span>
                          <span className="text-xs text-gray-500">12-month forecasts</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <svg className="w-6 h-6 text-red-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="text-yellow-600 font-semibold">Basic</div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <svg className="w-6 h-6 text-green-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <svg className="w-6 h-6 text-green-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </td>
                    </tr>

                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 font-medium text-gray-900">Automated Bank Reconciliation</td>
                      <td className="px-6 py-4 text-center bg-green-50">
                        <div className="flex flex-col items-center gap-1">
                          <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="font-bold text-green-700">Automatic</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="text-yellow-600 font-semibold">Manual</div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <svg className="w-6 h-6 text-green-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <svg className="w-6 h-6 text-red-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <svg className="w-6 h-6 text-green-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </td>
                    </tr>

                    {/* Data & Automation */}
                    <tr className="bg-blue-50/50">
                      <td colSpan={6} className="px-6 py-3 font-bold text-gray-900 text-sm uppercase tracking-wide">
                        Automation & Workflows
                      </td>
                    </tr>

                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 font-medium text-gray-900">No-Code Workflow Builder</td>
                      <td className="px-6 py-4 text-center bg-green-50">
                        <div className="flex flex-col items-center gap-1">
                          <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="font-bold text-green-700">Yes</span>
                          <span className="text-xs text-gray-500">Visual builder</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <svg className="w-6 h-6 text-red-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="text-yellow-600 font-semibold">Limited</div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="text-yellow-600 font-semibold">Complex</div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <svg className="w-6 h-6 text-green-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </td>
                    </tr>

                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 font-medium text-gray-900">Scenario Simulation</td>
                      <td className="px-6 py-4 text-center bg-green-50">
                        <div className="flex flex-col items-center gap-1">
                          <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="font-bold text-green-700">Advanced</span>
                          <span className="text-xs text-gray-500">What-if analysis</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="text-yellow-600 font-semibold">Manual</div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <svg className="w-6 h-6 text-red-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <svg className="w-6 h-6 text-green-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <svg className="w-6 h-6 text-green-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </td>
                    </tr>

                    {/* Final Verdict Row */}
                    <tr className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-bold">
                      <td className="px-6 py-5 text-lg">Best For</td>
                      <td className="px-6 py-5 text-center bg-white/10">
                        <div className="text-lg">SMBs</div>
                        <div className="text-sm font-normal">($1M-$50M revenue)</div>
                      </td>
                      <td className="px-6 py-5 text-center">
                        <div className="text-sm font-normal">Very Small</div>
                        <div className="text-xs font-normal">(&lt; 5 people)</div>
                      </td>
                      <td className="px-6 py-5 text-center">
                        <div className="text-sm font-normal">Accounting</div>
                        <div className="text-xs font-normal">(not analytics)</div>
                      </td>
                      <td className="px-6 py-5 text-center">
                        <div className="text-sm font-normal">Tech Teams</div>
                        <div className="text-xs font-normal">(w/ analysts)</div>
                      </td>
                      <td className="px-6 py-5 text-center">
                        <div className="text-sm font-normal">Enterprise</div>
                        <div className="text-xs font-normal">($100M+ revenue)</div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Key Differentiators - Visual Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 border-2 border-blue-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Lightning Fast Setup
                </h3>
                <p className="text-gray-600 mb-4">
                  While competitors take weeks to implement, InsightBridge is ready in 5 minutes. No IT team, no consultants, no hassle.
                </p>
                <div className="text-blue-600 font-bold text-lg">
                  5 minutes vs 4-12 weeks
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8 border-2 border-green-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Unbeatable Value
                </h3>
                <p className="text-gray-600 mb-4">
                  Enterprise AI capabilities at SMB pricing. Get 98% of the features for 1% of the cost of traditional solutions.
                </p>
                <div className="text-green-600 font-bold text-lg">
                  $149/mo vs $10,000+/mo
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8 border-2 border-purple-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  True AI Intelligence
                </h3>
                <p className="text-gray-600 mb-4">
                  Unlike basic tools, InsightBridge uses advanced AI to predict, explain, and recommend—in plain English you can actually understand.
                </p>
                <div className="text-purple-600 font-bold text-lg">
                  Real AI vs Basic Automation
                </div>
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="mt-16 text-center">
              <div className="inline-flex flex-col items-center bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-3">
                  See the difference yourself
                </h3>
                <p className="text-blue-100 mb-6 max-w-2xl">
                  Join forward-thinking businesses who chose InsightBridge over expensive enterprise tools
                </p>
                <a
                  href="#early-access"
                  className="px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
                >
                  Start Free 14-Day Trial
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 font-semibold text-sm uppercase tracking-wider rounded-lg mb-4">
                Features
              </span>
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Everything You Need in One Platform
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Powerful AI-driven features that transform how you understand and act on your financial data.
              </p>
            </div>

            {/* Feature Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {[
                { id: 'analysis', label: 'Smart Analysis', icon: '🔍' },
                { id: 'predictions', label: 'Predictions', icon: '📈' },
                { id: 'reconciliation', label: 'Auto Reconciliation', icon: '✓' },
                { id: 'dashboards', label: 'Dashboards', icon: '📊' },
                { id: 'workflows', label: 'No-Code Workflows', icon: '⚡' },
                { id: 'simulation', label: 'Scenario Simulation', icon: '🎯' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg scale-105'
                      : 'bg-white text-gray-700 border border-gray-200 hover:border-blue-600 hover:scale-105'
                  }`}
                >
                  <span className="mr-2">{tab.icon}</span>
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Feature Content */}
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-200">
              {activeTab === 'analysis' && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">Smart Document Analysis</h3>
                    <p className="text-lg text-gray-600 mb-6">
                      Upload PDFs, Excel sheets, or CSVs and get instant executive summaries, KPIs, and 
                      tailored financial advice. Our AI understands context and delivers actionable insights.
                    </p>
                    <ul className="space-y-4">
                      {[
                        'Automatic data extraction from any format',
                        'Executive summaries in plain English',
                        'Custom KPI tracking and benchmarking',
                        'Contextual financial recommendations',
                        'Anomaly detection and alerts',
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl p-8 h-80 flex items-center justify-center">
                    <div className="text-center text-gray-500">AI Analysis Visualization</div>
                  </div>
                </div>
              )}

              {activeTab === 'predictions' && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">Predictive Insights</h3>
                    <p className="text-lg text-gray-600 mb-6">
                      Get monthly cash flow forecasts and AI-backed strategy recommendations that help you 
                      plan ahead with confidence. Know what's coming before it happens.
                    </p>
                    <ul className="space-y-4">
                      {[
                        '12-month cash flow predictions with 98% accuracy',
                        'Revenue trend analysis and forecasting',
                        'Risk identification and mitigation strategies',
                        'Seasonal pattern recognition',
                        'Confidence intervals for all predictions',
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl p-8 h-80 flex items-center justify-center">
                    <div className="text-center text-gray-500">Forecast Charts</div>
                  </div>
                </div>
              )}

              {activeTab === 'reconciliation' && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">Automated Bank Reconciliation</h3>
                    <p className="text-lg text-gray-600 mb-6">
                      Connect your bank accounts and let AI automatically match transactions, detect discrepancies, 
                      and flag anomalies. Save hours every month on manual reconciliation.
                    </p>
                    <ul className="space-y-4">
                      {[
                        'Automatic transaction matching with 99.5% accuracy',
                        'Real-time discrepancy alerts',
                        'Smart categorization and rules engine',
                        'Audit trail and compliance reporting',
                        'Multi-bank account support',
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl p-8 h-80 flex items-center justify-center">
                    <div className="text-center text-gray-500">Reconciliation Dashboard</div>
                  </div>
                </div>
              )}

              {activeTab === 'dashboards' && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">Real-Time KPI Dashboards</h3>
                    <p className="text-lg text-gray-600 mb-6">
                      Track key performance metrics in real-time with beautiful, customizable dashboards 
                      that tell your financial story at a glance. Mobile-optimized and shareable.
                    </p>
                    <ul className="space-y-4">
                      {[
                        'Real-time KPI tracking and visualization',
                        'Fully customizable dashboard layouts',
                        'Historical trend analysis with drill-down',
                        'Export to PDF, Excel, or PowerPoint',
                        'Shareable links for stakeholders',
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-gradient-to-br from-orange-100 to-amber-100 rounded-xl p-8 h-80 flex items-center justify-center">
                    <div className="text-center text-gray-500">Dashboard Preview</div>
                  </div>
                </div>
              )}

              {activeTab === 'workflows' && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">No-Code Automation Workflows</h3>
                    <p className="text-lg text-gray-600 mb-6">
                      Build powerful automations without writing code. Set up intelligent rules like "alert me if 
                      revenue drops 10%" or "pause ad spend if cash flow is negative." Business logic made simple.
                    </p>
                    <ul className="space-y-4">
                      {[
                        'Visual drag-and-drop workflow builder',
                        'Pre-built templates for common scenarios',
                        'Multi-channel integrations (email, Slack, etc.)',
                        'Real-time trigger and action rules',
                        'Advanced conditional logic without coding',
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-gradient-to-br from-violet-100 to-purple-100 rounded-xl p-8 h-80 flex items-center justify-center">
                    <div className="text-center text-gray-500">Workflow Builder Interface</div>
                  </div>
                </div>
              )}

              {activeTab === 'simulation' && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">Scenario Simulation & What-If Analysis</h3>
                    <p className="text-lg text-gray-600 mb-6">
                      Model different business scenarios and see their financial impact before making decisions. 
                      Test pricing changes, hiring plans, or expansion strategies with AI-powered projections.
                    </p>
                    <ul className="space-y-4">
                      {[
                        'Interactive scenario modeling tool',
                        'What-if analysis for key decisions',
                        'Compare unlimited scenarios side-by-side',
                        'Sensitivity analysis for variables',
                        'Export scenarios for presentations',
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-gradient-to-br from-cyan-100 to-blue-100 rounded-xl p-8 h-80 flex items-center justify-center">
                    <div className="text-center text-gray-500">Simulation Interface</div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 font-semibold text-sm uppercase tracking-wider rounded-lg mb-4">
                How It Works
              </span>
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                From Upload to Insight in Minutes
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our AI does the heavy lifting so you can focus on making strategic decisions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  step: '01',
                  title: 'Upload Your Data',
                  description: 'Drag and drop your financial documents—PDFs, Excel, CSV, or connect your accounting software directly. Takes 30 seconds.',
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                  ),
                },
                {
                  step: '02',
                  title: 'AI Analysis',
                  description: 'Our AI engine processes your data in seconds, extracting insights, identifying patterns, generating forecasts, and reconciling transactions automatically.',
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  ),
                },
                {
                  step: '03',
                  title: 'Get Actionable Insights',
                  description: 'Receive clear recommendations, forecasts, alerts, and automated workflows that help you make confident business decisions immediately.',
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  ),
                },
              ].map((item, idx) => (
                <div key={idx} className="relative">
                  <div className="bg-white rounded-2xl border-2 border-gray-200 p-8 hover:border-blue-600 hover:shadow-xl transition-all duration-300">
                    <div className="text-6xl font-bold text-blue-100 mb-4">{item.step}</div>
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center text-white mb-6">
                      {item.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                  {idx < 2 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Video Demo Section - EMBEDDED */}
        <section id="demo-video" className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
                See InsightBridge in Action
              </h2>
              <p className="text-xl text-gray-300">
                Watch how InsightBridge transforms complex financial data into clear, actionable insights.
              </p>
            </div>
            
            {/* Embedded Loom Video */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gray-800">
              <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
                <iframe
                  src="https://www.loom.com/embed/814dbf37da7f467cb10eee19cf868969?sid=c3e3d9e5-4f3e-4f6e-b7f5-8e5c7b0f5e3d"
                  frameBorder="0"
                  allowFullScreen
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                  }}
                />
              </div>
            </div>

            {/* CTA below video */}
            <div className="text-center mt-8">
              <p className="text-gray-400 mb-4">Ready to transform your financial intelligence?</p>
              <a
                href="#early-access"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                Get Started Free
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 font-semibold text-sm uppercase tracking-wider rounded-lg mb-4">
                Pricing
              </span>
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose the plan that fits your business. All plans include a 14-day free trial.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Starter Plan */}
              <div className="bg-white rounded-2xl border-2 border-gray-200 p-8 hover:shadow-xl transition-all duration-300">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Starter</h3>
                <p className="text-gray-600 mb-6">Perfect for small businesses</p>
                <div className="mb-6">
                  <span className="text-5xl font-bold text-gray-900">$49</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {[
                    'Up to 100 documents/month',
                    'Basic AI analysis',
                    'Standard dashboards',
                    'Email support',
                    '1 user account',
                    'Bank reconciliation',
                  ].map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#early-access"
                  className="block w-full px-6 py-3 bg-gray-100 text-gray-900 font-semibold rounded-lg text-center hover:bg-gray-200 transition-colors"
                >
                  Start Free Trial
                </a>
              </div>

              {/* Professional Plan - Featured */}
              <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl p-8 text-white transform scale-105 shadow-2xl">
                <div className="inline-block px-3 py-1 bg-white/20 rounded-full text-sm font-semibold mb-4">
                  Most Popular
                </div>
                <h3 className="text-2xl font-bold mb-2">Professional</h3>
                <p className="text-blue-100 mb-6">For growing businesses</p>
                <div className="mb-6">
                  <span className="text-5xl font-bold">$149</span>
                  <span className="text-blue-100">/month</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {[
                    'Up to 500 documents/month',
                    'Advanced AI analysis',
                    'Custom dashboards',
                    'Priority support',
                    'Up to 5 user accounts',
                    'No-code workflows',
                    'Scenario simulation',
                    'API access',
                  ].map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-white flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#early-access"
                  className="block w-full px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg text-center hover:bg-gray-100 transition-colors"
                >
                  Start Free Trial
                </a>
              </div>

              {/* Enterprise Plan */}
              <div className="bg-white rounded-2xl border-2 border-gray-200 p-8 hover:shadow-xl transition-all duration-300">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Enterprise</h3>
                <p className="text-gray-600 mb-6">For large organizations</p>
                <div className="mb-6">
                  <span className="text-5xl font-bold text-gray-900">Custom</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {[
                    'Unlimited documents',
                    'Enterprise AI features',
                    'White-label option',
                    'Dedicated support',
                    'Unlimited users',
                    'Custom integrations',
                    'Advanced workflows',
                    'SLA guarantee',
                    'On-premise deployment',
                  ].map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="mailto:info@credenceconsulting.io?subject=InsightBridge%20Enterprise%20Inquiry"
                  className="block w-full px-6 py-3 bg-gray-100 text-gray-900 font-semibold rounded-lg text-center hover:bg-gray-200 transition-colors"
                >
                  Contact Sales
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Loved by Business Owners
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  quote: "InsightBridge transformed how we understand our financials. What used to take our team days now takes minutes.",
                  author: "Sarah Chen",
                  role: "CEO, TechStart Inc",
                  rating: 5,
                },
                {
                  quote: "The predictive insights have been game-changing for our cash flow planning. We've avoided two potential crises already.",
                  author: "Michael Rodriguez",
                  role: "CFO, GrowthCo",
                  rating: 5,
                },
                {
                  quote: "Finally, a financial tool that doesn't require a PhD to use. The AI does all the heavy lifting.",
                  author: "Emily Johnson",
                  role: "Founder, Creative Studio",
                  rating: 5,
                },
              ].map((testimonial, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed italic">"{testimonial.quote}"</p>
                  <div>
                    <div className="font-bold text-gray-900">{testimonial.author}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-6">
              {[
                {
                  q: "How secure is my financial data?",
                  a: "We use bank-level encryption (AES-256) and are SOC 2 Type II certified. Your data is encrypted at rest and in transit, and we never share your information with third parties.",
                },
                {
                  q: "What file formats do you support?",
                  a: "We support PDF, Excel (XLS/XLSX), CSV, and can integrate directly with QuickBooks, Xero, and other popular accounting platforms via API.",
                },
                {
                  q: "Do I need technical knowledge to use InsightBridge?",
                  a: "Not at all! InsightBridge is designed for business owners, not data scientists. If you can upload a file, you can use InsightBridge. Our no-code workflow builder means zero programming required.",
                },
                {
                  q: "How does automated bank reconciliation work?",
                  a: "Connect your bank accounts securely via API, and our AI automatically matches transactions between your bank statements and accounting records. It flags discrepancies and learns from your corrections over time.",
                },
                {
                  q: "Can I cancel anytime?",
                  a: "Yes, you can cancel your subscription at any time. No long-term contracts or cancellation fees. Your data remains accessible for 90 days after cancellation.",
                },
                {
                  q: "How accurate are the AI predictions?",
                  a: "Our AI models achieve 98% accuracy on average for cash flow forecasts and financial predictions. The more data you provide, the more accurate predictions become over time.",
                },
              ].map((faq, idx) => (
                <details key={idx} className="bg-gray-50 rounded-xl p-6 group hover:bg-gray-100 transition-colors">
                  <summary className="font-bold text-gray-900 cursor-pointer flex justify-between items-center">
                    {faq.q}
                    <svg className="w-5 h-5 text-gray-600 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <p className="mt-4 text-gray-600 leading-relaxed">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section id="early-access" className="py-20 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Financial Intelligence?
            </h2>
            <p className="text-xl text-blue-100 mb-12">
              Join forward-thinking businesses already using InsightBridge to make smarter, data-driven decisions.
            </p>

            <form onSubmit={handleEarlyAccess} className="max-w-md mx-auto mb-8">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-6 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button
                  type="submit"
                  className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors whitespace-nowrap"
                >
                  Get Early Access
                </button>
              </div>
            </form>

            {submitStatus === 'success' && (
              <div className="bg-green-500 text-white px-6 py-3 rounded-lg inline-block mb-8">
                ✓ Thanks! We'll be in touch soon.
              </div>
            )}

            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>14-day free trial</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-gray-300 py-12">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="text-center md:text-left">
                <p className="text-sm">
                  A product by{' '}
                  <Link href="/" className="font-semibold text-blue-400 hover:text-blue-300">
                    Credence Consulting
                  </Link>
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  &copy; {new Date().getFullYear()} All rights reserved.
                </p>
              </div>
              <div className="flex gap-6 text-sm">
                <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a>
                <a href="mailto:info@credenceconsulting.io" className="hover:text-blue-400 transition-colors">Contact</a>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
};

export default InsightBridgePage;