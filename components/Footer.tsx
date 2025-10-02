import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-white font-semibold mb-3">Carenox Health</h3>
          <p className="text-sm">
            Trusted medical billing & revenue cycle management for U.S. clinics.
          </p>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/specialties">Specialties</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/privacy">Privacy Policy</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-3">Contact Us</h3>
          <p className="text-sm">Email: info@carenox.com</p>
          <p className="text-sm">Phone: (123) 456-7890</p>
          <p className="text-sm">Serving clinics across the United States</p>
        </div>
      </div>
      <div className="text-center mt-6 text-sm text-gray-500">
        © {new Date().getFullYear()} Carenox Health. All rights reserved.
      </div>
    </footer>
  );
}
