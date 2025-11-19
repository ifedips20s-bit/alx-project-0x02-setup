import { type UserProps } from "@/interfaces";

export default function UserCard({ name, email, address }: UserProps) {
  return (
    <div className="border rounded-lg shadow-md p-6 bg-white hover:shadow-xl transition-all duration-300">
      <h2 className="text-xl font-semibold">{name}</h2>
      <p className="text-gray-700 mt-1">{email}</p>
      
      <div className="mt-3">
        <p className="text-sm text-gray-500">
          {address.street}, {address.city}
        </p>
      </div>
    </div>
  );
}
