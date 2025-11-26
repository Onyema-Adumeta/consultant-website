import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import AboutSection from './components/AboutSection';
import CertificationsSection from './components/CertificationsSection';
import ContactSection from './components/ContactSection';  // ✅ CORRECT
import Navigation from './components/Navigation';
import Footer from './components/Footer';

export const metadata = {
  title: "Credence Consulting | Data Engineering & Business Strategy",
  description:
    "Helping businesses optimize data, operations, and financials with expert consulting in Data Engineering, Business Strategy, and Accounting.",
};

export default function Home() {
  return (
    <>
      <Navigation />

      <main className="bg-white text-gray-800">
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <CertificationsSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}