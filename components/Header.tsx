import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">Carenox Health</h1>
        <nav className="space-x-6">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/specialties">Specialties</Link>
          <Link href="/testimonials">Testimonials</Link>
          <Link href="/faq">FAQ</Link>
          <Link
            href="/contact"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
