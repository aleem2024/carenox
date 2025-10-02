import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CTASection from "../../components/CTASection";
export default function FamilyPractice() {
  return (
    <>
      <Head>
        <title>Family Practice Medical Billing - Carenox Health</title>
        <meta
          name="description"
          content="Carenox Health provides medical billing services for family practice clinics, ensuring accurate coding and faster reimbursements."
        />
      </Head>
      <Header />
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">
          Family Practice Medical Billing
        </h1>
        <p className="mt-4 text-lg max-w-3xl mx-auto">
          Reliable billing solutions for high-volume family practice clinics.
        </p>
      </section>
      {/* Challenges in Family Practice Billing */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-red-600">The Challenge</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Family practice clinics manage a broad range of services - preventive care,
          chronic disease management, labs, and more. High patient volumes and diverse
          coding requirements often result in claim errors, denials, and increased
          administrative burden for staff.
        </p>
      </section>
      {/* Our Solution */}
      <section className="py-20 px-6 bg-gray-50 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-green-700">Our Solution</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Carenox Health provides tailored billing support for family practices,
          ensuring accurate coding for every service and procedure. We streamline
          claim submissions, reduce denials, and offer detailed reporting to help
          clinics stay financially strong.
        </p>
      </section>
      {/* Benefits for Family Practices */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-blue-700">The Benefit</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Family practices working with Carenox see improved revenue cycles,
          fewer billing errors, and more efficient clinic operations. Providers
          and staff spend less time on billing issues and more time on patient care.
        </p>
        <ul className="mt-6 space-y-2 text-gray-700 list-disc list-inside">
          <li>Accurate coding for diverse services</li>
          <li>Reduced denials and rework</li>
          <li>Improved clinic cash flow</li>
          <li>Less stress on administrative staff</li>
        </ul>
      </section>
      <CTASection />
      <Footer />
    </>
  );
}
