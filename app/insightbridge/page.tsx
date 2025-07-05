'use client';
import Link from 'next/link';

export default function InsightBridgePage() {
  return (
    <main className="bg-white py-20 px-6 text-gray-800 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-center">InsightBridge</h1>
      <p className="text-lg mb-6 text-center italic text-gray-600">
        A product by Credence Consulting
      </p>

      <p className="text-lg mb-6">
        <strong>InsightBridge</strong> is a smart financial data platform developed by Credence Consulting to empower small and medium-sized businesses.
        It helps organizations extract insights from their financial documents, reconcile transactions, and forecast trends with ease.
      </p>

      <p className="text-lg mb-6">
        Powered by <span className="font-semibold">Azure</span>, <span className="font-semibold">OpenAI</span>, <span className="font-semibold">Power BI</span>, and <span className="font-semibold">FastAPI</span>, InsightBridge transforms Excel, CSV, and PDF financial data into actionable business intelligence.
      </p>

      <p className="text-lg mb-10">
        The platform includes document summarization, anomaly detection, AI-driven advice, KPI dashboards, and predictive insights tailored for small businesses.
      </p>

      <div className="aspect-w-16 aspect-h-9 mb-10">
        <iframe
          src="https://video.pictory.ai/1751711449330/20250705124935071F3oWPT34bkJy7mF"
          title="InsightBridge Demo Video"
          allow="autoplay; fullscreen"
          className="w-full h-full rounded-lg border"
        ></iframe>
      </div>

      <div className="text-center">
        <Link
          href="/#contact"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
        >
          Get in Touch to Learn More
        </Link>
      </div>
    </main>
  );
}