import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CTASection from "../../components/CTASection";
export default function UrgentCare() {
  return (
    <>
      <Head>
        <title>Urgent Care Medical Billing - Carenox Health</title>
        <meta
          name="description"
          content="Carenox Health provides urgent care billing services to handle high patient volume, diverse coding, and payer-specific rules."
        />
      </Head>
      <Header />
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">
          Urgent Care Medical Billing
        </h1>
        <p className="mt-4 text-lg max-w-3xl mx-auto">
          Handle high patient volume and complex coding with Carenox’s urgent care billing solutions.
        </p>
      </section>
      {/* Challenges in Urgent Care Billing */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-red-600">The Challenge</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Urgent care centers process large volumes of patients daily, with a mix
          of emergency visits, labs, imaging, and minor procedures. Incorrect
          coding, missed modifiers, and payer-specific rules often result in
          frequent denials and lost revenue. Staff are overwhelmed trying to keep
          up with billing demands.
        </p>
      </section>
      {/* Our Solution */}
      <section className="py-20 px-6 bg-gray-50 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-green-700">Our Solution</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Carenox Health specializes in urgent care billing. Our team ensures
          accurate CPT/ICD-10 coding, proper use of modifiers, and compliance with
          payer-specific requirements. We handle high-volume claim submissions
          daily and proactively manage denials to keep revenue flowing.
        </p>
      </section>
      {/* Benefits for Urgent Care Centers */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-blue-700">The Benefit</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Urgent care centers working with Carenox enjoy improved claim accuracy,
          faster reimbursements, and reduced administrative stress. With our
          support, urgent care providers can focus on delivering fast, quality
          care while we manage the revenue cycle.
        </p>
        <ul className="mt-6 space-y-2 text-gray-700 list-disc list-inside">
          <li>Accurate coding for diverse urgent care services</li>
          <li>Reduced claim denials & rejections</li>
          <li>Efficient billing for high patient volumes</li>
          <li>Improved financial stability for urgent care centers</li>
        </ul>
      </section>
      <CTASection />
      <Footer />
    </>
  );
}
