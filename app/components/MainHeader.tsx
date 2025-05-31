import Link from "next/link";

export default function MainHeader() {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-6 py-4 flex justify-center">
        <ul className="flex gap-8 text-lg font-medium text-gray-700">
          <li>
            <Link
              href="/"
              className="hover:text-blue-600 hover:underline transition"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              href="/posts"
              className="hover:text-blue-600 hover:underline transition"
            >
              All Posts
            </Link>
          </li>

          <li>
            <Link
              href="/posts/share"
              className="hover:text-blue-600 hover:underline transition"
            >
              Add Post
            </Link>
          </li>
        </ul>
      </nav>
    </header>
    
  );
}
