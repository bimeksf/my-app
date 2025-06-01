'use client';

import { useState, useMemo } from "react";
import { MiniNav } from "../components/MiniNav";
import Card from "../components/Card";
import { Post } from "../../lib/actions";

export default function ClientWrapper({ posts }: { posts: Post[] }) {
  const [activeTags, setActiveTags] = useState<string[]>([]);

  const toggleTag = (tag: string) => {
    setActiveTags(prev =>
      prev.includes(tag)
        ? prev.filter(t => t !== tag) 
        : [...prev, tag]              
    );
  };

  const filteredPosts = useMemo(() => {
    if (activeTags.length === 0) return posts;

    return posts.filter((post) => {
      const postTags = post.tags?.split(',').map(tag => tag.trim()) || [];
      return postTags.some(tag => activeTags.includes(tag));
    });
  }, [activeTags, posts]);

  return (
    <section className="bg-[#eff0f3] min-h-screen">
      <div className="flex gap-2 justify-center p-4">
        <MiniNav posts={posts} onClick={toggleTag} activeTags={activeTags} />
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
