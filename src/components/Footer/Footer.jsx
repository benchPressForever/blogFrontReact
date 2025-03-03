import ScrollAnimation from "react-animate-on-scroll";
import "./Footer.css"
import { useMediaQuery } from "react-responsive";
import { useDispatch } from "react-redux";
import { LOGIN_ROUTE, POSTS_ROUTE, REGIST_ROUTE } from "../../utils/constants";
import { Link } from "react-router-dom";


export function Footer(){

    const dispatch = useDispatch();
    const S1 = useMediaQuery({ maxWidth: 900 });

    return(
        <div className="footer">

            <div className="row">
                    
            </div>

            <div className="row">
                <img src = {process.env.PUBLIC_URL+"/img/vk.png"} width="30px" height="30px"/>
                
            </div>

            <div className="row">
                <Link to = {POSTS_ROUTE}>Посты</Link>
                <Link to = {REGIST_ROUTE}>Регистрация</Link>
                <Link to = {LOGIN_ROUTE}>Авторизация</Link>
            </div>

            <div className="row">
                POSTGRAM Copyright © 2025 Postgram - All rights reserved || Designed By: BenchPressForever 
            </div>
        </div>
    );
}