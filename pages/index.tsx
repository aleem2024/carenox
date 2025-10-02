import Head from "next/head";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ServiceCard from "../components/ServiceCard";
import CTASection from "../components/CTASection";
import TestimonialCard from "../components/TestimonialCard";

export default function Home() {
  return (
    <>
      <Head>
        <title>Carenox Health - Trusted Medical Billing Partner</title>
        <meta
          name="description"
          content="Carenox Health provides HIPAA-compliant medical billing and revenue cycle management services for U.S. clinics and healthcare providers."
        />
      </Head>

      <Header />

      <section className="bg-gray-50 py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
            Trusted Medical Billing for U.S. Clinics
          </h1>
          <p className="mt-6 text-lg text-gray-600">
            We help healthcare practices collect more revenue, reduce denials, and save time.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link
              href="/contact"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
            >
              Request a Free Consultation
            </Link>
            <Link
              href="/services"
              className="px-6 py-3 bg-gray-200 text-gray-900 rounded-lg shadow hover:bg-gray-300"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </>
  );
}
