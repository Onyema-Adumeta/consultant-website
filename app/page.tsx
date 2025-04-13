export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-gray-100 text-gray-800">
      <div className="max-w-4xl w-full text-center">
        <h1 className="text-4xl font-bold mb-4">Credence Consulting</h1>
        <h2 className="text-2xl font-semibold text-blue-700 mb-6">
          Global Consultant in Data Engineering, Business Analysis, Project Management Project Management, Accounting & Taxation
        </h2>
        <p className="mb-6 text-lg">
          We help  organizations streamline their operations, manage data effectively,
          ensure financial accuracy, and deliver projects successfully using modern technologies and proven methodologies.
        </p>
        <div className="space-x-4">
          <a
            href="#services"
            className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Explore Services
          </a>
          <a
            href="#contact"
            className="px-6 py-2 bg-gray-800 text-white rounded hover:bg-gray-900 transition"
          >
            Contact Me
          </a>
        </div>
      </div>
    </main>
  );
}
