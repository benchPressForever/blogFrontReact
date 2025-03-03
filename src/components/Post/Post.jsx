import React, { useState } from "react";
import "./Post.css";
import { addLike, deletePost, delLike, getOnePost } from "../../http/postsApi";
import { useNavigate, useParams } from "react-router-dom";
import { Comment } from "../Comment/Comment";
import { useDispatch, useSelector } from "react-redux";
import { EDIT_POST_ROUTE, MY_POSTS_ROUTE, POSTS_ROUTE } from "../../utils/constants";
import { ChangePosts } from "../../store/postsReducer";
import { commentCreate } from "../../http/commentApi";

export function Post(){

    const {id} = useParams();
    const [post,setPost] = useState();
    const [text,setText] = useState();
    const [update,setUpdate] = useState(false);
    const [clickLike,setClickLike] = useState(false);
    const {IsAuth,User} = useSelector(state => state.User);
    const {Posts} = useSelector(state => state.Post)
    const navigate = useNavigate()
    const dispatch = useDispatch()


    React.useEffect(() => {
        getOnePost(id).then( data => setPost(data))
    },[id,update])

    function Like()
    {
        if(!clickLike){
            try{
                addLike(id).then(data => setPost({...post,likes:data.likes}))
            }
            catch(e){
                if(e.response.data.message) alert(e.response.data.message);
                else alert(e.message)
            }
        }
        else{
            try{
                delLike(id).then(data => setPost({...post,likes:data.likes}))
            }
            catch(e){
                if(e.response.data.message) alert(e.response.data.message);
                else alert(e.message)
            }
        }
        setClickLike(!clickLike);
    }

    const handleSubmit = event => {
        event.preventDefault();
    }

    function timeout(delay) {
        return new Promise( res => setTimeout(res, delay) );
    }

    async function Delete(){
        try{
            deletePost(id).then(data => alert(data.message))
            dispatch(ChangePosts([...Posts.filter(e => e.id !== id)]))
            await timeout(500);
            navigate(MY_POSTS_ROUTE)
        }
        catch(e){
            if(e.response.data.message) alert(e.response.data.message);
            else alert(e.message)
        }
        

    }


    async function createComment(){
        try{
            commentCreate({text:text,post_id:id})
            await timeout(500);
            setUpdate(!update);
        }
        catch(e){
            alert(e.response.data.message) 
        }
    }

    function Edit(){
        navigate(EDIT_POST_ROUTE + "/" + id)
    }

    return(
        <div className="container">
        {post ? 
            <>
                <div className="post">
                    <h2>{post.title}</h2>
                    <p style={{marginTop:"10px"}}><b style={{fontSize:"15px"}}>категория</b> : {post.category.name}</p>
                    <div className="textDiv">
                        <img src={process.env.PUBLIC_URL+"/img/petr.png"} style = {{borderRadius:"10px",marginRight:"10px"}} width="25%" height="auto"/>
                        <p>{post.text}</p>
                    </div>
                    
                    <p style={{marginTop:"10px"}}><b style={{fontSize:"15px"}}>автор</b> : {post.user.name}</p>

                    <div className="panel">
                        <div className="likeDiv" onClick={() => Like()} style = {{backgroundColor: clickLike? "#34abdf" : "#eef6fd"}}>
                            <span style={{fontSize:"20px",marginRight:"5px"}}>❤️</span>
                            <b style={{fontSize:"20px",fontWeight:"400"}}>{post.likes}</b>
                        </div>

                        {post.user.id == User[0] && 
                            <>
                                <div className="likeDiv" onClick={() => Edit()} style = {{backgroundColor:"#ffffad",paddingLeft:"0px"}}>
                                    <div style={{width:"30px",height:"30px",marginLeft:"10px"}}>
                                        <img src={process.env.PUBLIC_URL+"/img/edit.png"} width={17} height={17}/>
                                    </div>
                                    <b style={{fontSize:"16px",fontWeight:"400"}}>edit</b>
                                </div>

                                <div className="likeDiv" onClick={() => Delete()} style = {{backgroundColor:"#f0cfc5",paddingLeft:"0px"}}>
                                    <div style={{width:"30px",height:"30px",marginLeft:"10px"}}>
                                        <img src={process.env.PUBLIC_URL+"/img/del.png"} width={20} height={20}/>
                                    </div>
                                    <b style={{fontSize:"16px",fontWeight:"400",color:"red"}}>delete</b>
                                </div>
                            </>
                        }
                    </div>

                    <h3 style={{marginTop:"3%"}}>Комментарии</h3>

                    <div className="commentsDiv">
                        {post.comments.length > 0 ? 
                            post.comments.map((e) => 
                                <Comment comment={e} />
                            )
                            :
                            <p>
                                Нет комментариeв
                            </p>
                        }
                    </div>

                    <div className="comment" style = {{paddingBottom:"15px"}}>
                        <h5>Написать комментарий</h5>

                        <form onSubmit = {handleSubmit}>
                            <div class="mb-3">
                                <input type="" value = {text} onChange={ e => setText(e.target.value)} id="TextInput" class="form-control" placeholder="Текст комментария"/>
                            </div>
                            <button type="submit" class="btn btn-success" onClick={() => createComment()}>Отправить</button>
                        </form>
                    </div>
                </div>

            </>
        :
        undefined}
        </div>
    );
}