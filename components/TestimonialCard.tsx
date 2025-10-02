interface Props {
  name: string;
  quote: string;
}

export default function TestimonialCard({ name, quote }: Props) {
  return (
    <div className="p-6 bg-white rounded-lg shadow">
      <p className="italic text-gray-700">&quot;{quote}&quot;</p>
      <p className="mt-4 font-semibold text-gray-900">- {name}</p>
    </div>
  );
}
