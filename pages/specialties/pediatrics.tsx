import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CTASection from "../../components/CTASection";
export default function Pediatrics() {
  return (
    <>
      <Head>
        <title>Pediatrics Medical Billing - Carenox Health</title>
        <meta
          name="description"
          content="Carenox Health provides pediatric medical billing services, ensuring accurate coding for vaccines, preventive care, and child health visits."
        />
      </Head>
      <Header />
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">
          Pediatrics Medical Billing
        </h1>
        <p className="mt-4 text-lg max-w-3xl mx-auto">
          Support your pediatric practice with Carenox’s specialized billing for preventive care, vaccines, and child health services.
        </p>
      </section>
      {/* Challenges in Pediatrics Billing */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-red-600">The Challenge</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Pediatric billing involves unique complexities - from coding vaccines
          and well-child visits to handling multiple payers for dependents.
          Errors or missed codes can result in frequent denials and lost revenue.
          The high patient volume also makes billing management overwhelming for staff.
        </p>
      </section>
      {/* Our Solution */}
      <section className="py-20 px-6 bg-gray-50 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-green-700">Our Solution</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Carenox Health provides billing services tailored for pediatrics. We
          ensure accurate vaccine coding, proper use of modifiers, and compliance
          with payer rules for preventive and sick visits. Our team manages claims
          efficiently, reducing denials and improving collections for busy pediatric clinics.
        </p>
      </section>
      {/* Benefits for Pediatric Practices */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-blue-700">The Benefit</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Pediatric practices that partner with Carenox enjoy fewer denials,
          improved cash flow, and less stress for staff. Our pediatric billing
          experts help clinics maintain smooth operations while maximizing revenue.
        </p>
        <ul className="mt-6 space-y-2 text-gray-700 list-disc list-inside">
          <li>Accurate coding for vaccines & preventive care</li>
          <li>Reduced denials and faster reimbursements</li>
          <li>Improved financial performance for busy clinics</li>
          <li>Less administrative workload for staff</li>
        </ul>
      </section>
      <CTASection />
      <Footer />
    </>
  );
}
