import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-20 px-6 bg-blue-600 text-white text-center">
      <h2 className="text-3xl font-bold mb-4">
        Ready to Improve Your Revenue Cycle?
      </h2>
      <p className="mb-8 text-lg">
        Book a free consultation today and discover how Carenox can help your
        practice grow.
      </p>
      <Link
        href="/contact"
        className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow hover:bg-gray-200"
      >
        Request a Free Consultation
      </Link>
    </section>
  );
}
