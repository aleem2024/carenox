import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CTASection from "../../components/CTASection";
export default function MedicalCoding() {
  return (
    <>
      <Head>
        <title>Medical Coding (CPT, ICD-10) - Carenox Health</title>
        <meta
          name="description"
          content="Carenox Health provides accurate and compliant CPT and ICD-10 medical coding to reduce denials and improve claim acceptance."
        />
      </Head>
      <Header />
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">
          Medical Coding (CPT, ICD-10)
        </h1>
        <p className="mt-4 text-lg max-w-3xl mx-auto">
          Ensure compliant, accurate coding that prevents denials and maximizes revenue.
        </p>
      </section>
      {/* Problem Section */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-red-600">The Problem</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Incorrect or outdated medical coding is one of the biggest causes of
          claim denials and compliance risks. With constant CPT and ICD-10
          updates, many practices struggle to keep up, leading to errors,
          revenue loss, and potential audits.
        </p>
      </section>
      {/* Solution Section */}
      <section className="py-20 px-6 bg-gray-50 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-green-700">Our Solution</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Carenox Health employs certified medical coders who stay current with
          CPT and ICD-10 updates. We carefully review documentation, assign the
          correct codes, and ensure every claim is audit-proof. By combining
          expertise with technology-driven checks, we minimize errors and
          increase claim acceptance rates.
        </p>
      </section>
      {/* Benefit Section */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-blue-700">The Benefit</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          With Carenox’s coding support, practices experience fewer denials,
          higher clean-claim rates, and reduced compliance risk. Our coding
          accuracy protects providers while improving revenue outcomes.
        </p>
        <ul className="mt-6 space-y-2 text-gray-700 list-disc list-inside">
          <li>Certified CPT & ICD-10 coders</li>
          <li>Higher claim acceptance rates</li>
          <li>Reduced compliance risks & audit protection</li>
          <li>Consistent revenue improvement</li>
        </ul>
      </section>
      <CTASection />
      <Footer />
    </>
  );
}
