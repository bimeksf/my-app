'use client';

import { FC, MouseEvent } from "react";
import { Post } from "../../lib/actions";

interface MiniNavProps {
  posts: Post[];
  onClick: (tag: string) => void;
  activeTags: string[] ;
}

export const MiniNav: FC<MiniNavProps> = ({ posts, onClick, activeTags }) => {
  const uniqueTags = Array.from(
    new Set(posts.flatMap((post) => post.tags?.split(',').map(tag => tag.trim()) || []))
  );



  return (
    <ul className="flex gap-2 flex-wrap justify-center">
      {uniqueTags.map((tag) => {
                  const isActive = activeTags.includes(tag);



                  
                  
               return   (
                      <li
                      key={tag}
                      onClick={() => onClick(tag)}
                      className={`cursor-pointer px-3 py-1 rounded-full text-white ${
        isActive ? "bg-blue-600" : "bg-slate-600"
      }`}
                      >
          {tag}
        </li>
      )
      })}

    </ul>
  );
};
