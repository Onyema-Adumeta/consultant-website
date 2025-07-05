import React from 'react';
import Image from 'next/image';

export const metadata = {
  title: 'InsightBridge | AI Financial Platform by Credence Consulting',
  description:
    'InsightBridge turns financial data into smart insights with AI. Upload docs, get KPI dashboards, and predictive strategy—all without a data team.',
};

const InsightBridgePage = () => {
  return (
    <main className="bg-white text-gray-800 py-16 px-6 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-6">About InsightBridge</h1>
      <p className="text-lg text-center mb-12">
        InsightBridge is an AI-powered financial intelligence platform designed for small and mid-sized businesses.
        Our mission is to transform complex financial data into clear, actionable insights—automatically.
      </p>

      <div className="text-center mb-8">
        <Image
          src="/images/insightbridge.jpg"
          alt="InsightBridge Screenshot"
          width={800}
          height={400}
          className="rounded-lg shadow-md mx-auto"
        />
      </div>

      <div className="text-center mb-12">
        <a
          href="https://video.pictory.ai/1751711449330/20250705124935071F3oWPT34bkJy7mF"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded shadow hover:bg-blue-700 transition"
        >
          ▶️ Watch InsightBridge Demo Video
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left text-base mb-12">
        <div>
          <h2 className="text-xl font-semibold mb-3">Smart Document Analysis</h2>
          <p>Upload PDFs, Excel sheets, or CSVs and get executive summaries, KPIs, and tailored financial advice.</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-3">Predictive Insights</h2>
          <p>Get monthly cash flow forecasts and AI-backed strategy tips.</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-3">Ledger Reconciliation</h2>
          <p>Detect anomalies and gain visibility into your financial records.</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-3">KPI Dashboards</h2>
          <p>Track key performance metrics in real-time with visual trends and summaries.</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-3">Microlearning Hub</h2>
          <p>Understand finance terms and strategies with built-in explainers tailored to your uploads.</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-3">No-Code Automations</h2>
          <p>Set up rules like “pause ad spend if revenue drops” without writing a single line of code.</p>
        </div>
      </div>

      <p className="text-lg text-center max-w-3xl mx-auto mb-12">
        InsightBridge bridges the gap between raw data and business action—helping you make smarter decisions, faster.
      </p>

      <div className="text-center mt-12">
        <a
          href="mailto:info@credenceconsulting.io?subject=InsightBridge%20Early%20Access"
          className="inline-block bg-green-600 text-white px-6 py-3 rounded shadow hover:bg-green-700 transition"
        >
          📩 Request Early Access
        </a>
      </div>

      <p className="text-center text-sm text-gray-500 mt-16">
        A product by <span className="font-semibold text-blue-600">Credence Consulting</span>
      </p>
    </main>
  );
};

export default InsightBridgePage;
