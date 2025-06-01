'use client';

import { useState, useMemo } from "react";
import { MiniNav } from "../components/MiniNav";
import Card from "../components/Card";
import { Post } from "../../lib/actions";

export default function ClientWrapper({ posts }: { posts: Post[] }) {
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const filteredPosts = useMemo(() => {
    if (!activeTag) return posts;
    return posts.filter((post) =>
      post.tags?.split(",").map(tag => tag.trim()).includes(activeTag)
    );
  }, [activeTag, posts]);

  return (
    <section className="bg-[#eff0f3] min-h-screen">
      <div className="flex gap-2 justify-center p-4">
        <MiniNav posts={posts} onClick={(tag) => setActiveTag(activeTag === tag ? null : tag)} activeTag={activeTag} />
      </div>



      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filteredPosts.map((post) => (
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
