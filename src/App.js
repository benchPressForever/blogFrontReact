import { AppRouter } from "./components/AppRouter";
import { Header } from "./components/HeaderC/Header";

import { Footer } from "./components/Footer/Footer";
import "./index.css"
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { getCategories } from "./http/categoryApi";
import { ChangeCategories } from "./store/categoryReducer";
import { ChangePosts } from "./store/postsReducer";
import { getPosts } from "./http/postsApi";

function App() {

  const dispatch = useDispatch();

   useEffect(() => {
              try {
                  getCategories().then(data => dispatch(ChangeCategories(data)))
                  getPosts().then(data => dispatch(ChangePosts(data)))
              }
              catch(error){
                  alert(error.response.data.message) 
              }
    },[]);

  return (
    <div style = {{position:"relative"}}> 

      <Header/>
      <div className="content">
        <AppRouter/>
      </div>

      <Footer/>
   
  
    </div>
  );
}

export default App;
