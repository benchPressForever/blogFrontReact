import { useNavigate } from "react-router-dom";
import { POST_ROUTE, POSTS_ROUTE } from "../../utils/constants";
import "./PostRow.css";

export function PostRow({post}){

    const navigate = useNavigate()
    const date = new Date(post.created_at).toLocaleString();

    return(
            <div className="postRow" onClick = {() => navigate(POSTS_ROUTE+'/'+post.id)}>
                
                 <div className="firstDiv">
                    <img src={process.env.PUBLIC_URL+"img/petr.png"} width={"100%"} height={"100%"} style={{borderRadius:"50%"}} />
                 </div>
                
                
                <div className="secondDiv">
                    <h6 >{post.category.name}</h6>
                    <b style={{fontSize:"16px",fontWeight:"400"}}>{post.title}</b>
                </div>

                <div className="lastDiv">
                    <h6 >{date}</h6>
                    <div className="likeDiv">
                        <span style={{fontSize:"16px",marginRight:"5px"}}>❤️</span>
                        <b style={{fontSize:"16px",fontWeight:"400"}}>{post.likes}</b>
                    </div>
                </div>
                
            </div>
    );
}