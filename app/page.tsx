
import Link from "next/link";



export default function Home() {
  return (
    <>
    
    <section className="h-screen flex justify-center bg-[#eff0f3]">

      <div className="text-center p-4 m-auto">

    <h1 className="my-4 text-4xl">Browse all blog posts</h1>
    <Link href="/posts"  className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition">Explore</Link>
      </div>
    </section>
    </>
  );
}
