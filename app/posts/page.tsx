
import Card from "../components/Card"


export default function page(){

const posts = getAllPosts()

    return (

            <section>


            <div>
                {posts.map(post=>(
                <Card  title={post.title} author={post.author} date={post.date} description={post.description}   tags={post.tags}/>
                ))}
            </div>


            </section>




    )


}