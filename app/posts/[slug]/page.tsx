import { getAllPosts } from '@/lib/actions';

export default async function PostDetail({ params }: { params: { slug: string } }) {
    const {slug} = params
  const posts = await getAllPosts();
  const post = posts.find(p => p.slug === slug);

  if (!post) return <div>Post nenalezen</div>;

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-sm text-gray-600 mb-4">{post.author} · {post.date}</p>
      <p>{post.description}</p>
    </div>
  );
}
