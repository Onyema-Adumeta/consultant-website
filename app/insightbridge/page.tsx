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
    // Simulate submission
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
                    className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 text-center"
                  >
                    Request Early Access
                  </a>
                  <a
                    href="https://video.pictory.ai/1751711449330/20250705124935071F3oWPT34bkJy7mF"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg border-2 border-gray-200 hover:border-blue-600 hover:text-blue-600 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                    Watch Demo
                  </a>
                </div>

                {/* Trust Indicators */}
                <div className="flex items-center gap-8 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>No credit card required</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Free trial available</span>
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
                <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 border border-gray-100">
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">98%</div>
                  <div className="text-sm text-gray-600">Accuracy Rate</div>
                </div>
                
                <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-xl p-4 border border-gray-100">
                  <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">10x</div>
                  <div className="text-sm text-gray-600">Faster Analysis</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <section className="py-12 bg-gray-50 border-y border-gray-200">
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-center text-sm font-semibold text-gray-500 uppercase tracking-wider mb-8">
              Trusted by forward-thinking businesses
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
              {/* Placeholder for company logos */}
              <div className="text-center text-2xl font-bold text-gray-400">Company 1</div>
              <div className="text-center text-2xl font-bold text-gray-400">Company 2</div>
              <div className="text-center text-2xl font-bold text-gray-400">Company 3</div>
              <div className="text-center text-2xl font-bold text-gray-400">Company 4</div>
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
              <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                <div className="text-red-600 mb-3">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Manual Analysis</h3>
                <p className="text-sm text-gray-600">Hours spent on spreadsheets that could be automated</p>
              </div>
              
              <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                <div className="text-red-600 mb-3">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Delayed Insights</h3>
                <p className="text-sm text-gray-600">By the time you analyze data, opportunities are gone</p>
              </div>
              
              <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                <div className="text-red-600 mb-3">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Expensive Solutions</h3>
                <p className="text-sm text-gray-600">Enterprise tools cost $10K+/month with complex setup</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-gradient-to-b from-gray-50 to-white">
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
                { id: 'reconciliation', label: 'Reconciliation', icon: '✓' },
                { id: 'dashboards', label: 'Dashboards', icon: '📊' },
                { id: 'learning', label: 'Learning', icon: '📚' },
                { id: 'automation', label: 'Automation', icon: '⚡' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 border border-gray-200 hover:border-blue-600'
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
                    <div className="text-center text-gray-500">Feature Visualization</div>
                  </div>
                </div>
              )}

              {activeTab === 'predictions' && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">Predictive Insights</h3>
                    <p className="text-lg text-gray-600 mb-6">
                      Get monthly cash flow forecasts and AI-backed strategy recommendations that help you 
                      plan ahead with confidence.
                    </p>
                    <ul className="space-y-4">
                      {[
                        '12-month cash flow predictions',
                        'Revenue trend analysis and forecasting',
                        'Risk identification and mitigation strategies',
                        'Scenario planning and what-if analysis',
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
                    <div className="text-center text-gray-500">Prediction Charts</div>
                  </div>
                </div>
              )}

              {activeTab === 'reconciliation' && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">Ledger Reconciliation</h3>
                    <p className="text-lg text-gray-600 mb-6">
                      Detect anomalies, identify discrepancies, and gain complete visibility into your 
                      financial records with automated reconciliation.
                    </p>
                    <ul className="space-y-4">
                      {[
                        'Automatic anomaly detection',
                        'Real-time discrepancy alerts',
                        'Transaction categorization',
                        'Audit trail and compliance reporting',
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
                    <div className="text-center text-gray-500">Reconciliation View</div>
                  </div>
                </div>
              )}

              {activeTab === 'dashboards' && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">KPI Dashboards</h3>
                    <p className="text-lg text-gray-600 mb-6">
                      Track key performance metrics in real-time with beautiful, customizable dashboards 
                      that tell your financial story at a glance.
                    </p>
                    <ul className="space-y-4">
                      {[
                        'Real-time KPI tracking and visualization',
                        'Customizable dashboard layouts',
                        'Historical trend analysis',
                        'Export and share reports instantly',
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

              {activeTab === 'learning' && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">Microlearning Hub</h3>
                    <p className="text-lg text-gray-600 mb-6">
                      Understand finance terms and strategies with built-in explainers tailored to your 
                      specific uploads and business context.
                    </p>
                    <ul className="space-y-4">
                      {[
                        'Contextual financial education',
                        'Plain-English explanations of complex terms',
                        'Interactive tutorials and guides',
                        'Best practices for your industry',
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
                    <div className="text-center text-gray-500">Learning Interface</div>
                  </div>
                </div>
              )}

              {activeTab === 'automation' && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">No-Code Automations</h3>
                    <p className="text-lg text-gray-600 mb-6">
                      Set up intelligent rules like "pause ad spend if revenue drops 10%" without writing 
                      a single line of code. Business logic made simple.
                    </p>
                    <ul className="space-y-4">
                      {[
                        'Visual workflow builder',
                        'Pre-built automation templates',
                        'Multi-channel integrations',
                        'Real-time trigger and action rules',
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
                    <div className="text-center text-gray-500">Automation Builder</div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="py-20 bg-white">
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
                  description: 'Drag and drop your financial documents—PDFs, Excel, CSV, or connect your accounting software directly.',
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                  ),
                },
                {
                  step: '02',
                  title: 'AI Analysis',
                  description: 'Our AI engine processes your data, extracting insights, identifying patterns, and generating forecasts.',
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  ),
                },
                {
                  step: '03',
                  title: 'Get Actionable Insights',
                  description: 'Receive clear recommendations, forecasts, and alerts that help you make confident business decisions.',
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

        {/* Video Demo Section */}
        <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
              See InsightBridge in Action
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Watch how InsightBridge transforms complex financial data into clear, actionable insights.
            </p>
            
            <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-8">
              <div className="aspect-video bg-gray-700 flex items-center justify-center">
                <a
                  href="https://video.pictory.ai/1751711449330/20250705124935071F3oWPT34bkJy7mF"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-10 h-10 text-blue-600 ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </a>
              </div>
            </div>
            
            <a
              href="https://video.pictory.ai/1751711449330/20250705124935071F3oWPT34bkJy7mF"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
              Watch Full Demo
            </a>
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
                    'API access',
                    'Automation workflows',
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
                <div key={idx} className="bg-white rounded-2xl p-8 shadow-lg">
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
                  a: "We support PDF, Excel (XLS/XLSX), CSV, and can integrate directly with QuickBooks, Xero, and other popular accounting platforms.",
                },
                {
                  q: "Do I need technical knowledge to use InsightBridge?",
                  a: "Not at all! InsightBridge is designed for business owners, not data scientists. If you can upload a file, you can use InsightBridge.",
                },
                {
                  q: "Can I cancel anytime?",
                  a: "Yes, you can cancel your subscription at any time. No long-term contracts or cancellation fees.",
                },
                {
                  q: "How accurate are the AI predictions?",
                  a: "Our AI models achieve 98% accuracy on average. The more data you feed it, the more accurate it becomes over time.",
                },
              ].map((faq, idx) => (
                <details key={idx} className="bg-gray-50 rounded-xl p-6 group">
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
              Join hundreds of businesses already using InsightBridge to make smarter, data-driven decisions.
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