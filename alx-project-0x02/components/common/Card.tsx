import { type CardProps } from "@/interfaces";

export default function Card({ title, content }: CardProps) {
  return (
    <div className="border rounded-lg shadow-md p-6 bg-white hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-2xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-700">{content}</p>
    </div>
  );
}
