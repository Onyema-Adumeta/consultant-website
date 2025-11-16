import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'InsightBridge | AI-Powered Financial Intelligence Platform',
  description:
    'Transform complex financial data into clear, actionable insights with AI. Upload documents, get KPI dashboards, predictive forecasts, and strategic recommendations—all without a data team.',
  keywords: [
    'AI financial analysis',
    'financial intelligence',
    'business intelligence',
    'cash flow forecasting',
    'KPI dashboards',
    'financial automation',
    'InsightBridge',
    'Credence Consulting',
  ],
  openGraph: {
    title: 'InsightBridge | AI-Powered Financial Intelligence',
    description: 'Transform financial data into strategic decisions with AI-powered analysis.',
    url: 'https://www.credenceconsulting.io/insightbridge',
    siteName: 'InsightBridge by Credence Consulting',
    images: [
      {
        url: 'https://www.credenceconsulting.io/images/insightbridge.jpg',
        width: 1200,
        height: 630,
        alt: 'InsightBridge Platform',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'InsightBridge | AI-Powered Financial Intelligence',
    description: 'Transform financial data into strategic decisions with AI.',
    images: ['https://www.credenceconsulting.io/images/insightbridge.jpg'],
  },
};