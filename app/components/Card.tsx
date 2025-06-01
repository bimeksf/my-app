import Link from 'next/link';
interface CardProps {
  title: string;
  author?: string;
  date?: Date;
  description: string;
  tags?: string[];
  slug: string;
}
export default function Card({ title, author, date, description, tags, slug }: CardProps) {
  return (
    <Link href={`/posts/${slug}`}>
      <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-sm text-gray-500 mb-2">
          {author} · {date?.toLocaleDateString()}
        </p>
        <p className="text-gray-700 mb-2">{description}</p>
        <div className="flex gap-2 flex-wrap text-sm text-blue-600">
          {tags?.map((tag, index) => (
            <span className='p-2 bg-amber-300 rounded-2xl' key={index}>{tag}</span>
          ))}
        </div>
      </div>
    </Link>
  );
}
