import React from "react";
import "./Consultation.css";
import ScrollAnimation from "react-animate-on-scroll";

import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import { useMediaQuery } from "react-responsive";

export function Consultation(){

    const [fio,setFio] = React.useState("");
    const [number,setNumber] = React.useState("");
    const [email,setEmail] = React.useState("")
    const [service,setService] = React.useState("")
    const [message,setMessage] = React.useState('')

    const submitHandler = (e) =>{
        e.preventDefault();
        setFio(e.target.fio.value);
        setNumber(e.target.number.value);
        setEmail(e.target.email.value);
        setService(e.target.service.value);
        setMessage(e.target.message.value);

        alert(`Данные успешно отправились!\n\nfio: ${fio}\nnumber: ${number}\nemail: ${email}\nservice: ${service}\nmessage: ${message}`);
    }


    
    const S1 = useMediaQuery({ maxWidth: 1050 });

    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    return(
        <div className="MainDivC"> 
            <div className="containerC">
                <div className= {S1 ? "firstDivC1050 firstDivC" : "firstDivC"} >
                        <ScrollAnimation animateIn="fadeIn" delay={200}>
                            <h1>Записаться на консультацию</h1>
                        </ScrollAnimation>
                    <img src = "img/13.png"  />
                </div>

                <form  className = {S1 ? "formC formC1050" : "formC" } onSubmit={submitHandler}>
                        <input 
                            required
                            type="text" 
                            name = "fio"
                            placeholder="ФИО" 
                            value = {fio} 
                            onChange={e => setFio(e.target.value)}/><br/>

                        <input 
                            required
                            type="text" 
                            name = "number"
                            placeholder="Телефон" 
                            value = {number} 
                            onChange={e => setNumber(e.target.value)}/><br/>

                        <input 
                            required
                            type="email" 
                            name = "email"
                            placeholder="Email" 
                            value = {email} 
                            onChange={e => setEmail(e.target.value)}/><br/>

                        <select name = "service" required value = {service} onChange={e => setService(e.target.value)} placeholder = "Выберите услугу">
                            <option value="Банкротство">Банкротство</option>
                            <option value="Уголовные дела">Уголовные дела</option>
                            <option value="Семейные дела">Семейные дела</option>
                            <option value="Административные дела">Административные дела</option>
                            <option value="Налоговые споры">Налоговые споры</option>
                            <option value="Оформление сделок">Оформление сделок</option>
                        </select><br/>

                        <textarea
                            required
                            name = "message"
                            style = {{height:"25%",padding:"2%"}}
                            wrap = "soft"
                            placeholder="Опишите суть обращения" 
                            value = {message} 
                            onChange={e => setMessage(e.target.value)}/><br/>
                        
                        <div style = {{display:"flex",flexDirection:"row",justifyContent:"space-between",backgroundColor:"white",border:"0px solid black",alignItems:"center"}}>
                            <button type = "submit" style = {{height:"70%",borderRadius:"10px",border:"0px",backgroundColor:"gold",padding:"1% 3% 1% 3%"}} >Отправить</button>
                            <div onClick={scrollToTop} style = {{color:"blue",borderBottom:"1px solid blue"}}>Вернуться обратно</div>
                        </div>
                    </form>
                </div>
        </div>
    );
}