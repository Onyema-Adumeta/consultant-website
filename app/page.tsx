import Link from 'next/link';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import AboutSection from './components/AboutSection';
import CertificationsSection from './components/CertificationsSection';
import ContactSection from './components/ContactSection';

export const metadata = {
  title: "Credence Consulting | Data Engineering & Business Strategy",
  description:
    "Helping businesses optimize data, operations, and financials with expert consulting in Data Engineering, Business Strategy, and Accounting.",
};

export default function Home() {
  return (
    <>
      <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <Link href="/" className="text-lg font-bold text-blue-600">
            Credence Consulting
          </Link>
          <div className="space-x-6 text-sm font-medium text-gray-700">
            <a href="#services" className="hover:text-blue-600 transition">Services</a>
            <a href="#about" className="hover:text-blue-600 transition">About</a>
            <a href="#certifications" className="hover:text-blue-600 transition">Certifications</a>
            <a href="#contact" className="hover:text-blue-600 transition">Contact</a>
            <Link href="/projects" className="hover:text-blue-600 transition">Projects</Link>
            <Link href="/insightbridge" className="hover:text-blue-600 transition">InsightBridge</Link>
          </div>
        </div>
      </nav>

      <main className="bg-white text-gray-800 pt-24">
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <CertificationsSection />
        <ContactSection />
      </main>
    </>
  );
}
