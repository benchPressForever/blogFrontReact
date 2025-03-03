import { useDispatch, useSelector} from "react-redux";
import { ChangeIsAuth,ChangeUser } from "../../store/userReducer";
import React, { useState } from "react";
import { registration } from "../../http/userApi";
import "./Register.css"
import { MY_POSTS_ROUTE } from "../../utils/constants";
import { useNavigate } from "react-router-dom";

function Register(){
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('');
    const [confirm_password,setConfirmPassword] = useState('');
    const [name,setName] = useState('');

    const {User} = useSelector(state => state.User)

    const dispatch = useDispatch()

    const navigate = useNavigate();
    
    const handleSubmit = event => {
        event.preventDefault();
    }
    
    function timeout(delay) {
        return new Promise( res => setTimeout(res, delay) );
    }

    const clickSingUp = async () => {
        try{
            const data = await registration(name,email,password,confirm_password);
            dispatch(ChangeIsAuth());
            dispatch(ChangeUser(data));
            alert("Регистрация прошла успешно!")
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
			<div className="signup">
				<form onSubmit = {handleSubmit} >
					<h2>Регистрация</h2>
                    <input  value = {name} onChange={ e => setName(e.target.value)} type="name" name="name" placeholder="Name" required=""/>
                    <input value={email} onChange={ e => setEmail(e.target.value)} type="email" name="email" placeholder="Email" required=""/>
					<input value={password} onChange={ e => setPassword(e.target.value)}  type="password" name="pswd" placeholder="Пароль" required=""/>
                    <input value={confirm_password} onChange={ e => setConfirmPassword(e.target.value)}  type="password" name="confpswd" placeholder="Повторите пароль" required=""/>
					<button type = "submit" onClick={() => clickSingUp()} >Регистрация</button>
				</form>
			</div>
	    </div>
    </div>
    
    );
}

export default Register;