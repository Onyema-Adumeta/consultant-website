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
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-md">
                C
              </div>
              <span className="text-xl font-bold text-white">
                Credence Consulting
              </span>
            </Link>
            <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
              Transforming businesses through data engineering, strategic consulting, 
              and financial excellence.
            </p>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold mb-4 text-lg">Services</h4>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Data Engineering
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Business Consulting
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Bookkeeping
                </a>
              </li>
              <li>
                <Link href="/insightbridge" className="text-gray-400 hover:text-blue-400 transition-colors">
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
                <a href="#about" className="text-gray-400 hover:text-blue-400 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#certifications" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Certifications
                </a>
              </li>
              <li>
                <Link href="/projects" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Connect Column */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-bold mb-4 text-lg">Connect</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="mailto:info@credenceconsulting.io" 
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Email Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Get Started
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Credence Consulting. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-500 hover:text-blue-400 transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-blue-400 transition-colors text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}