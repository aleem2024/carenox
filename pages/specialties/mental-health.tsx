import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CTASection from "../../components/CTASection";
export default function MentalHealth() {
  return (
    <>
      <Head>
        <title>Mental Health & Psychiatry Billing - Carenox Health</title>
        <meta
          name="description"
          content="Carenox Health provides specialized billing services for mental health and psychiatry practices, including therapy and telehealth billing."
        />
      </Head>
      <Header />
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">
          Mental Health & Psychiatry Billing
        </h1>
        <p className="mt-4 text-lg max-w-3xl mx-auto">
          Simplify therapy and psychiatry billing with Carenox’s specialized services for behavioral health providers.
        </p>
      </section>
      {/* Challenges in Mental Health Billing */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-red-600">The Challenge</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Behavioral health billing is complex due to session-based CPT codes,
          frequent prior authorization requirements, and telehealth policies.
          Many practices face denials for incorrect time-based coding or missing
          payer approvals, causing delays and lost revenue.
        </p>
      </section>
      {/* Our Solution */}
      <section className="py-20 px-6 bg-gray-50 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-green-700">Our Solution</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Carenox Health provides billing support tailored for mental health and
          psychiatry. We ensure accurate time-based CPT coding, manage prior
          authorizations, and handle telehealth billing according to payer rules.
          Our denial management process reduces claim rejections and keeps your
          revenue flowing.
        </p>
      </section>
      {/* Benefits for Mental Health Practices */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-blue-700">The Benefit</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Mental health practices partnering with Carenox benefit from smoother
          billing operations, faster reimbursements, and fewer administrative
          headaches. Providers can focus more on patient care and less on
          insurance complexities.
        </p>
        <ul className="mt-6 space-y-2 text-gray-700 list-disc list-inside">
          <li>Accurate therapy & psychiatry session coding</li>
          <li>Support for prior authorizations</li>
          <li>Telehealth billing expertise</li>
          <li>Fewer denials and faster payments</li>
        </ul>
      </section>
      <CTASection />
      <Footer />
    </>
  );
}
