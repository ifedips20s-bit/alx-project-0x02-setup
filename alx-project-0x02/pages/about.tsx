import Header from "@/components/layout/Header";
import Button from "@/components/common/Button";

export default function AboutPage() {
  return (
    <div>
      <Header />
      <main className="flex flex-col items-center justify-center min-h-screen gap-6 p-6">
        <h1 className="text-4xl font-bold mb-6">About Page</h1>
        <div className="flex gap-4">
          <Button label="Small Rounded" size="small" shape="rounded-sm" />
          <Button label="Medium Rounded" size="medium" shape="rounded-md" />
          <Button label="Large Rounded" size="large" shape="rounded-full" />
        </div>
      </main>
    </div>
  );
}
