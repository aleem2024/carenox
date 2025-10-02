import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CTASection from "../../components/CTASection";
export default function Dermatology() {
  return (
    <>
      <Head>
        <title>Dermatology Medical Billing - Carenox Health</title>
        <meta
          name="description"
          content="Carenox Health provides accurate dermatology medical billing services for procedures, pathology, and cosmetic treatments."
        />
      </Head>
      <Header />
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">
          Dermatology Medical Billing
        </h1>
        <p className="mt-4 text-lg max-w-3xl mx-auto">
          Simplify dermatology billing and boost revenue with Carenox’s expertise in procedure-based coding and payer rules.
        </p>
      </section>
      {/* Challenges in Dermatology Billing */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-red-600">The Challenge</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Dermatology billing involves complex coding for biopsies, excisions,
          Mohs surgery, cosmetic vs. medical treatments, and pathology services.
          Errors in coding or documentation often lead to denials and lost
          revenue, while patients can be left confused about covered vs.
          non-covered services.
        </p>
      </section>
      {/* Our Solution */}
      <section className="py-20 px-6 bg-gray-50 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-green-700">Our Solution</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Carenox Health provides dermatology-specific billing expertise. Our
          certified coders ensure accurate use of CPT/ICD-10 codes, proper
          modifier application, and separation of cosmetic vs. medical
          treatments. We also streamline pathology billing and denial
          management for a smoother revenue cycle.
        </p>
      </section>
      {/* Benefits for Dermatology Practices */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-blue-700">The Benefit</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Dermatology practices working with Carenox experience reduced denials,
          higher revenue capture, and fewer patient complaints. Our focus on
          accuracy and compliance ensures billing clarity and faster
          reimbursements.
        </p>
        <ul className="mt-6 space-y-2 text-gray-700 list-disc list-inside">
          <li>Accurate procedure-based coding</li>
          <li>Separation of medical vs. cosmetic treatments</li>
          <li>Streamlined pathology billing</li>
          <li>Improved reimbursements with fewer denials</li>
        </ul>
      </section>
      <CTASection />
      <Footer />
    </>
  );
}
