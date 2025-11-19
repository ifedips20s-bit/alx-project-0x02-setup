import { type PostProps } from "@/interfaces";

export default function PostCard({ userId, title, content }: PostProps) {
  return (
    <div className="border rounded-lg shadow-md p-6 bg-white hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-700 mb-2">{content}</p>
      <p className="text-sm text-gray-500">User ID: {userId}</p>
    </div>
  );
}
