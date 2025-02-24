import { AppRouter } from "./components/AppRouter";
import { Header } from "./components/HeaderC/Header";

import { Footer } from "./components/Footer/Footer";
import "./index.css"
import { useSelector } from "react-redux";
import React from "react";

function App() {

  

  React.useEffect(() => {
    
  },[]);

  return (
    <div style = {{position:"relative"}}> 

      <Header/>

      <AppRouter/>

      <Footer/>
   
  
    </div>
  );
}

export default App;
