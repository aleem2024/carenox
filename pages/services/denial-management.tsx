import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CTASection from "../../components/CTASection";
export default function DenialManagement() {
  return (
    <>
      <Head>
        <title>Denial Management & Appeals - Carenox Health</title>
        <meta
          name="description"
          content="Carenox Health provides proactive denial management and appeals services to recover lost revenue and prevent future denials."
        />
      </Head>
      <Header />
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">
          Denial Management & Appeals
        </h1>
        <p className="mt-4 text-lg max-w-3xl mx-auto">
          Turn denials into revenue with Carenox’s proactive management and fast appeals process.
        </p>
      </section>
      {/* Problem Section */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-red-600">The Problem</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Denied claims drain revenue and delay payments. Many practices lack the
          time or resources to properly appeal, leaving thousands of dollars
          uncollected. Most denials occur due to missing documentation, coding
          errors, or payer-specific rules.
        </p>
      </section>
      {/* Solution Section */}
      <section className="py-20 px-6 bg-gray-50 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-green-700">Our Solution</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Carenox Health provides a structured denial management system. We track
          every denial, identify the root cause, correct errors, and resubmit
          claims quickly. Our specialists are trained in payer rules, ensuring
          appeals are filed effectively and prevent the same issues in the future.
        </p>
      </section>
      {/* Benefit Section */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-blue-700">The Benefit</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Clinics working with Carenox recover lost revenue, reduce future
          denials, and stabilize cash flow. With us, every claim gets the
          attention it deserves, ensuring providers don’t leave money on the
          table.
        </p>
        <ul className="mt-6 space-y-2 text-gray-700 list-disc list-inside">
          <li>Recovered revenue from denied claims</li>
          <li>Faster appeals and resubmissions</li>
          <li>Fewer future denials with proactive prevention</li>
          <li>Financial stability for clinics of all sizes</li>
        </ul>
      </section>
      <CTASection />
      <Footer />
    </>
  );
}
