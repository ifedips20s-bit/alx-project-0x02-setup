import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();

  const linkClasses = (path: string) =>
    router.pathname === path
      ? "text-white font-bold border-b-2 border-white"
      : "text-white hover:text-gray-200";

  return (
    <header className="bg-blue-500 p-4">
      <nav className="flex gap-6">
        <Link href="/home" className={linkClasses("/home")}>
          Home
        </Link>
        <Link href="/about" className={linkClasses("/about")}>
          About
        </Link>
        <Link href="/posts" className={linkClasses("/posts")}>
          Posts
        </Link>
      </nav>
    </header>
  );
}
