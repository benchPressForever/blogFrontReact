import React, { useState } from "react";
import { getPosts } from "../../http/postsApi";
import { useEffect } from "react";
import { PostRow } from "../../components/PostRow/PostRow";
import { useDispatch, useSelector } from "react-redux";
import { ChangePosts } from "../../store/postsReducer";
import { useNavigate } from "react-router-dom";
import { CREATE_POST_ROUTE } from "../../utils/constants";

export function MyPostsPage(){

    const dispatch = useDispatch();
    const Posts = useSelector(state => state.Post.Posts);
    const {User} = useSelector(state => state.User);
    const [SearchValue,setSearchValue] = useState('');

    const navigate = useNavigate();
    

    useEffect(() => {
        try {
            getPosts().then(data => dispatch(ChangePosts(data)))
        }
        catch(error){
            alert(error.response.data.message) 
        }
    },[]);

    function onChangeSearchInput(event){
        setSearchValue(event.target.value);
    }

    return(
        <div className="PostsDiv">
            
            <div className="blockHeaderDiv">
                <h1 style={{marginBottom:"0"}}>Мои посты</h1>
                <div className="search-block">
                        <img src={process.env.PUBLIC_URL+"img/search.png"} width={18} height={18} alt="Search" />
                        <input onChange={onChangeSearchInput} placeholder="Поиск..."  value = {SearchValue}/>
                        {SearchValue ? <img onClick = {()=> setSearchValue("")} className="clearSearch" src = "/img/btn-remove.png" alt = "clear"/> : undefined}
                </div>
            </div>
            
            <div className="firstPostBlock" >
                {Posts.filter( e => e.user.id === User[0])
                      .filter(e => e.title.toLowerCase().includes(SearchValue.toLowerCase()))
                      .map((e) => 
                    <PostRow key = {e.id} post = {e} />
                )}
                {Posts.filter( e => e.user.id === User[0])
                      .filter(e => e.title.toLowerCase().includes(SearchValue.toLowerCase()))
                      .length < 1 && 
                      <div style = {{width:"100%",height:"auto"}}>
                            <h5>нет постов</h5>
                      </div>
                    
                }
                    <a className="GreenButton" onClick={() => navigate(CREATE_POST_ROUTE)}>
                        Создать пост
                    </a>
                
            </div>
        </div>
    );
}