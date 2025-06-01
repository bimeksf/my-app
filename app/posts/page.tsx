// app/posts/page.tsx
import { getAllPosts, Post } from "../../lib/actions";
import ClientWrapper from "./ClientWrapper";

export default async function Page() {
  const posts: Post[] = await getAllPosts();
  return <ClientWrapper posts={posts} />;
}
