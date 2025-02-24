
import "./HeaderStyle.css"
import { CONSULTATION_ROUTE, CONTACTS_ROUTE, MAIN_ROUTE, MYINFO_ROUTE, POSTS_ROUTE, SERVICES_ROUTE } from "../../utils/constants";
import React from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

export function Header(){

    const S1 = useMediaQuery({ maxWidth:1100 });


    return(
        <header className="headerDiv">
                <Link to = {MAIN_ROUTE}>
                  <div className="divRow">
                      <img style={{marginLeft:"2vw"}} src = "img/postgramm.png" width={40} height={40} alt = "Логотип"/>
                      <div style={{marginLeft:"2vw",fontWeight:500}}>Постограмм</div>
                  </div>
                </Link>

            <div className="divRow">
                {S1?

                <div className="dropdown" style = {{position:"absolute",top:"2.5vh",right:"19vw"}}>
                    <button className="btn btn-secondary dropdown-toggle" style = {{backgroundColor:"#34abdf",border:"0px",color:"black"}} type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                      меню
                    </button>

                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li> <Link to = {POSTS_ROUTE} className="dropdown-item">Посты</Link></li> 
                    </ul>

                </div>


                :
                <>
                    <Link to = {POSTS_ROUTE} className="item">Посты</Link>
                </>}
                
            </div>
            




        </header>
    );
}