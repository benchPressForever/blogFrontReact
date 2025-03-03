import React, { useState } from "react";
import "./Posts.css"
import { getPosts } from "../../http/postsApi";
import { useEffect } from "react";
import { PostRow } from "../../components/PostRow/PostRow";
import { useDispatch, useSelector } from "react-redux";
import { ChangePosts } from "../../store/postsReducer";
import MyLoader from "../../components/Skeleton";
import { CREATE_POST_ROUTE } from "../../utils/constants";
import { Link } from "react-router-dom";

export function PostsPage(){

    const dispatch = useDispatch();
    const Posts = useSelector(state => state.Post.Posts);
    const [SearchValue,setSearchValue] = useState('');
    const [IsLoading,setIsLoading] = useState(false)

    useEffect(() => {
        try {
            getPosts().then(data => dispatch(ChangePosts(data)))
        }
        catch(error){
            alert(error.response.data.message) 
        }
        setIsLoading(true)
    },[]);

    function onChangeSearchInput(event){
        setSearchValue(event.target.value);
    }

    return(
        <div className="PostsDiv">
            
            <div className="blockHeaderDiv">
                <h1 style={{marginBottom:"0"}}>Посты</h1>
                <div className="search-block">
                        <img src={process.env.PUBLIC_URL+"img/search.png"} width={18} height={18} alt="Search" />
                        <input onChange={onChangeSearchInput} placeholder="Поиск..."  value = {SearchValue}/>
                        {SearchValue ? <img onClick = {()=> setSearchValue("")} className="clearSearch" src = "/img/btn-remove.png" alt = "clear"/> : undefined}
                </div>
            </div>

            <Link></Link>
            
            <div className="firstPostBlock" >
                {IsLoading ?
                    Posts.filter(e => e.title.toLowerCase().includes(SearchValue.toLowerCase())).map((e) => 
                        <PostRow key = {e.id} post = {e} />)
                    :
                    [...Array(10)].map(()=> 
                            <MyLoader/>
                )
                }
            </div>
        </div>
    );
}