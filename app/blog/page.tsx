'use client';
import React, { useState } from 'react';
import Link from 'next/link';

// Blog articles data
const articles = [
  {
    id: 'spreadsheets-outgrown',
    title: '5 Signs Your Business Has Outgrown Spreadsheets',
    category: 'Data Engineering',
    date: 'October 2025',
    readTime: '8 min read',
    excerpt: 'Excel is powerful, but there comes a point when it becomes your biggest bottleneck. Learn the warning signs that it\'s time to upgrade to a proper data pipeline.',
    author: 'Onyema Davidson Adumeta',
    slug: 'spreadsheets-outgrown'
  },
  {
    id: 'cost-of-bad-data',
    title: 'The Real Cost of Bad Data: Why Quality Matters More Than Volume',
    category: 'Business Intelligence',
    date: 'February 2025',
    readTime: '9 min read',
    excerpt: 'More data doesn\'t always mean better decisions. Discover how poor data quality is silently costing your business and what you can do about it.',
    author: 'Onyema Davidson Adumeta',
    slug: 'cost-of-bad-data'
  },
  {
    id: 'data-pipelines-demystified',
    title: 'Data Pipelines Demystified: A Non-Technical Guide for Business Leaders',
    category: 'Data Engineering',
    date: 'August 2025',
    readTime: '7 min read',
    excerpt: 'You don\'t need to be a data engineer to understand the value of automated data pipelines. Here\'s what every executive should know.',
    author: 'Onyema Davidson Adumeta',
    slug: 'data-pipelines-demystified'
  },
  {
    id: 'gut-feel-to-data-driven',
    title: 'From Gut Feel to Data-Driven: Making the Cultural Shift',
    category: 'Business Analysis',
    date: 'October 2025',
    readTime: '10 min read',
    excerpt: 'Technology is only half the battle. Learn how to build a data-driven culture that actually uses the insights you\'re generating.',
    author: 'Onyema Davidson Adumeta',
    slug: 'gut-feel-to-data-driven'
  },
  {
    id: 'roi-of-data-infrastructure',
    title: 'ROI of Data Infrastructure: How to Calculate the Value of Your Investment',
    category: 'Business Consulting',
    date: 'July 2025',
    readTime: '11 min read',
    excerpt: 'Building the business case for data infrastructure can be challenging. Here\'s a framework to quantify the benefits and justify the investment.',
    author: 'Onyema Davidson Adumeta',
    slug: 'roi-of-data-infrastructure'
  },
  {
    id: 'bookkeeping-mistakes-smbs',
    title: '7 Bookkeeping Mistakes That Cost Small Businesses Thousands',
    category: 'Accounting & Finance',
    date: 'March 2025',
    readTime: '9 min read',
    excerpt: 'From mixing personal and business expenses to ignoring reconciliations—discover the costly mistakes most SMBs make and how to avoid them.',
    author: 'Onyema Davidson Adumeta',
    slug: 'bookkeeping-mistakes-smbs'
  },
  {
    id: 'financial-metrics-smbs',
    title: 'The 8 Financial Metrics Every Small Business Owner Must Track',
    category: 'Accounting & Finance',
    date: 'April 2025',
    readTime: '10 min read',
    excerpt: 'Revenue isn\'t everything. Learn which financial metrics actually predict success—and how to track them without hiring a CFO.',
    author: 'Onyema Davidson Adumeta',
    slug: 'financial-metrics-smbs'
  },
  {
    id: 'automate-bookkeeping',
    title: 'How to Automate Your Bookkeeping (Without Losing Control)',
    category: 'Accounting & Finance',
    date: 'November 2025',
    readTime: '8 min read',
    excerpt: 'Automation can save 10+ hours per month—but only if you set it up right. A practical guide to tools, workflows, and what to automate first.',
    author: 'Onyema Davidson Adumeta',
    slug: 'automate-bookkeeping'
  }
];

const ARTICLES_PER_PAGE = 6;

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [currentPage, setCurrentPage] = useState<number>(1);

  const categories = [
    'all', 
    'Data Engineering', 
    'Business Intelligence', 
    'Business Analysis', 
    'Business Consulting',
    'Accounting & Finance'
  ];

  // Filter articles by category
  const filteredArticles = selectedCategory === 'all' 
    ? articles 
    : articles.filter(article => article.category === selectedCategory);

  // Calculate pagination
  const totalPages = Math.ceil(filteredArticles.length / ARTICLES_PER_PAGE);
  const startIndex = (currentPage - 1) * ARTICLES_PER_PAGE;
  const endIndex = startIndex + ARTICLES_PER_PAGE;
  const currentArticles = filteredArticles.slice(startIndex, endIndex);

  // Reset to page 1 when category changes
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-2 bg-teal-500/20 border border-teal-400/50 rounded-full text-teal-300 text-sm font-semibold tracking-wide mb-6">
            Credence Insights
          </span>
          <h1 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Practical Wisdom on Data & Finance for Growing Businesses
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Real-world insights on data engineering, business intelligence, financial management, and driving value through analytics—no fluff, just actionable advice.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-6 bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-5 py-2 rounded-full font-semibold text-sm transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-teal-500 to-blue-500 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category === 'all' ? 'All Articles' : category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Article Count */}
          <div className="mb-8 text-center">
            <p className="text-gray-600">
              Showing {startIndex + 1}-{Math.min(endIndex, filteredArticles.length)} of {filteredArticles.length} articles
              {selectedCategory !== 'all' && ` in ${selectedCategory}`}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentArticles.map((article) => (
              <article 
                key={article.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
              >
                {/* Category Badge */}
                <div className="h-2 bg-gradient-to-r from-teal-500 to-blue-500"></div>
                
                <div className="p-6">
                  {/* Meta Info */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-teal-100 text-teal-600 rounded-full text-xs font-semibold uppercase tracking-wide">
                      {article.category}
                    </span>
                    <span className="text-sm text-gray-500">{article.readTime}</span>
                  </div>

                  {/* Title */}
                  <h2 className="font-playfair text-xl font-bold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors leading-tight">
                    {article.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="text-sm text-gray-500">
                      {article.date}
                    </div>
                    <Link
                      href={`/blog/${article.slug}`}
                      className="inline-flex items-center gap-2 text-teal-600 font-semibold text-sm group-hover:gap-3 transition-all"
                    >
                      Read More
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* No Results */}
          {filteredArticles.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">No articles found in this category.</p>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-12 flex justify-center items-center gap-2">
              {/* Previous Button */}
              <button
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                  currentPage === 1
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-white text-gray-700 hover:bg-teal-50 hover:text-teal-600 shadow-sm'
                }`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Page Numbers */}
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                    currentPage === page
                      ? 'bg-gradient-to-r from-teal-500 to-blue-500 text-white shadow-md'
                      : 'bg-white text-gray-700 hover:bg-teal-50 hover:text-teal-600 shadow-sm'
                  }`}
                >
                  {page}
                </button>
              ))}

              {/* Next Button */}
              <button
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                  currentPage === totalPages
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-white text-gray-700 hover:bg-teal-50 hover:text-teal-600 shadow-sm'
                }`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-playfair text-3xl sm:text-4xl font-bold mb-6">
            Want Help With Your Data Infrastructure or Financial Processes?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Stop wrestling with spreadsheets and manual processes. Let's build something that actually works for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
            >
              Book Free Consultation
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/#services"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg border-2 border-white/40 hover:bg-white/20 hover:border-white/60 transition-all duration-300"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}