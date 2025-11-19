import { useState } from "react";
import Header from "@/components/layout/Header";
import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";
import { type CardProps } from "@/interfaces";

export default function HomePage() {
  const [posts, setPosts] = useState<CardProps[]>([
    { title: "Card 1", content: "This is the content of Card 1." },
    { title: "Card 2", content: "Here is some different content for Card 2." }
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <Header />
      <main className="flex flex-col items-center justify-center min-h-screen gap-6 p-6">
        <h1 className="text-4xl font-bold mb-6">Home Page</h1>

        <button
          onClick={() => setIsModalOpen(true)}
          className="px-6 py-2 bg-green-500 text-white rounded mb-4"
        >
          Add New Post
        </button>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
          {posts.map((post, index) => (
            <Card key={index} title={post.title} content={post.content} />
          ))}
        </div>

        <PostModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          addPost={setPosts}
        />
      </main>
    </div>
  );
}
