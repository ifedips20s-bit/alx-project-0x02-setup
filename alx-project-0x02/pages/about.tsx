import Header from "../components/layout/Header";

export default function AboutPage() {
  return (
    <div>
      <Header />
      <main className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-4xl font-bold mb-4">About Page</h1>
        <p className="text-lg text-gray-700">This page contains information about the ALX Next.js project.</p>
      </main>
    </div>
  );
}
