import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import { type UserProps } from "@/interfaces";

interface UsersPageProps {
  users: UserProps[];
}

export default function UsersPage({ users }: UsersPageProps) {
  return (
    <div>
      <Header />

      <main className="flex flex-col items-center min-h-screen p-6 gap-6">
        <h1 className="text-4xl font-bold mb-4">Users Page</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
          {users.map((user, index) => (
            <UserCard
              key={index}
              name={user.name}
              email={user.email}
              address={user.address}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();

    const users: UserProps[] = data.map((user: any) => ({
      name: user.name,
      email: user.email,
      address: {
        street: user.address.street,
        city: user.address.city,
      },
    }));

    return {
      props: { users },
      revalidate: 10,
    };
  } catch (error) {
    console.error(error);
    return {
      props: { users: [] },
    };
  }
}
