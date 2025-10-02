import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
export default function Privacy() {
  return (
    <>
      <Head>
        <title>Privacy Policy - Carenox Health</title>
        <meta
          name="description"
          content="Carenox Health’s privacy policy explains how we protect patient and provider data in compliance with HIPAA and other regulations."
        />
      </Head>
      <Header />
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">Privacy Policy</h1>
        <p className="mt-4 text-lg max-w-3xl mx-auto">
          Learn how Carenox Health protects patient and provider information with HIPAA-compliant security measures.
        </p>
      </section>
      {/* Privacy Content */}
      <section className="py-20 px-6 max-w-5xl mx-auto space-y-6 text-gray-700">
        <p>
          Carenox Health is committed to protecting the privacy of patient and
          provider data. We adhere to all HIPAA regulations and industry best
          practices to ensure information security and confidentiality.
        </p>
        <h2 className="text-2xl font-semibold">Information We Collect</h2>
        <p>
          We may collect practice information, provider details, patient billing
          data, and payer-related records as part of our revenue cycle
          management services. All information is handled in compliance with
          HIPAA guidelines.
        </p>
        <h2 className="text-2xl font-semibold">How We Use Information</h2>
        <p>
          Data collected is used strictly for the purpose of providing medical
          billing and revenue cycle management services. We do not sell, share,
          or use data for any unrelated purposes.
        </p>
        <h2 className="text-2xl font-semibold">Data Security</h2>
        <p>
          All electronic records are encrypted both in transit and at rest. Our
          systems employ access controls, audit trails, and multi-layered
          security measures to safeguard data.
        </p>
        <h2 className="text-2xl font-semibold">Third-Party Access</h2>
        <p>
          Only authorized staff and approved vendors under HIPAA-compliant
          agreements may access information required for billing services.
        </p>
        <h2 className="text-2xl font-semibold">Your Rights</h2>
        <p>
          Providers and patients have the right to request information about
          their data, corrections to errors, or limitations on data use in
          accordance with HIPAA.
        </p>
        <p>
          For questions regarding our privacy practices, please contact us at
          <a href="mailto:privacy@carenox.com" className="text-blue-600">
            {" "}privacy@carenox.com
          </a>.
        </p>
      </section>
      <Footer />
    </>
  );
}
