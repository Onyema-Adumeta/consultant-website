'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Only handle anchor links (starting with #)
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
        
        setIsMobileMenuOpen(false);
      }
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-white/90 backdrop-blur-sm shadow-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-blue-500 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-md group-hover:shadow-lg transition-shadow">
              C
            </div>
            <span className="text-lg font-bold text-gray-900 group-hover:text-teal-600 transition-colors">
              Credence Consulting
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#services"
              onClick={(e) => handleAnchorClick(e, '#services')}
              className="text-sm font-medium text-gray-700 hover:text-teal-600 transition-colors relative group"
            >
              Services
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#about"
              onClick={(e) => handleAnchorClick(e, '#about')}
              className="text-sm font-medium text-gray-700 hover:text-teal-600 transition-colors relative group"
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#certifications"
              onClick={(e) => handleAnchorClick(e, '#certifications')}
              className="text-sm font-medium text-gray-700 hover:text-teal-600 transition-colors relative group"
            >
              Certifications
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <Link
              href="/projects"
              className="text-sm font-medium text-gray-700 hover:text-teal-600 transition-colors relative group"
            >
              Projects
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/blog"
              className="text-sm font-medium text-gray-700 hover:text-teal-600 transition-colors relative group"
            >
              Blog
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/insightbridge"
              className="text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
            >
              InsightBridge
            </Link>
            <a
              href="#contact"
              onClick={(e) => handleAnchorClick(e, '#contact')}
              className="px-5 py-2.5 bg-gradient-to-r from-teal-500 to-blue-500 text-white text-sm font-semibold rounded-lg shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 animate-in slide-in-from-top">
            <div className="flex flex-col space-y-4">
              <a
                href="#services"
                onClick={(e) => handleAnchorClick(e, '#services')}
                className="text-base font-medium text-gray-700 hover:text-teal-600 transition-colors py-2"
              >
                Services
              </a>
              <a
                href="#about"
                onClick={(e) => handleAnchorClick(e, '#about')}
                className="text-base font-medium text-gray-700 hover:text-teal-600 transition-colors py-2"
              >
                About
              </a>
              <a
                href="#certifications"
                onClick={(e) => handleAnchorClick(e, '#certifications')}
                className="text-base font-medium text-gray-700 hover:text-teal-600 transition-colors py-2"
              >
                Certifications
              </a>
              <Link
                href="/projects"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-base font-medium text-gray-700 hover:text-teal-600 transition-colors py-2"
              >
                Projects
              </Link>
              <Link
                href="/blog"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-base font-medium text-gray-700 hover:text-teal-600 transition-colors py-2"
              >
                Blog
              </Link>
              <Link
                href="/insightbridge"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-base font-semibold text-blue-600 hover:text-blue-700 transition-colors py-2"
              >
                InsightBridge
              </Link>
              <a
                href="#contact"
                onClick={(e) => handleAnchorClick(e, '#contact')}
                className="px-5 py-3 bg-gradient-to-r from-teal-500 to-blue-500 text-white text-base font-semibold rounded-lg shadow-md text-center"
              >
                Get Started
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}