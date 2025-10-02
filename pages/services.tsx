import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ServiceCard from "../components/ServiceCard";
import CTASection from "../components/CTASection";
export default function Services() {
  return (
    <>
      <Head>
        <title>Our Services - Carenox Health</title>
        <meta
          name="description"
          content="Explore Carenox Health's complete medical billing and revenue cycle management services for U.S. healthcare providers."
        />
      </Head>
      <Header />
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">Our Services</h1>
        <p className="mt-4 text-lg max-w-3xl mx-auto">
          Carenox Health provides end-to-end revenue cycle management solutions 
          that help healthcare providers increase revenue, reduce denials, and 
          improve financial stability.
        </p>
      </section>
      {/* Services Overview */}
      <section className="py-20 px-6 bg-white text-center max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10">Comprehensive Billing Solutions</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <ServiceCard
            title="Claims Submission & Charge Entry"
            description="Accurate, timely claim submissions to maximize reimbursements."
          />
          <ServiceCard
            title="Denial Management & Appeals"
            description="Reduce denials with proactive resolution and appeals."
          />
          <ServiceCard
            title="Accounts Receivable (AR) Follow-up"
            description="Active follow-up with payers to accelerate collections."
          />
          <ServiceCard
            title="Medical Coding (CPT, ICD-10)"
            description="Certified coders ensure compliance and higher claim acceptance."
          />
          <ServiceCard
            title="Credentialing & Payer Enrollment"
            description="Streamline provider enrollment and approvals with insurers."
          />
          <ServiceCard
            title="Eligibility Verification"
            description="Verify patient insurance coverage before services are rendered."
          />
          <ServiceCard
            title="Payment Posting & EOB Reconciliation"
            description="Accurate posting of payments and explanation of benefits."
          />
          <ServiceCard
            title="Reporting & Analytics"
            description="Gain financial insights with clear dashboards and KPI tracking."
          />
          <ServiceCard
            title="Patient Billing & Statements"
            description="Simplified statements and patient support for smooth collections."
          />
          <ServiceCard
            title="Audit & Compliance Support"
            description="Protect your practice with compliance-driven audits."
          />
        </div>
      </section>
      <CTASection />
      <Footer />
    </>
  );
}
