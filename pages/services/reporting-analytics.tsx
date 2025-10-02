import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CTASection from "../../components/CTASection";
export default function ReportingAnalytics() {
  return (
    <>
      <Head>
        <title>Reporting & Analytics - Carenox Health</title>
        <meta
          name="description"
          content="Carenox Health provides real-time reporting and analytics dashboards for complete financial transparency."
        />
      </Head>
      <Header />
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">
          Reporting & Analytics
        </h1>
        <p className="mt-4 text-lg max-w-3xl mx-auto">
          Get complete visibility into your revenue cycle with Carenox’s transparent dashboards and financial insights.
        </p>
      </section>
      {/* Problem Section */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-red-600">The Problem</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Many billing companies keep practices in the dark, providing little or
          no reporting. Without clear insights, providers struggle to identify
          revenue leaks, denial trends, or the true financial health of their
          practice.
        </p>
      </section>
      {/* Solution Section */}
      <section className="py-20 px-6 bg-gray-50 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-green-700">Our Solution</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Carenox Health delivers real-time dashboards and detailed reporting that
          cover clean claim rates, denial causes, AR aging, collections, and more.
          Our insights are easy to understand and designed to help clinics make
          smarter financial decisions.
        </p>
      </section>
      {/* Benefit Section */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-blue-700">The Benefit</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          With Carenox’s analytics, providers finally gain control over their
          revenue cycle. Transparency builds trust and allows clinics to spot
          inefficiencies, improve collections, and plan strategically.
        </p>
        <ul className="mt-6 space-y-2 text-gray-700 list-disc list-inside">
          <li>Real-time dashboards with financial KPIs</li>
          <li>Transparent reporting across the entire revenue cycle</li>
          <li>Actionable insights to reduce denials & improve collections</li>
          <li>Data-driven decision making for long-term growth</li>
        </ul>
      </section>
      <CTASection />
      <Footer />
    </>
  );
}
