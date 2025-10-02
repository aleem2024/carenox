import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CTASection from "../components/CTASection";
import TestimonialCard from "../components/TestimonialCard";
export default function Testimonials() {
  return (
    <>
      <Head>
        <title>Client Testimonials - Carenox Health</title>
        <meta
          name="description"
          content="See what healthcare providers say about working with Carenox Health for their medical billing and revenue cycle management needs."
        />
      </Head>
      <Header />
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">What Our Clients Say</h1>
        <p className="mt-4 text-lg max-w-3xl mx-auto">
          Hear from healthcare providers who trust Carenox Health to manage their billing and revenue cycle.
        </p>
      </section>
      {/* Testimonials Grid */}
      <section className="py-20 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">Trusted by Clinics Nationwide</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <TestimonialCard
            name="Clinic Manager, Texas"
            quote="Carenox reduced our denials by 40% and improved cash flow within the first quarter."
          />
          <TestimonialCard
            name="Pediatrician, Florida"
            quote="Their team is professional, responsive, and knowledgeable about pediatric billing. Highly recommended!"
          />
          <TestimonialCard
            name="Orthopedic Surgeon, New York"
            quote="We now have full transparency with reporting. Collections are faster, and staff stress is way down."
          />
          <TestimonialCard
            name="Family Practice, California"
            quote="Carenox feels like an extension of our own team. They handle everything so we can focus on patient care."
          />
          <TestimonialCard
            name="Dermatology Group, Illinois"
            quote="Accurate coding and smoother claims submission. We’ve seen real revenue growth since switching."
          />
          <TestimonialCard
            name="Urgent Care Center, Ohio"
            quote="Billing for high patient volumes used to overwhelm us, but Carenox made it manageable and efficient."
          />
        </div>
      </section>
      {/* Case Study Highlight */}
      <section className="py-20 px-6 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold mb-6">Case Study: Cardiology Practice</h2>
        <p className="max-w-4xl mx-auto text-lg text-gray-700 leading-relaxed">
          A mid-sized cardiology group in Texas partnered with Carenox after struggling
          with high denial rates. Within six months, their clean claim rate improved
          from 85% to 98%, and collections increased by 25%. The practice now enjoys
          predictable cash flow and less administrative burden.
        </p>
      </section>
      <CTASection />
      <Footer />
    </>
  );
}
