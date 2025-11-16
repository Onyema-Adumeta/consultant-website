'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Detailed case studies (without client names)
const featuredProjects = [
  {
    id: 1,
    title: "Private Wireless Network Implementation",
    industry: "Telecommunications",
    duration: "8 months",
    team: "6 specialists",
    image: "/projects/wireless-network.jpg",
    tags: ["5G", "Network Engineering", "Telecom", "Infrastructure"],
    challenge: "A telecommunications provider needed a robust private 5G wireless network to support expanding operations across multiple facilities while ensuring security, reliability, and scalability.",
    solution: "Led a cross-functional team to design and implement comprehensive private wireless network infrastructure, including network architecture design, equipment procurement, installation, testing, and integration with existing systems.",
    results: [
      { metric: "99.9%", label: "Network Uptime" },
      { metric: "40%", label: "Cost Reduction vs Public Network" },
      { metric: "3x", label: "Faster Data Transfer" },
      { metric: "100%", label: "Security Compliance" },
    ],
    technologies: ["5G Infrastructure", "Network Management Systems", "Security Protocols", "Azure Cloud"],
  },
  {
    id: 2,
    title: "Enterprise Data Warehouse Migration",
    industry: "Financial Services",
    duration: "6 months",
    team: "4 data engineers",
    image: "/projects/datawarehouse.jpg",
    tags: ["Data Engineering", "Microsoft Fabric", "Azure", "ETL"],
    challenge: "Legacy on-premises data warehouse was slow, expensive to maintain, and couldn't scale with growing business needs. Data silos prevented comprehensive analytics.",
    solution: "Designed and executed migration to Microsoft Fabric, consolidating multiple data sources into a unified lakehouse architecture with real-time analytics capabilities.",
    results: [
      { metric: "10x", label: "Query Performance Improvement" },
      { metric: "60%", label: "Infrastructure Cost Savings" },
      { metric: "100%", label: "Data Accuracy" },
      { metric: "2 hours", label: "Reduced Reporting Time" },
    ],
    technologies: ["Microsoft Fabric", "Azure Data Lake", "Power BI", "Python", "SQL"],
  },
  {
    id: 3,
    title: "Business Process Optimization & ERP Integration",
    industry: "Manufacturing",
    duration: "4 months",
    team: "3 consultants",
    image: "/projects/erp-integration.jpg",
    tags: ["Business Analysis", "Process Optimization", "ERP", "Change Management"],
    challenge: "Inefficient manual processes causing delays, errors, and inability to scale operations. Disconnected systems led to data inconsistencies and poor decision-making.",
    solution: "Conducted comprehensive business analysis to map current processes, identify bottlenecks, and design optimized workflows. Led ERP system integration to automate key operations.",
    results: [
      { metric: "50%", label: "Process Efficiency Gain" },
      { metric: "75%", label: "Reduction in Manual Errors" },
      { metric: "35%", label: "Cost Savings" },
      { metric: "4 weeks", label: "Faster Order Processing" },
    ],
    technologies: ["SAP", "Process Mapping Tools", "Workflow Automation", "Power Automate"],
  },
];

// Your existing projects
const allProjects = [
  {
    title: 'InsightBridge – AI-Powered Financial Analysis Platform',
    description:
      'Currently building an AI-powered platform that summarizes financial reports, reconciles ledgers, and delivers personalized business insights from PDF, Excel, and CSV files. Built with Azure, FastAPI, Power BI, and OpenAI.',
    image: '/projects/insightbridge.jpg',
    featured: true,
  },
  {
    title: 'Telecom Data Pipeline – Azure & Databricks',
    description:
      'Designed and deployed a scalable data pipeline using Azure Data Factory and Databricks to process telecom customer usage logs. Enabled real-time analytics and reduced batch processing time by 60%.',
    image: '/projects/telecom.jpg',
  },
  {
    title: 'Loan Origination Analysis – Business Consulting',
    description:
      "Led business analysis and project coordination for a Canadian bank's loan origination platform. Improved onboarding process and reduced application approval time by 35%.",
    image: '/projects/business-consulting.jpg',
  },
  {
    title: 'SME Financial Reconciliation – Bookkeeping',
    description:
      'Automated reconciliation and monthly reporting for a multi-location retail SME using QuickBooks and Excel macros. Achieved over 95% transaction classification accuracy.',
    image: '/projects/bookkeeping.jpg',
  },
  {
    title: 'IoT Sensor Data Injection – Azure Event Hubs',
    description:
      'Implemented a real-time data ingestion solution for environmental sensors using Azure IoT Hub and Event Hubs, streaming into a structured Delta Lake for downstream analytics.',
    image: '/projects/injection.jpg',
  },
  {
    title: 'Data Cleanup Pipeline – PySpark & Azure Data Lake',
    description:
      'Developed a PySpark-based cleaning and validation layer that sanitized millions of records stored in Azure Data Lake, ensuring data readiness for machine learning workflows.',
    image: '/projects/cleanup.jpg',
  },
];

