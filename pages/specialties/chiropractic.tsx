import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CTASection from "../../components/CTASection";
export default function Chiropractic() {
  return (
    <>
      <Head>
        <title>Chiropractic Medical Billing - Carenox Health</title>
        <meta
          name="description"
          content="Carenox Health provides chiropractic billing services, reducing denials and improving reimbursements for chiropractic practices."
        />
      </Head>
      <Header />
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">
          Chiropractic Medical Billing
        </h1>
        <p className="mt-4 text-lg max-w-3xl mx-auto">
          Streamline chiropractic billing and maximize reimbursements with Carenox’s specialized services.
        </p>
      </section>
      {/* Challenges in Chiropractic Billing */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-red-600">The Challenge</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Chiropractic billing is often subject to strict payer rules and frequent
          denials due to medical necessity requirements. Documentation errors,
          improper use of CPT codes, and restrictions on visit frequency commonly
          result in lost revenue for practices.
        </p>
      </section>
      {/* Our Solution */}
      <section className="py-20 px-6 bg-gray-50 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-green-700">Our Solution</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Carenox Health provides chiropractic-focused billing expertise. We ensure
          proper coding, compliance with payer visit limits, and accurate medical
          necessity documentation. Our denial management process addresses rejected
          claims quickly to recover revenue for chiropractic providers.
        </p>
      </section>
      {/* Benefits for Chiropractic Practices */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-blue-700">The Benefit</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          With Carenox, chiropractic clinics see fewer denials, smoother billing
          cycles, and stronger financial performance. We help providers focus on
          patient wellness instead of administrative hassles.
        </p>
        <ul className="mt-6 space-y-2 text-gray-700 list-disc list-inside">
          <li>Accurate chiropractic coding and documentation</li>
          <li>Reduced payer denials and rejections</li>
          <li>Compliance with medical necessity and visit limits</li>
          <li>Improved collections and cash flow</li>
        </ul>
      </section>
      <CTASection />
      <Footer />
    </>
  );
}
