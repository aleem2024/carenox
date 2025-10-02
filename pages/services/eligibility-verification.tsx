import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CTASection from "../../components/CTASection";
export default function EligibilityVerification() {
  return (
    <>
      <Head>
        <title>Eligibility Verification - Carenox Health</title>
        <meta
          name="description"
          content="Carenox Health provides accurate insurance eligibility verification to reduce denials and ensure smooth billing."
        />
      </Head>
      <Header />
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">
          Eligibility Verification
        </h1>
        <p className="mt-4 text-lg max-w-3xl mx-auto">
          Prevent denials before they happen by verifying patient coverage upfront.
        </p>
      </section>
      {/* Problem Section */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-red-600">The Problem</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          A large percentage of denials happen because insurance eligibility was
          not checked properly. Patients may have inactive coverage, plan changes,
          or limited benefits. Without proper verification, clinics risk delayed
          payments and unhappy patients stuck with surprise bills.
        </p>
      </section>
      {/* Solution Section */}
      <section className="py-20 px-6 bg-gray-50 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-green-700">Our Solution</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Carenox Health verifies every patient’s insurance coverage in advance,
          checking plan details, active status, copays, and deductibles. Our team
          ensures that claims are submitted only for eligible services, reducing
          rejections and improving patient satisfaction.
        </p>
      </section>
      {/* Benefit Section */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-blue-700">The Benefit</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          With accurate eligibility verification, clinics avoid costly denials,
          reduce billing errors, and deliver a smoother patient experience.
          Providers gain confidence knowing services are covered before they are
          rendered.
        </p>
        <ul className="mt-6 space-y-2 text-gray-700 list-disc list-inside">
          <li>Fewer claim rejections</li>
          <li>Improved patient satisfaction</li>
          <li>Faster, cleaner billing process</li>
          <li>Reduced administrative workload</li>
        </ul>
      </section>
      <CTASection />
      <Footer />
    </>
  );
}
