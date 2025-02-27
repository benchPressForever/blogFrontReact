
import "./HeaderStyle.css"
import { LOGIN_ROUTE, MAIN_ROUTE, MY_POSTS_ROUTE, POSTS_ROUTE, REGIST_ROUTE} from "../../utils/constants";
import React from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../http/userApi";
import { ChangeIsAuth } from "../../store/userReducer";

export function Header(){

    const S1 = useMediaQuery({ maxWidth:1100 });
    const {IsAuth} = useSelector(state => state.User)
    const dispatch = useDispatch();


    function Logout(){
        logout().then(data => console.log(data));
        dispatch(ChangeIsAuth());
    }


    return(
        <header className="headerDiv">
                <Link to = {MAIN_ROUTE}>
                  <div className="divRow">
                      <img style={{marginLeft:"2vw"}} src = {process.env.PUBLIC_URL+"/img/postgramm.png"} width={40} height={40} alt = "Логотип"/>
                      <h5 style={{marginLeft:"2vw",fontWeight:500}}>Blog</h5>
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
                        {IsAuth?
                            <>
                                <Link to = {MY_POSTS_ROUTE} className="dropdown-item">Мои посты</Link>
                                <a onClick={() => Logout()} className="dropdown-item">Выйти</a>
                            </>
                            :
                            <>
                                <Link to = {LOGIN_ROUTE} className="dropdown-item">Авторизация</Link>
                                <Link to = {REGIST_ROUTE} className="dropdown-item">Регистрация</Link>
                            </>
                        }
                        
                    </ul>

                </div>


                :
                <>
                    <Link to = {POSTS_ROUTE} className="item">Посты</Link>
                    {IsAuth?
                            <>
                                <Link to = {MY_POSTS_ROUTE} className="item">Мои посты</Link>
                                <a onClick={() => Logout()} className="item">Выйти</a>
                            </>
                            :
                            <>
                                
                                <Link to = {LOGIN_ROUTE} className="item">Авторизация</Link>
                                <Link to = {REGIST_ROUTE} className="item">Регистрация</Link>
                            </>
                    }
                
                </>}
                
            </div>
            




        </header>
    );
}