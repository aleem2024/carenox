import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CTASection from "../components/CTASection";
export default function HowItWorks() {
  return (
    <>
      <Head>
        <title>How It Works - Carenox Health</title>
        <meta
          name="description"
          content="Learn how Carenox Health partners with clinics through a simple, step-by-step onboarding and billing process."
        />
      </Head>
      <Header />
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">How It Works</h1>
        <p className="mt-4 text-lg max-w-3xl mx-auto">
          A simple, transparent process designed to get your practice up and running quickly.
        </p>
      </section>
      {/* Process Steps */}
      <section className="py-20 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">Our 4-Step Process</h2>
        <div className="grid md:grid-cols-4 gap-8 text-left">
          <div className="p-6 bg-white rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">1. Discovery</h3>
            <p className="text-gray-700">
              We review your current billing setup and identify key challenges.
              This ensures we understand your practice’s unique needs.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">2. Onboarding</h3>
            <p className="text-gray-700">
              Our team sets up secure access, integrates with your EHR system, and
              establishes HIPAA-compliant workflows.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">3. Billing Operations</h3>
            <p className="text-gray-700">
              We handle charge entry, coding, claims submission, denial management,
              and AR follow-up - ensuring accuracy at every step.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">4. Reporting</h3>
            <p className="text-gray-700">
              Get real-time dashboards and monthly reports so you always know the
              financial health of your practice.
            </p>
          </div>
        </div>
      </section>
      {/* Benefits Section */}
      <section className="py-20 px-6 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold mb-6">Why Clinics Choose Carenox</h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed">
          Our process is designed to minimize disruption, maximize collections, and
          deliver peace of mind. With Carenox, billing becomes an efficient,
          reliable engine powering your practice’s growth.
        </p>
      </section>
      <CTASection />
      <Footer />
    </>
  );
}
