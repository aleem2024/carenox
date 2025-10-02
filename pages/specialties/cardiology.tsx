import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CTASection from "../../components/CTASection";
export default function Cardiology() {
  return (
    <>
      <Head>
        <title>Cardiology Medical Billing - Carenox Health</title>
        <meta
          name="description"
          content="Carenox Health provides specialized medical billing services for cardiology practices, reducing denials and increasing revenue."
        />
      </Head>
      <Header />
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">
          Cardiology Medical Billing
        </h1>
        <p className="mt-4 text-lg max-w-3xl mx-auto">
          Optimize your cardiology practice’s revenue with Carenox’s specialized billing services.
        </p>
      </section>
      {/* Challenges in Cardiology Billing */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-red-600">The Challenge</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Cardiology billing involves complex procedures, multiple diagnostic
          codes, and frequent claim denials. Many practices lose revenue due to
          undercoding, improper modifier use, and payer-specific rules.
        </p>
      </section>
      {/* Our Solution */}
      <section className="py-20 px-6 bg-gray-50 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-green-700">Our Solution</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Carenox Health has billing experts trained specifically in cardiology.
          We ensure accurate CPT/ICD-10 coding for all cardiology procedures,
          from EKGs to complex interventions. Our proactive denial management
          prevents revenue loss and improves claim acceptance rates.
        </p>
      </section>
      {/* Benefits for Cardiology Practices */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-blue-700">The Benefit</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          With Carenox as your billing partner, your cardiology practice gains
          more reliable revenue, fewer denials, and more time to focus on patient care.
        </p>
        <ul className="mt-6 space-y-2 text-gray-700 list-disc list-inside">
          <li>Accurate cardiology-specific coding</li>
          <li>Reduced claim denials and rejections</li>
          <li>Improved cash flow and faster reimbursements</li>
          <li>Experienced team in cardiovascular billing</li>
        </ul>
      </section>
      <CTASection />
      <Footer />
    </>
  );
}
