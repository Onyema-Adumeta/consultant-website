'use client';
import React, { useState, useEffect } from 'react';

export default function LeadMagnetPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    // Show popup after 30 seconds or on exit intent
    const timer = setTimeout(() => {
      const hasSeenPopup = localStorage.getItem('hasSeenLeadMagnet');
      if (!hasSeenPopup) {
        setIsVisible(true);
      }
    }, 30000); // 30 seconds

    // Exit intent detection
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        const hasSeenPopup = localStorage.getItem('hasSeenLeadMagnet');
        if (!hasSeenPopup) {
          setIsVisible(true);
        }
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission (integrate with your email service)
    console.log('Email submitted:', email);
    setIsSubmitted(true);
    localStorage.setItem('hasSeenLeadMagnet', 'true');
    
    setTimeout(() => {
      setIsVisible(false);
    }, 3000);
  };

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem('hasSeenLeadMagnet', 'true');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative animate-in zoom-in">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Close"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {!isSubmitted ? (
          <>
            {/* Icon */}
            <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
              </svg>
            </div>

            {/* Headline */}
            <h2 className="font-playfair text-3xl font-bold text-gray-900 text-center mb-4">
              Free Data Strategy Consultation
            </h2>
            
            {/* Subheadline */}
            <p className="text-gray-600 text-center mb-6">
              Get a complimentary 30-minute consultation to discuss your data challenges and discover opportunities for optimization.
            </p>

            {/* Benefits List */}
            <ul className="space-y-3 mb-6">
              {[
                'Identify quick wins in your data infrastructure',
                'Get expert recommendations tailored to your business',
                'No obligation, no sales pitch—just value',
                'Worth $500, yours free'
              ].map((benefit, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all outline-none"
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
              >
                Claim Your Free Consultation
              </button>
            </form>

            {/* Trust Badge */}
            <p className="text-center text-sm text-gray-500 mt-4">
              🔒 We respect your privacy. Unsubscribe anytime.
            </p>
          </>
        ) : (
          <div className="text-center py-8">
            {/* Success Icon */}
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-2">You're All Set!</h3>
            <p className="text-gray-600 mb-4">
              Check your inbox for next steps to schedule your free consultation.
            </p>
            <p className="text-sm text-gray-500">
              We'll be in touch within 24 hours.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}