import Image from "next/image";

// Service card component
function ServiceCard({ title, icon }: { title: string; icon: string }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-600">
        Professional support tailored to your business needs.
      </p>
    </div>
  );
}

// Homepage
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
          </div>
        </div>
      </nav>

      {/* Main content */}
      <main className="bg-white text-gray-800 mt-20">
        {/* Hero Section */}
        <section
          className="relative bg-cover bg-center h-[400px] flex items-center justify-center text-white text-center"
          style={{ backgroundImage: "url('/images/Chilliwack.png')" }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-60 z-0" />
          <div className="z-10 p-6 rounded">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Credence Consulting</h1>
            <p className="text-xl sm:text-2xl">
              Data Engineering, Business Analysis, Project Management,<br />
              Bookkeeping & Accounting, and Taxation
            </p>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 px-6 bg-gray-50">
          <h2 className="text-3xl font-bold text-center mb-10">Our Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto text-center">
            <ServiceCard title="Data Engineering" icon="💾" />
            <ServiceCard title="Business Analysis" icon="📊" />
            <ServiceCard title="Project Management" icon="📅" />
            <ServiceCard title="Financial, Bookkeeping & Accounting" icon="📘" />
            <ServiceCard title="Taxation" icon="🧾" />
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 px-6 bg-white max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">About</h2>
          <div className="flex flex-col sm:flex-row items-center gap-8">
            <Image
              src="/images/consultant.jpg"
              alt="Consultant"
              width={180}
              height={180}
              priority
              className="rounded-full object-cover shadow-lg ring-4 ring-blue-500"
            />
            <p className="text-lg text-center sm:text-left">
              I’m a consultant committed to helping businesses build modern data solutions, optimize processes,
              ensure financial accuracy, and meet compliance with confidence. My expertise spans technical and
              strategic disciplines, tailored to support your growth.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 px-6 bg-gray-100">
          <h2 className="text-3xl font-bold text-center mb-4">Let’s Work Together</h2>
          <p className="text-lg text-center mb-8">
            Get in touch to discuss how Credence Consulting can support your goals.
          </p>

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
