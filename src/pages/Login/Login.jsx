import { useDispatch, useSelector} from "react-redux";
import { ChangeIsAuth,ChangeUser } from "../../store/userReducer";
import React, { useState } from "react";
import { login} from "../../http/userApi";
import "./Login.css"
import { MY_POSTS_ROUTE } from "../../utils/constants";
import { useNavigate } from "react-router-dom";

function Login(){
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('');

    const {User} = useSelector(state => state.User)

    const dispatch = useDispatch()

   const navigate = useNavigate();
   
    const handleSubmit = event => {
        event.preventDefault();
    }
   
    function timeout(delay) {
        return new Promise( res => setTimeout(res, delay) );
    }

    const clickLogin = async () => {
        try{
            const data = await login(email,password)
            dispatch(ChangeIsAuth());
            dispatch(ChangeUser(data.user));
            alert("Авторизация прошла успешно!")
            await timeout(500);
            navigate(MY_POSTS_ROUTE);
        }
        catch(e){
            if(e.response.data.message) alert(e.response.data.message);
            else alert(e.message)
        }
    }

    return(
    <div className="cartEmpty">
             <div className="main">  	
		<input type="checkbox" id="chk" aria-hidden="true"/>

			<div className="Login">
				<form onSubmit = {handleSubmit}>
					<h2>Авторизация</h2>
					<input  value = {email} onChange={ e => setEmail(e.target.value)} type="email" name="email" placeholder="Email" required=""/>
					<input value = {password} onChange={ e => setPassword(e.target.value)} type="password" name="pswd" placeholder="Пароль" required=""/>
					<button type = "submit" onClick={() => clickLogin()} >Вход</button>
				</form>
			</div>
	    </div>
    </div>
    
    );
}

export default Login;