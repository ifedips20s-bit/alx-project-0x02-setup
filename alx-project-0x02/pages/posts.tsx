import Header from "@/components/layout/Header";

export default function PostsPage() {
  return (
    <div>
      <Header />
      <main className="flex flex-col items-center justify-center min-h-screen gap-6 p-6">
        <h1 className="text-4xl font-bold mb-6">Posts Page</h1>
        <p className="text-gray-700">This is where posts will be displayed.</p>
      </main>
    </div>
  );
}
