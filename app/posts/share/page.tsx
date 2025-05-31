'use client';

import { useFormState } from "react-dom";
import { sharePost } from "@/lib/actions";

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

  const [state, formAction] = useFormState(sharePost, initialState);

  return (
    <>
      <form action={formAction}>
        <div className="flex flex-col">
          <label>
            Title
            <input type="text" name="title" required />
          </label>
        </div>

        <label>
          Author
          <input type="text" name="author" required />
        </label>

        <label>
          Tags
          <input type="text" name="tags" required />
        </label>

        <label>
          Description
          <input type="text" name="description" required />
        </label>

        <button type="submit">Submit</button>
      </form>

      {state.message && <p>{state.message}</p>}
    </>
  );
}
