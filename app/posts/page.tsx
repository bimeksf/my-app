import Card from "../components/Card";
import { getAllPosts, Post } from "../../lib/actions";

export default async function Page() {
  const posts: Post[] = await getAllPosts();

  return (
    <section>
                <div className="flex gap-2 justify-center p-4">


            {posts.map(tag=><button className="bg-slate-600 p-2 rounded-2xl text-white">{tag.tags}</button>)}

                </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {posts.map((post) => (
        <div key={post.id} className="flex justify-center">

          <Card
            title={post.title}
            author={post.author ?? undefined}
            date={post.date ? new Date(post.date) : undefined}
            description={post.description}
            tags={post.tags ? post.tags.split(",") : []}
            />
            </div>
        ))}
      </div>
    </section>
  );
}
