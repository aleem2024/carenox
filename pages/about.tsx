import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CTASection from "../components/CTASection";
export default function About() {
  return (
    <>
      <Head>
        <title>About Us - Carenox Health</title>
        <meta
          name="description"
          content="Learn more about Carenox Health - a trusted medical billing and revenue cycle management partner serving U.S. clinics and healthcare providers."
        />
      </Head>
      <Header />
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">About Carenox Health</h1>
        <p className="mt-4 text-lg max-w-3xl mx-auto">
          Your trusted partner in medical billing & revenue cycle management.
        </p>
      </section>
      {/* Mission & Story */}
      <section className="py-20 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          At Carenox Health, our mission is simple: help doctors and clinics
          thrive financially by taking the burden of billing off their shoulders.
          We manage the entire revenue cycle so healthcare providers can focus on
          what matters most - delivering exceptional patient care.
        </p>
      </section>
      {/* Values Section */}
      <section className="py-20 px-6 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold mb-10">Our Core Values</h2>
        <div className="grid md:grid-cols-3 gap-10">
          <div className="p-6 bg-white rounded-lg shadow">
            <h3 className="font-semibold text-xl">Compliance</h3>
            <p className="mt-2 text-gray-600">
              We follow strict HIPAA standards to ensure data safety and privacy.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow">
            <h3 className="font-semibold text-xl">Transparency</h3>
            <p className="mt-2 text-gray-600">
              Clear reporting and open communication with every client.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow">
            <h3 className="font-semibold text-xl">Results</h3>
            <p className="mt-2 text-gray-600">
              Focused on reducing denials, improving collections, and boosting
              revenue performance.
            </p>
          </div>
        </div>
      </section>
      {/* Why Choose Us */}
      <section className="py-20 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Why Choose Carenox?</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Unlike many billing companies, Carenox Health emphasizes a premium,
          results-driven partnership. With expertise in U.S. healthcare systems,
          HIPAA compliance, and advanced reporting, we position ourselves as a
          reliable extension of your practice - not just a vendor.
        </p>
      </section>
      {/* Team Section (optional) */}
      <section className="py-20 px-6 bg-white text-center">
        <h2 className="text-3xl font-bold mb-10">Meet Our Team</h2>
        <div className="grid md:grid-cols-3 gap-10">
          <div className="p-6 bg-gray-100 rounded-lg shadow">
            <h3 className="font-semibold text-xl">John Smith</h3>
            <p className="text-gray-600">CEO & Founder</p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow">
            <h3 className="font-semibold text-xl">Sarah Johnson</h3>
            <p className="text-gray-600">Head of Operations</p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow">
            <h3 className="font-semibold text-xl">Michael Lee</h3>
            <p className="text-gray-600">Compliance Officer</p>
          </div>
        </div>
      </section>
      <CTASection />
      <Footer />
    </>
  );
}
