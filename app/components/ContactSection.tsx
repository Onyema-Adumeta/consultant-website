import React from 'react';
import Link from 'next/link';

const services = [
  {
    title: 'Data Engineering',
    icon: '💾',
    description:
      'Modern data pipelines and cloud solutions that enable businesses to unlock actionable insights from raw data, driving innovation and efficiency.',
  },
  {
    title: 'Business Consulting',
    icon: '📊',
    description:
      'Strategic business analysis, project leadership, and process optimization tailored to streamline operations and achieve growth objectives.',
  },
  {
    title: 'Bookkeeping & Accounting',
    icon: '📘',
    description:
      'Reliable monthly financial reporting, reconciliations, and compliance support for small and mid-sized enterprises across Canada.',
  },
  {
    title: 'InsightBridge Platform',
    icon: '🤖',
    description:
      'A smart financial data platform developed by Credence Consulting to help small businesses gain insights from financial documents with AI-powered analysis.',
    link: '/insightbridge'
  },
];

function ServiceCard({ title, icon, description, link }: { title: string; icon: string; description: string; link?: string }) {
  const cardContent = (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );

  return link ? <Link href={link}>{cardContent}</Link> : cardContent;
}

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 px-6 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-10">Our Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto text-center">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            icon={service.icon}
            description={service.description}
            link={service.link}
          />
        ))}
      </div>
    </section>
  );
}
