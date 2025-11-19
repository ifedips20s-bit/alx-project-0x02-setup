import Header from "../components/layout/Header";

export default function HomePage() {
  return (
    <div>
      <Header />
      <main className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-4xl font-bold mb-4">Home Page</h1>
        <p className="text-lg text-gray-700">Welcome to the Home page of the ALX Next.js project.</p>
      </main>
    </div>
  );
}
