import Card from "../components/Card";
import { getAllPosts, Post } from "../../lib/actions";

export default async function Page() {
  const posts: Post[] = await getAllPosts();

  return (
    <section>
      <div>
        {posts.map((post) => (
          <Card
            key={post.id}
            title={post.title}
            author={post.author ?? undefined}
            date={post.date ? new Date(post.date) : undefined}
            description={post.description}
            tags={post.tags ? post.tags.split(",") : []}
          />
        ))}
      </div>
    </section>
  );
}
