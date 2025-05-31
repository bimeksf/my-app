


interface CardProps {
  title: string
  slug?: string
  date?: Date
  author?: string
  description: string
  tags: string[]
}


export default function Card({title, date, description , tags =[] } : CardProps) {
  return (
    <div className="shadow-sm p-4 rounded-md w-[420px] h-[550px] hover:shadow-2xl hover:bg-slate-50 hover:opacity-90  hover:scale-105   transition-all duration-200 ease-in-out ">
     

      <h1 className="text-2xl font-bold">{title}</h1>
      <p className="text-sm font-light my-2 text-slate-700">
       {description}
      </p>
      <p className="my-2 text-sm text-slate-500">       {date?.toLocaleDateString() || '—'}
</p>

      <div className="flex flex-wrap gap-2 text-sm">
        {tags.map((tag, index) => (
          <div key={index} className="bg-slate-600 text-white rounded-md px-2 py-1">
            {tag}
          </div>
        ))}
      </div>
    </div>
  );
}
