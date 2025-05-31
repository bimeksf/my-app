
interface CardDetailProps {
  title: string
  slug?: string
  date?: Date
  author?: string
  description: string
  tags: string[]
}


export default function CardDetail({title, date, author, description, tags }: CardDetailProps) {
  return (
    <>
      <h1 className="text-4xl font-extrabold text-center mb-6 text-gray-900">
      {title}
      </h1>

      <div className="flex flex-wrap gap-3 justify-center mb-6">
        {tags.map((tag,index) => (
          <span
            key={tag + index}
            className="bg-slate-700 text-white rounded-full px-3 py-1 text-xs font-semibold  tracking-wide"
          >
            {tag}
          </span>
        ))}
      </div>

      <p className="text-center text-gray-500 text-sm mb-1">{date?.toLocaleDateString() || '—'}</p>
      <p className="text-center  text-gray-700 mb-6 font-bold">By {author}</p>

      <div className="max-w-3xl mx-auto text-justify text-gray-800 leading-relaxed space-y-6 text-base font-light">
        <p>
         {description}
        </p>
      
      </div>
    </>
  );
}
