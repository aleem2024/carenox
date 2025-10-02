import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CTASection from "../../components/CTASection";
export default function ClaimsSubmission() {
  return (
    <>
      <Head>
        <title>Claims Submission & Charge Entry - Carenox Health</title>
        <meta
          name="description"
          content="Carenox Health ensures accurate claims submission and charge entry to help U.S. healthcare providers get reimbursed faster."
        />
      </Head>
      <Header />
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">
          Claims Submission & Charge Entry
        </h1>
        <p className="mt-4 text-lg max-w-3xl mx-auto">
          Minimize errors, reduce denials, and accelerate reimbursements with Carenox’s expert claim handling.
        </p>
      </section>
      {/* Problem Section */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-red-600">The Problem</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Small errors in claims - like missing modifiers, typos, or mismatched
          codes - can cause costly delays and rejections. Clinics often spend
          hours fixing and resubmitting claims, which disrupts cash flow and
          frustrates staff.
        </p>
      </section>
      {/* Solution Section */}
      <section className="py-20 px-6 bg-gray-50 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-green-700">Our Solution</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Carenox Health ensures every claim is carefully reviewed and submitted
          correctly the first time. Our team double-checks patient information,
          provider details, and coding before submission. Claims are scrubbed
          for accuracy and transmitted securely, reducing rejections and
          speeding up the reimbursement cycle.
        </p>
      </section>
      {/* Benefit Section */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-blue-700">The Benefit</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          With Carenox, practices experience cleaner claims, fewer denials, and
          faster payments. Providers can focus on patient care while we handle
          the complexities of claim accuracy. Our structured process means
          predictable cash flow and improved financial health for your clinic.
        </p>
        <ul className="mt-6 space-y-2 text-gray-700 list-disc list-inside">
          <li>98% clean claim rate</li>
          <li>Reduced denial rates</li>
          <li>Faster reimbursements</li>
          <li>Peace of mind for providers</li>
        </ul>
      </section>
      <CTASection />
      <Footer />
    </>
  );
}
