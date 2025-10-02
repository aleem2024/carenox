import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CTASection from "../../components/CTASection";
export default function PatientBilling() {
  return (
    <>
      <Head>
        <title>Patient Billing & Statements - Carenox Health</title>
        <meta
          name="description"
          content="Carenox Health manages patient billing and statements, ensuring clear communication and timely collections."
        />
      </Head>
      <Header />
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">
          Patient Billing & Statements
        </h1>
        <p className="mt-4 text-lg max-w-3xl mx-auto">
          Improve patient satisfaction and collections with clear, accurate billing statements and support.
        </p>
      </section>
      {/* Problem Section */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-red-600">The Problem</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Confusing or delayed patient statements often lead to frustration,
          disputes, and unpaid balances. Clinics spend valuable staff time
          answering billing questions instead of focusing on care. Poor patient
          billing experiences damage trust and cash flow.
        </p>
      </section>
      {/* Solution Section */}
      <section className="py-20 px-6 bg-gray-50 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-green-700">Our Solution</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Carenox Health generates clear, timely statements and offers patient
          support for billing inquiries. Our system ensures patients understand
          their charges, payment options, and balances owed. With a focus on
          transparency, we reduce confusion and accelerate collections.
        </p>
      </section>
      {/* Benefit Section */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-blue-700">The Benefit</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Practices gain stronger patient relationships and higher collection
          rates when billing is handled professionally. Patients appreciate clear
          communication, and clinics save staff hours while boosting revenue.
        </p>
        <ul className="mt-6 space-y-2 text-gray-700 list-disc list-inside">
          <li>Clear, professional patient statements</li>
          <li>Reduced disputes and confusion</li>
          <li>Improved patient trust and satisfaction</li>
          <li>Higher collection rates with less staff effort</li>
        </ul>
      </section>
      <CTASection />
      <Footer />
    </>
  );
}
