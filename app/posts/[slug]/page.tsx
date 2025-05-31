"use client"

import { useFormState } from "react-dom";
import { sharePost } from "@/lib/actions";



    interface PostDetailProps {
  params: { slug: string }; 
}
    export default function PostDetail({params}:PostDetailProps){
       const {slug} = params




            type FormStateType = {
  message: string;
};


       const initialState: FormStateType = {
message: '',
};
const [state, formAction] =useFormState(sharePost, initialState)        
        return <>
        
            <form action={formAction}>


                    <div className="flex flex-col">

                    <label htmlFor="">
                            Title 
                        <input type="text" name="title"/>

                    </label>
                    </div>

                    <label htmlFor="">
                                Author
                        <input type="text" name="author"/>
                    </label>

                    
                    <label htmlFor="">
                                Tags
                        <input type="text" name="tags" />
                    </label>

                    <label htmlFor="">
                        Descritpiton
                        <input type="text" name="description"/>
                    </label>

                        
                    <button type="button">Submit</button>

            </form>

        
        
        </>

    }