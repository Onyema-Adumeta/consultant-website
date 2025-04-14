import Image from "next/image";
import Link from "next/link";

function ServiceCard({ title, icon, description }: { title: string; icon: string; description: string }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* Navigation */}
      <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <span className="text-lg font-bold text-blue-600">Credence Consulting</span>
          <div className="space-x-6 text-sm font-medium text-gray-700">
            <a href="#services" className="hover:text-blue-600 transition">Services</a>
            <a href="#about" className="hover:text-blue-600 transition">About</a>
            <a href="#contact" className="hover:text-blue-600 transition">Contact</a>
            <Link href="/projects" className="hover:text-blue-600 transition">Projects</Link>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <main className="bg-white text-gray-800 mt-20">
        {/* Hero Section */}
        <section className="relative bg-cover bg-center h-[400px] flex items-center justify-center text-white text-center" style={{ backgroundImage: "url('/images/Chilliwack.png')" }}>
          <div className="absolute inset-0 bg-black bg-opacity-60 z-0" />
          <div className="z-10 p-6 rounded">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Credence Consulting</h1>
            <p className="text-xl sm:text-2xl">
              Data Engineering, Business Consulting,<br />
              Bookkeeping & Accounting, and Taxation
            </p>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 px-6 bg-gray-50">
          <h2 className="text-3xl font-bold text-center mb-10">Our Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto text-center">
            <ServiceCard title="Data Engineering" icon="💾" description="Modern data pipelines and cloud solutions to unlock business insights." />
            <ServiceCard title="Business Consultant" icon="📊" description="Strategic analysis, project leadership, and optimized business processes." />
            <ServiceCard title="Bookkeeping & Accounting" icon="📘" description="Accurate financials and compliance for small and mid-size enterprises." />
            <ServiceCard title="Taxation" icon="🧾" description="Reliable tax filing, planning and compliance for Canadian businesses." />
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 px-6 bg-white max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">About</h2>
          <div className="flex flex-col sm:flex-row items-center gap-8">
            <Image
              src="/images/Personal.jpg"
              alt="Consultant"
              width={180}
              height={180}
              priority
              className="rounded-full object-cover shadow-lg ring-4 ring-blue-500"
            />
            <p className="text-lg text-center sm:text-left">
              I’m a consultant committed to helping businesses build modern data solutions, streamline operations,
              and maintain financial accuracy with confidence. My cross-industry expertise ensures delivery of
              tailored strategies for digital transformation and sustainable growth.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 px-6 bg-gray-100">
          <h2 className="text-3xl font-bold text-center mb-4">Let’s Work Together</h2>
          <p className="text-lg text-center mb-8">
            Get in touch to discuss how Credence Consulting can support your goals.
          </p>

          {/* Contact Details */}
          <div className="text-center mb-10">
            <p className="mb-2 text-lg">📍 5623 TeskeyWay, Chilliwack, BC, Canada</p>
            <p className="mb-2 text-lg">📞 (604) 213-3915</p>
            <p className="mb-6 text-lg">📧 info@credenceconsulting.io</p>
          </div>

          {/* Google Map Embed */}
          <div className="w-full h-[300px] mb-10">
            <iframe
              className="w-full h-full rounded-md shadow"
              loading="lazy"
              allowFullScreen
              src="https://www.google.com/maps?q=5623+Teskey+Way,+Chilliwack,+BC,+Canada&output=embed"
            ></iframe>
          </div>

          {/* Contact Form */}
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            className="max-w-xl mx-auto grid gap-6 bg-white p-8 rounded-lg shadow"
          >
            <input type="hidden" name="form-name" value="contact" />
            <div>
              <label htmlFor="name" className="block font-medium mb-1">Name</label>
              <input type="text" name="name" id="name" required className="w-full border border-gray-300 rounded px-4 py-2" />
            </div>
            <div>
              <label htmlFor="email" className="block font-medium mb-1">Email</label>
              <input type="email" name="email" id="email" required className="w-full border border-gray-300 rounded px-4 py-2" />
            </div>
            <div>
              <label htmlFor="message" className="block font-medium mb-1">Message</label>
              <textarea name="message" id="message" rows={5} required className="w-full border border-gray-300 rounded px-4 py-2" />
            </div>
            <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition">
              Send Message
            </button>
          </form>
        </section>
      </main>
    </>
  );
}