export default function ProjectsPage() {
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
            <Link
              href="/"
              className="px-5 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-semibold rounded-lg shadow-md hover:shadow-lg transition-all"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </nav>

      <main className="bg-white pt-24">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-4xl mx-auto">
              <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 font-semibold text-sm uppercase tracking-wider rounded-lg mb-4">
                Portfolio
              </span>
              <h1 className="font-playfair text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Projects & Case Studies
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Real results for real businesses. Explore how we've helped organizations transform their operations, 
                optimize processes, and achieve measurable outcomes across various industries.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-5xl mx-auto">
              <div className="bg-white rounded-xl p-6 text-center shadow-lg">
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                  100+
                </div>
                <div className="text-gray-600 font-medium">Projects Delivered</div>
              </div>
              <div className="bg-white rounded-xl p-6 text-center shadow-lg">
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                  50+
                </div>
                <div className="text-gray-600 font-medium">Happy Clients</div>
              </div>
              <div className="bg-white rounded-xl p-6 text-center shadow-lg">
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                  $5M+
                </div>
                <div className="text-gray-600 font-medium">Client ROI Generated</div>
              </div>
              <div className="bg-white rounded-xl p-6 text-center shadow-lg">
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                  98%
                </div>
                <div className="text-gray-600 font-medium">Success Rate</div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Case Studies */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-playfair text-4xl font-bold text-gray-900 mb-4">
                Featured Case Studies
              </h2>
              <p className="text-lg text-gray-600">
                In-depth look at our most impactful projects
              </p>
            </div>

            <div className="space-y-20">
              {featuredProjects.map((project, idx) => (
                <div
                  key={project.id}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Project Image */}
                  <div className={`${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                      <div className="aspect-video bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center">
                        <div className="text-center p-8">
                          <div className="text-6xl mb-4">
                            {idx === 0 ? '📡' : idx === 1 ? '💾' : '⚙️'}
                          </div>
                          <div className="text-gray-500 font-medium">{project.title}</div>
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                        <div className="text-white">
                          <div className="font-semibold">{project.industry}</div>
                          <div className="text-sm text-gray-300">{project.duration}</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className={`${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIdx) => (
                        <span
                          key={tagIdx}
                          className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                      {project.title}
                    </h2>

                    <div className="flex gap-6 mb-6 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {project.duration}
                      </div>
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        {project.team}
                      </div>
                    </div>

                    <div className="space-y-4 mb-6">
                      <div>
                        <h3 className="font-bold text-gray-900 mb-2">Challenge</h3>
                        <p className="text-gray-600 leading-relaxed">{project.challenge}</p>
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-2">Solution</h3>
                        <p className="text-gray-600 leading-relaxed">{project.solution}</p>
                      </div>
                    </div>

                    {/* Results Grid */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {project.results.map((result, resultIdx) => (
                        <div
                          key={resultIdx}
                          className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4 text-center border border-blue-100"
                        >
                          <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-1">
                            {result.metric}
                          </div>
                          <div className="text-sm text-gray-600 font-medium">{result.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* Technologies */}
                    <div className="mb-4">
                      <h3 className="font-bold text-gray-900 mb-2 text-sm uppercase tracking-wider">
                        Technologies Used
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIdx) => (
                          <span
                            key={techIdx}
                            className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* All Projects Grid */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-playfair text-4xl font-bold text-gray-900 mb-4">
                All Projects
              </h2>
              <p className="text-lg text-gray-600">
                A comprehensive portfolio of our work across various domains
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {allProjects.map((project, idx) => (
                <div
                  key={idx}
                  className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group ${
                    project.featured ? 'ring-2 ring-blue-600' : ''
                  }`}
                >
                  {project.featured && (
                    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-bold px-4 py-2 text-center">
                      ⭐ FEATURED PROJECT
                    </div>
                  )}
                  
                  <div className="relative h-48 bg-gradient-to-br from-blue-100 to-indigo-100 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Your Success Story?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's discuss how we can help transform your business with proven strategies and cutting-edge solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#contact"
                className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Get Started Today
              </Link>
              <Link
                href="/"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg border-2 border-white/30 hover:bg-white/20 transition-colors"
              >
                View All Services
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Credence Consulting. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}