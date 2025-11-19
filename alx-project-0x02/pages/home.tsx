import Header from "../components/layout/Header";
import Card from "../components/common/Card";

export default function HomePage() {
  return (
    <div>
      <Header />
      <main className="flex flex-col items-center justify-center min-h-screen gap-6 p-6">
        <h1 className="text-4xl font-bold mb-6">Home Page</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
          <Card title="Card 1" content="This is the content of Card 1." />
          <Card title="Card 2" content="Here is some different content for Card 2." />
          <Card title="Card 3" content="Card 3 content goes here with more details." />
        </div>
      </main>
    </div>
  );
}
