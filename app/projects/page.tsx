'use client';
import Image from 'next/image';
import Link from 'next/link';

const projects = [
  {
    title: 'InsightBridge – AI-Powered Financial Analysis Platform',
    description:
      'Currently building an AI-powered platform that summarizes financial reports, reconciles ledgers, and delivers personalized business insights from PDF, Excel, and CSV files. Built with Azure, FastAPI, Power BI, and OpenAI.',
    image: '/projects/insightbridge.jpg',
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

export default function Projects() {
  return (
    <main className="bg-white py-20 px-6 text-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-4xl font-bold">Projects & Case Studies</h1>
          <Link href="/" className="text-blue-600 hover:underline text-sm">
            ← Back to Home
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-gray-50 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                className="w-full h-48 object-cover"
                unoptimized
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

