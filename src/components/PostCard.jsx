
import { Link } from "react-router-dom";

export default function PostCard(props) {

    // destructuring dell'oggetto props
    const { post } = props;


    return (
        <>
            {
                <div className='postItem' key={post.id}>
                    <h2>{post.title}</h2>
                    <img src={post.image} alt={post.title} />
                    <p>{post.tags.join(", ")}</p>
                    <Link to={`/posts/${post.id}`}>Vai al dettaglio</Link>
                </div >
            }
        </>
    );
}