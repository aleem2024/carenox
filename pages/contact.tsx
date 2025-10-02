import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CTASection from "../components/CTASection";
export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Us - Carenox Health</title>
        <meta
          name="description"
          content="Get in touch with Carenox Health for medical billing and revenue cycle management services. Request a free consultation today."
        />
      </Head>
      <Header />
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">Contact Us</h1>
        <p className="mt-4 text-lg max-w-3xl mx-auto">
          We’d love to hear from you. Reach out for a free consultation or with any questions.
        </p>
      </section>
      {/* Contact Details */}
      <section className="py-16 px-6 max-w-5xl mx-auto text-center">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div>
            <h3 className="font-semibold text-lg">Email</h3>
            <p className="text-gray-600">info@carenox.com</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">Phone</h3>
            <p className="text-gray-600">(123) 456-7890</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">Location</h3>
            <p className="text-gray-600">Serving clinics across the United States</p>
          </div>
        </div>
        {/* Contact Form */}
        <form className="bg-white p-8 shadow rounded-lg text-left max-w-3xl mx-auto space-y-6">
          <div>
            <label className="block text-gray-700 font-medium mb-1">Name</label>
            <input type="text" className="w-full border rounded-lg px-4 py-2" placeholder="Your Name" required />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Email</label>
            <input type="email" className="w-full border rounded-lg px-4 py-2" placeholder="Your Email" required />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Phone</label>
            <input type="tel" className="w-full border rounded-lg px-4 py-2" placeholder="Your Phone" />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Practice Name</label>
            <input type="text" className="w-full border rounded-lg px-4 py-2" placeholder="Your Practice Name" />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Specialty</label>
            <input type="text" className="w-full border rounded-lg px-4 py-2" placeholder="e.g. Cardiology, Pediatrics" />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Message</label>
            <textarea className="w-full border rounded-lg px-4 py-2" rows={4} placeholder="How can we help you?"></textarea>
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700">
            Send Message
          </button>
        </form>
      </section>
      <CTASection />
      <Footer />
    </>
  );
}
