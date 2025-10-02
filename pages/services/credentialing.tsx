import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CTASection from "../../components/CTASection";
export default function Credentialing() {
  return (
    <>
      <Head>
        <title>Credentialing & Payer Enrollment - Carenox Health</title>
        <meta
          name="description"
          content="Carenox Health manages credentialing and payer enrollment to help providers get approved faster and start billing sooner."
        />
      </Head>
      <Header />
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">
          Credentialing & Payer Enrollment
        </h1>
        <p className="mt-4 text-lg max-w-3xl mx-auto">
          Speed up your approvals and avoid billing delays with Carenox’s credentialing expertise.
        </p>
      </section>
      {/* Problem Section */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-red-600">The Problem</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Without proper credentialing, providers cannot bill insurance companies,
          leading to delayed revenue and frustration. The process is paperwork-heavy,
          time-consuming, and filled with payer-specific requirements that many clinics
          struggle to manage on their own.
        </p>
      </section>
      {/* Solution Section */}
      <section className="py-20 px-6 bg-gray-50 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-green-700">Our Solution</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Carenox Health streamlines credentialing and payer enrollment by managing the
          entire process on your behalf. We prepare and submit applications, track their
          status, and communicate directly with payers until approvals are secured.
          Our team ensures every detail is correct to minimize delays.
        </p>
      </section>
      {/* Benefit Section */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-blue-700">The Benefit</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          With Carenox handling credentialing, providers can start billing much sooner,
          avoid long revenue gaps, and expand services without administrative headaches.
          Credentialing becomes a smooth step instead of a financial bottleneck.
        </p>
        <ul className="mt-6 space-y-2 text-gray-700 list-disc list-inside">
          <li>Faster payer approvals</li>
          <li>Reduced administrative burden</li>
          <li>Quicker revenue start for new providers</li>
          <li>Ongoing support for renewals & expansions</li>
        </ul>
      </section>
      <CTASection />
      <Footer />
    </>
  );
}
