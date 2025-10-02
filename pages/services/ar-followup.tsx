import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CTASection from "../../components/CTASection";
export default function ARFollowup() {
  return (
    <>
      <Head>
        <title>Accounts Receivable (AR) Follow-up - Carenox Health</title>
        <meta
          name="description"
          content="Carenox Health provides proactive accounts receivable (AR) follow-up to reduce unpaid claims and improve clinic cash flow."
        />
      </Head>
      <Header />
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">
          Accounts Receivable (AR) Follow-up
        </h1>
        <p className="mt-4 text-lg max-w-3xl mx-auto">
          Ensure faster collections and reduced AR days with our proactive follow-up process.
        </p>
      </section>
      {/* Problem Section */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-red-600">The Problem</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Many practices struggle with unpaid claims that sit in Accounts
          Receivable for weeks or months. Without constant monitoring and
          follow-ups, clinics face unpredictable cash flow, wasted staff time,
          and growing financial pressure.
        </p>
      </section>
      {/* Solution Section */}
      <section className="py-20 px-6 bg-gray-50 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-green-700">Our Solution</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Carenox Health provides daily AR tracking and active follow-up with both
          payers and patients. Our billing specialists monitor outstanding claims,
          resolve issues quickly, and ensure payments don’t get lost in the system.
        </p>
      </section>
      {/* Benefit Section */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-blue-700">The Benefit</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          By partnering with Carenox, clinics experience shorter AR cycles,
          improved collections, and reliable revenue streams. With our support,
          practices can finally achieve predictable financial stability.
        </p>
        <ul className="mt-6 space-y-2 text-gray-700 list-disc list-inside">
          <li>30% reduction in AR days</li>
          <li>Consistent follow-up with insurers & patients</li>
          <li>Improved revenue predictability</li>
          <li>Less staff burden chasing unpaid claims</li>
        </ul>
      </section>
      <CTASection />
      <Footer />
    </>
  );
}
