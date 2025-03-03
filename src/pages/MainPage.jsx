import { useNavigate } from "react-router-dom"
import { POSTS_ROUTE } from "../utils/constants"


export function MainPage(){

    const navigate = useNavigate()

    return(
        <div style = {{width:"100vw",height:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
            <h1>
                Добро пожаловать в наш БЛОГ!
            </h1>
            <a class = "btn btn-success" onClick={() => navigate(POSTS_ROUTE)}>
                    Перейти к постам
            </a>
        
        </div>
        

    )
}