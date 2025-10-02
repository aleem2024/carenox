import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CTASection from "../../components/CTASection";
export default function PaymentPosting() {
  return (
    <>
      <Head>
        <title>Payment Posting & EOB Reconciliation - Carenox Health</title>
        <meta
          name="description"
          content="Carenox Health provides accurate payment posting and EOB reconciliation to maintain transparency and ensure proper collections."
        />
      </Head>
      <Header />
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">
          Payment Posting & EOB Reconciliation
        </h1>
        <p className="mt-4 text-lg max-w-3xl mx-auto">
          Ensure every payment is posted correctly and matched with payer explanations for complete revenue transparency.
        </p>
      </section>
      {/* Problem Section */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-red-600">The Problem</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Without accurate payment posting, clinics lose visibility into what has
          been paid and what is outstanding. Misapplied or missing entries create
          confusion, prevent reconciliation, and make it harder to follow up with
          payers or patients.
        </p>
      </section>
      {/* Solution Section */}
      <section className="py-20 px-6 bg-gray-50 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-green-700">Our Solution</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Carenox Health posts every payment quickly and accurately, ensuring all
          payer remittances match the Explanation of Benefits (EOB). We reconcile
          each transaction so clinics always have a clear picture of revenue and
          outstanding claims.
        </p>
      </section>
      {/* Benefit Section */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-blue-700">The Benefit</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          With Carenox’s accurate posting and reconciliation, clinics gain complete
          financial clarity. Practices can trust their reports, follow up with
          payers confidently, and reduce administrative confusion.
        </p>
        <ul className="mt-6 space-y-2 text-gray-700 list-disc list-inside">
          <li>Accurate posting of all payments</li>
          <li>Full reconciliation with payer EOBs</li>
          <li>Better financial transparency</li>
          <li>Fewer errors and disputes with insurers</li>
        </ul>
      </section>
      <CTASection />
      <Footer />
    </>
  );
}
