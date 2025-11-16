'use client';
import React from 'react';
import Link from 'next/link';

const services = [
  {
    title: 'Data Engineering',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
        <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
        <line x1="12" y1="22.08" x2="12" y2="12"></line>
      </svg>
    ),
    description:
      'Modern data pipelines and cloud solutions that enable businesses to unlock actionable insights from raw data, driving innovation and efficiency.',
    features: [
      'Cloud data warehouse architecture',
      'Real-time data pipelines',
      'Data integration & ETL',
      'Business intelligence solutions',
    ],
  },
  {
    title: 'Business Consulting',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8">
        <path d="M3 3v18h18"></path>
        <path d="M18 17V9"></path>
        <path d="M13 17V5"></path>
        <path d="M8 17v-3"></path>
      </svg>
    ),
    description:
      'Strategic business analysis, project leadership, and process optimization tailored to streamline operations and achieve growth objectives.',
    features: [
      'Business process optimization',
      'Requirements analysis',
      'Project leadership & delivery',
      'Digital transformation strategy',
    ],
  },
  {
    title: 'Bookkeeping & Accounting',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
        <line x1="16" y1="2" x2="16" y2="6"></line>
        <line x1="8" y1="2" x2="8" y2="6"></line>
        <line x1="3" y1="10" x2="21" y2="10"></line>
      </svg>
    ),
    description:
      'Reliable monthly financial reporting, reconciliations, and compliance support for small and mid-sized enterprises across Canada.',
    features: [
      'Monthly financial reporting',
      'Account reconciliation',
      'Compliance & audit support',
      'Financial process automation',
    ],
  },
  {
    title: 'InsightBridge Platform',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8">
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M12 16v-4"></path>
        <path d="M12 8h.01"></path>
        <path d="M8 12h8"></path>
        <circle cx="12" cy="12" r="3"></circle>
      </svg>
    ),
    description:
      'A smart financial data platform developed by Credence Consulting to help small businesses gain insights from financial documents with AI-powered analysis.',
    link: '/insightbridge',
    featured: true,
  },
];

interface ServiceCardProps {
  title: string;
  icon: React.ReactNode;
  description: string;
  features?: string[];
  link?: string;
  featured?: boolean;
}

function ServiceCard({ title, icon, description, features, link, featured }: ServiceCardProps) {
  return (
    <div
      className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden h-full flex flex-col ${
        featured ? 'border-2 border-indigo-500 relative' : ''
      }`}
    >
      {featured && (
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-indigo-600"></div>
      )}
      
      <div className="p-8 flex-1 flex flex-col">
        {/* Icon */}
        <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
          {icon}
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 leading-relaxed mb-6 flex-1">
          {description}
        </p>

        {/* Features List */}
        {features && (
          <ul className="space-y-3 mb-6">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm text-gray-700">
                <svg
                  className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Learn More Link - NO NESTED LINKS */}
        <div className="mt-auto">
          {link ? (
            <Link 
              href={link}
              className="inline-flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-3 transition-all"
            >
              Explore Platform
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          ) : (
            <a 
              href="#contact"
              className="inline-flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-3 transition-all"
            >
              Get Started
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 font-semibold text-sm uppercase tracking-wider rounded-lg mb-4">
            What We Do
          </span>
          <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Comprehensive Solutions for Modern Businesses
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From data infrastructure to financial compliance, we deliver end-to-end solutions that drive measurable business outcomes.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              icon={service.icon}
              description={service.description}
              features={service.features}
              link={service.link}
              featured={service.featured}
            />
          ))}
        </div>
      </div>
    </section>
  );
}