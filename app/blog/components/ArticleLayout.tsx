'use client';
import React from 'react';
import Link from 'next/link';
import { Article } from '../utils/articles';

interface ArticleLayoutProps {
  article: Article;
}

export default function ArticleLayout({ article }: ArticleLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <article className="pt-24 pb-16">
        {/* Breadcrumbs */}
        <div className="max-w-4xl mx-auto px-6 mb-8">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-teal-600 transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-teal-600 transition-colors">
              Blog
            </Link>
            <span>/</span>
            <span className="text-gray-900">{article.category}</span>
          </div>
        </div>

        {/* Article Header */}
        <header className="max-w-4xl mx-auto px-6 mb-12">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-teal-100 text-teal-600 rounded-full text-sm font-semibold uppercase tracking-wide">
              {article.category}
            </span>
          </div>
          
          <h1 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            {article.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-gray-600">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span className="font-medium">{article.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>{article.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{article.readTime}</span>
            </div>
          </div>
        </header>

        {/* Article Content */}
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-lg prose-gray max-w-none
            prose-headings:font-playfair prose-headings:font-bold
            prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
            prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
            prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6
            prose-a:text-teal-600 prose-a:no-underline hover:prose-a:text-teal-700
            prose-strong:text-gray-900 prose-strong:font-semibold
            prose-ul:my-6 prose-li:my-2
            prose-code:text-teal-600 prose-code:bg-teal-50 prose-code:px-2 prose-code:py-1 prose-code:rounded
            prose-blockquote:border-l-4 prose-blockquote:border-teal-500 prose-blockquote:pl-6 prose-blockquote:italic
          ">
            {article.content}
          </div>
        </div>

        {/* Article Footer - CTA */}
        <div className="max-w-4xl mx-auto px-6 mt-16">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="font-playfair text-2xl sm:text-3xl font-bold mb-4">
              Ready to Transform Your Data Infrastructure?
            </h3>
            <p className="text-gray-300 text-lg mb-6">
              Let's talk about how we can help your business leverage data for better decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
              >
                Book Free Consultation
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/#services"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg border-2 border-white/40 hover:bg-white/20 hover:border-white/60 transition-all duration-300"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>

        {/* Back to Blog */}
        <div className="max-w-4xl mx-auto px-6 mt-12">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-teal-600 font-semibold hover:text-teal-700 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to All Articles
          </Link>
        </div>
      </article>
    </div>
  );
}