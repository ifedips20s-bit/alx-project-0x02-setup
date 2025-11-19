import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-blue-500 text-white p-4">
      <nav className="flex gap-4">
        <Link href="/">Index</Link>
        <Link href="/home">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/posts">Posts</Link>
        <Link href="/users">Users</Link>
      </nav>
    </header>
  );
}
