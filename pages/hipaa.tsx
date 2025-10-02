import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
export default function HIPAA() {
  return (
    <>
      <Head>
        <title>HIPAA Compliance - Carenox Health</title>
        <meta
          name="description"
          content="Carenox Health is fully HIPAA-compliant, ensuring patient data security and regulatory adherence for all billing services."
        />
      </Head>
      <Header />
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">HIPAA Compliance</h1>
        <p className="mt-4 text-lg max-w-3xl mx-auto">
          Carenox Health is committed to safeguarding patient information with HIPAA-compliant processes and technology.
        </p>
      </section>
      {/* HIPAA Overview */}
      <section className="py-20 px-6 max-w-5xl mx-auto space-y-6 text-gray-700">
        <p>
          At Carenox Health, protecting patient health information is our top
          priority. We follow all HIPAA regulations and use secure systems to
          ensure data confidentiality, integrity, and availability.
        </p>
        <h2 className="text-2xl font-semibold">Our HIPAA Measures</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Encryption of all data in transit and at rest</li>
          <li>Role-based access controls and user authentication</li>
          <li>Regular security audits and compliance checks</li>
          <li>Comprehensive employee HIPAA training</li>
          <li>Audit logs for all system activity</li>
        </ul>
        <h2 className="text-2xl font-semibold">Why HIPAA Matters</h2>
        <p>
          Non-compliance with HIPAA can result in claim denials, fines, and loss
          of trust. By ensuring full compliance, Carenox helps providers protect
          their practices while maintaining strong payer relationships.
        </p>
        <h2 className="text-2xl font-semibold">Our Commitment</h2>
        <p>
          Carenox Health views compliance as more than a requirement - it is part
          of our commitment to integrity and excellence. Our systems and
          processes are continuously updated to align with evolving HIPAA
          standards and healthcare regulations.
        </p>
        <p>
          For more information about our HIPAA compliance practices, contact us at{" "}
          <a href="mailto:compliance@carenox.com" className="text-blue-600">
            compliance@carenox.com
          </a>.
        </p>
      </section>
      <Footer />
    </>
  );
}
