'use client';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-5">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-blue-500 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-md">
                C
              </div>
              <span className="text-xl font-bold text-white">
                Credence Consulting
              </span>
            </Link>
            <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
              Helping small and mid-sized businesses build data infrastructure that drives decisions—without enterprise complexity or massive budgets.
            </p>
            <div className="flex gap-4">
              <a
                href="mailto:info@credenceconsulting.io"
                className="text-gray-400 hover:text-teal-400 transition-colors"
                aria-label="Email"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </a>
              <a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-teal-400 transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold mb-4 text-lg">Services</h4>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-gray-400 hover:text-teal-400 transition-colors">
                  Data Engineering
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-teal-400 transition-colors">
                  Business Consulting
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-teal-400 transition-colors">
                  Bookkeeping
                </a>
              </li>
              <li>
                <Link href="/insightbridge" className="text-gray-400 hover:text-teal-400 transition-colors">
                  InsightBridge
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold mb-4 text-lg">Company</h4>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-gray-400 hover:text-teal-400 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#certifications" className="text-gray-400 hover:text-teal-400 transition-colors">
                  Certifications
                </a>
              </li>
              <li>
                <Link href="/projects" className="text-gray-400 hover:text-teal-400 transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-teal-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Connect Column */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-bold mb-4 text-lg">Get Started</h4>
            <ul className="space-y-3 mb-6">
              <li>
                <a 
                  href="mailto:info@credenceconsulting.io" 
                  className="text-gray-400 hover:text-teal-400 transition-colors"
                >
                  info@credenceconsulting.io
                </a>
              </li>
              <li className="text-gray-400 text-sm">
                Response within 24 hours
              </li>
            </ul>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold rounded-lg shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 text-sm"
            >
              Book Free Consultation
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Credence Consulting. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-500 hover:text-teal-400 transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-teal-400 transition-colors text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}