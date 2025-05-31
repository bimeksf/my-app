'use client';

import { useFormState } from "react-dom";
import { sharePost } from "@/lib/actions";
import { useActionState } from "react";

interface PostDetailProps {
  params: { slug: string }; 
}

type FormStateType = {
  message: string;
};

export default function PostDetail() {
  const initialState: FormStateType = {
    message: '',
  };

  const [state, formAction] = useActionState(sharePost, initialState);

  return (
    <div className="p-4">
      <form action={formAction} className="max-w-md mx-auto p-6 bg-white rounded shadow-md space-y-6">
        <div className="flex flex-col">
          <label className="mb-2 font-semibold text-gray-700">
            Title
            <input
              type="text"
              name="title"
              required
              className="mt-1 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </label>
        </div>

        <label className="flex flex-col mb-4 font-semibold text-gray-700">
          Author
          <input
            type="text"
            name="author"
            required
            className="mt-1 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </label>

        <label className="flex flex-col mb-4 font-semibold text-gray-700">
          Tags
          <input
            type="text"
            name="tags"
            required
            className="mt-1 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </label>

        <label className="flex flex-col mb-4 font-semibold text-gray-700">
          Description
          <input
            type="text"
            name="description"
            required
            className="mt-1 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </label>

        <button
          type="submit"
          className="w-full py-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>

      {state.message && (
        <p className="max-w-md mx-auto mt-4 p-3 bg-red-100 text-red-700 rounded">
          {state.message}
        </p>
      )}
    </div>
  );
}
