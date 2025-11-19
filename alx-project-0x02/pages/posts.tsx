import Header from "@/components/layout/Header";
import PostCard from "@/components/common/PostCard";
import { type PostProps } from "@/interfaces";

interface PostsPageProps {
  posts: PostProps[];
}

export default function PostsPage({ posts }: PostsPageProps) {
  return (
    <div>
      <Header />
      <main className="flex flex-col items-center justify-center min-h-screen gap-6 p-6">
        <h1 className="text-4xl font-bold mb-6">Posts Page</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
          {posts.map(post => (
            <PostCard
              key={post.title + post.userId}
              title={post.title}
              content={post.content}
              userId={post.userId}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

// Fetch posts at build time
export async function getStaticProps() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10");
    const data = await res.json();

    const posts: PostProps[] = data.map((post: any) => ({
      userId: post.userId,
      title: post.title,
      content: post.body
    }));

    return {
      props: { posts },
      revalidate: 10 // optional: ISR to refresh every 10 seconds
    };
  } catch (error) {
    console.error(error);
    return {
      props: { posts: [] }
    };
  }
}
