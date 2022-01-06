import "./post.css";
import {Link} from "react-router-dom"
// https://st2.depositphotos.com/1288351/5862/i/600/depositphotos_58628561-stock-photo-night-sky-praise.jpg
export default function Post({post}) {
    const PF = "http://localhost:8000/images/"
    return (
        <div className="post">
            {post.photo && (
            <img src={PF+post.photo} 
            alt="" className="postImg" />
            )}
            
            <div className="postInfo">
                <div className="postCats">
                    {post.categories.map((c)=>(
                    <span className="postCat">
                   {c.name}  
                  </span>
                    ))}
                    
                    
                </div>
                <Link to={`/post/${post._id}`} className="link">
                <span className="postTitle">{post.title}</span>
                </Link>
                
                <hr/>
                <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
            </div>
            <p className="postDesc">
            {post.desc}
            </p>
        </div>
    )
}
