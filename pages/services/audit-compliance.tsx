import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CTASection from "../../components/CTASection";
export default function AuditCompliance() {
  return (
    <>
      <Head>
        <title>Audit & Compliance Support - Carenox Health</title>
        <meta
          name="description"
          content="Carenox Health ensures HIPAA compliance and audit readiness, helping providers stay protected and avoid penalties."
        />
      </Head>
      <Header />
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">
          Audit & Compliance Support
        </h1>
        <p className="mt-4 text-lg max-w-3xl mx-auto">
          Stay HIPAA-compliant and audit-ready with Carenox’s compliance-focused processes.
        </p>
      </section>
      {/* Problem Section */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-red-600">The Problem</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Healthcare providers face strict regulatory requirements. Failing to
          comply with HIPAA or payer rules can lead to denied claims, heavy fines,
          or damaging audits. Many practices lack the resources to stay fully
          compliant while managing billing operations.
        </p>
      </section>
      {/* Solution Section */}
      <section className="py-20 px-6 bg-gray-50 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-green-700">Our Solution</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Carenox Health builds compliance into every step of the billing cycle.
          From HIPAA-secure systems to audit-proof claim documentation, we help
          practices minimize risk. Our team provides audit support, policy
          guidance, and ensures your revenue cycle meets all payer and federal
          requirements.
        </p>
      </section>
      {/* Benefit Section */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-blue-700">The Benefit</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          With Carenox, clinics gain peace of mind knowing their billing process
          is compliant and audit-ready. Providers avoid costly penalties, reduce
          claim denials, and build a strong reputation for compliance and
          integrity.
        </p>
        <ul className="mt-6 space-y-2 text-gray-700 list-disc list-inside">
          <li>HIPAA-secure billing processes</li>
          <li>Audit-ready documentation</li>
          <li>Reduced compliance risks</li>
          <li>Protection from fines & penalties</li>
        </ul>
      </section>
      <CTASection />
      <Footer />
    </>
  );
}
