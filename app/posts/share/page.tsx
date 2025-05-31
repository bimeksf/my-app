
interface CardDetailProps {
  title: string
  slug?: string
  date?: Date
  author?: string
  description: string
  tags: string[],
params: { slug: string }; 
}

export default async function PostDetail() {





  return (
    <>

      <form>
          <label htmlFor="">
              Title
              <input type="text" name="title"/>
          </label>
          <label htmlFor="">
              Author
              <input type="text" name="author"/>
          </label>
          <label htmlFor="">
              tags
              <input type="text" name="tags"/>
          </label>
          <label htmlFor="">
              descritpiton
              <input type="text" name="descritpiton"/>
          </label>
        

        <button type="submit">Submit</button>
        
        
        
        </form>      
    </>
  )
}
