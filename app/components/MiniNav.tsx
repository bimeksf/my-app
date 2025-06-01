'use client';

import { FC, MouseEvent } from "react";
import { Post } from "../../lib/actions";

interface MiniNavProps {
  posts: Post[];
  onClick: (tag: string) => void;
  activeTag: string | null;
}

export const MiniNav: FC<MiniNavProps> = ({ posts, onClick, activeTag }) => {
  const uniqueTags = Array.from(
    new Set(posts.flatMap((post) => post.tags?.split(',').map(tag => tag.trim()) || []))
  );

  const handleClick = (tag: string) => (event: MouseEvent<HTMLLIElement>) => {
    onClick(tag);
  };

  return (
    <ul className="flex gap-2 flex-wrap justify-center">
      {uniqueTags.map((tag) => (
        <li
          key={tag}
          data-active={tag === activeTag}
          onClick={handleClick(tag)}
          className="cursor-pointer px-4 py-2 rounded-full text-white bg-slate-600 hover:bg-blue-500 transition-colors duration-200 data-[active=true]:bg-blue-600"
        >
          {tag}
        </li>
      ))}
    </ul>
  );
};
