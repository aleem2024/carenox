import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CTASection from "../../components/CTASection";
export default function Orthopedics() {
  return (
    <>
      <Head>
        <title>Orthopedics Medical Billing - Carenox Health</title>
        <meta
          name="description"
          content="Carenox Health provides expert orthopedic medical billing services to improve collections and reduce denials."
        />
      </Head>
      <Header />
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">
          Orthopedics Medical Billing
        </h1>
        <p className="mt-4 text-lg max-w-3xl mx-auto">
          Maximize reimbursements and reduce denials with Carenox’s orthopedic billing expertise.
        </p>
      </section>
      {/* Challenges in Orthopedic Billing */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-red-600">The Challenge</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Orthopedic billing involves surgical procedures, implants, and physical
          therapy codes. Errors in modifier usage, global period billing, and
          payer-specific requirements often lead to denials and revenue leakage.
        </p>
      </section>
      {/* Our Solution */}
      <section className="py-20 px-6 bg-gray-50 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-green-700">Our Solution</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Carenox Health provides specialized orthopedic billing support with
          coders trained in musculoskeletal and surgical coding. We ensure
          correct use of modifiers, compliance with global periods, and payer
          rules. Our denial management process prevents repeated errors and
          improves collections.
        </p>
      </section>
      {/* Benefits for Orthopedic Practices */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-blue-700">The Benefit</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          With Carenox’s orthopedic billing solutions, practices experience
          improved reimbursements, fewer denials, and faster payment cycles -
          freeing physicians to focus on patient care.
        </p>
        <ul className="mt-6 space-y-2 text-gray-700 list-disc list-inside">
          <li>Accurate surgical and therapy coding</li>
          <li>Reduced denials for orthopedic claims</li>
          <li>Compliance with global billing rules</li>
          <li>Improved revenue and predictable cash flow</li>
        </ul>
      </section>
      <CTASection />
      <Footer />
    </>
  );
}
