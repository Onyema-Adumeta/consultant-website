'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function Projects() {
  return (
    <>
      {/* Navigation Bar */}
      <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <Link href="/" className="text-lg font-bold text-blue-600">
            Credence Consulting
          </Link>
          <div className="space-x-6 text-sm font-medium text-gray-700">
            <Link href="/" className="hover:text-blue-600 transition">Home</Link>
            <a href="/#services" className="hover:text-blue-600 transition">Services</a>
            <a href="/#about" className="hover:text-blue-600 transition">About</a>
            <a href="/#contact" className="hover:text-blue-600 transition">Contact</a>
          </div>
        </div>
      </nav>

      <main className="bg-white text-gray-800 py-24 px-6">
        <section className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12">Projects & Case Studies</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Data Engineering */}
            <div className="bg-white border border-gray-200 rounded-lg shadow-md p-6 hover:shadow-lg transition">
              <Image
                src="/images/data-engineering.jpg"
                alt="Data Engineering Project"
                width={400}
                height={250}
                className="rounded mb-4 object-cover w-full h-48"
              />
              <h3 className="text-xl font-semibold mb-2">Telecom Analytics Platform</h3>
              <p className="text-sm text-gray-600">
                Built a scalable analytics pipeline using Azure Data Factory, Data Lake, and Databricks to process 100M+ daily CDRs. Enabled real-time insights for network optimization and churn prediction.
              </p>
            </div>

            {/* Business Consulting */}
            <div className="bg-white border border-gray-200 rounded-lg shadow-md p-6 hover:shadow-lg transition">
              <Image
                src="/images/business-consulting.jpg"
                alt="Business Consulting Project"
                width={400}
                height={250}
                className="rounded mb-4 object-cover w-full h-48"
              />
              <h3 className="text-xl font-semibold mb-2">Loan Origination Strategy</h3>
              <p className="text-sm text-gray-600">
                Partnered with a commercial bank to streamline loan application workflows using Agile delivery and process mapping. Reduced approval cycle time by 40% and increased throughput.
              </p>
            </div>

            {/* Bookkeeping & Accounting */}
            <div className="bg-white border border-gray-200 rounded-lg shadow-md p-6 hover:shadow-lg transition">
              <Image
                src="/images/bookkeeping.jpg"
                alt="Bookkeeping for SME"
                width={400}
                height={250}
                className="rounded mb-4 object-cover w-full h-48"
              />
              <h3 className="text-xl font-semibold mb-2">SME Financial Overhaul</h3>
              <p className="text-sm text-gray-600">
                Provided monthly bookkeeping, GST/HST filings, and payroll support to a Canadian small business. Helped the owner stay audit-ready and reclaim over $15K in unclaimed expenses.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
