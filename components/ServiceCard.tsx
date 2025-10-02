import Link from "next/link";

interface Props {
  title: string;
  description: string;
}

export default function ServiceCard({ title, description }: Props) {
  return (
    <div className="p-6 border rounded-lg shadow hover:shadow-lg transition bg-white">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
      <Link href="/services" className="text-blue-600 font-medium mt-3 inline-block">
        Learn More ?
      </Link>
    </div>
  );
}
