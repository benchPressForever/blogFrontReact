import { MYINFO_ROUTE } from "../../utils/constants";
import "./MyInfo.css"
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.compat.css"

import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';



export function MyInfo(){


    return(
    <div className="MainBlock">
        <div className="firstBlock">
        <ScrollAnimation animateIn="fadeIn" >
                <div style = {{color:"white",fontSize:"1.7vw"}}>
                Юрист  высшей <br/>категории 
                </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeIn" >
        <div style = {{position:"absolute",top:"50vh",left:"25vw",color:"gold",fontSize:"4vw"}}>
            Иван Кутырин
        </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeIn" >
            <p style={{color:"#898989",fontWeight:"400",fontSize:"1.2vw"}}>
            Иван Кутырин обладает обширным опытом в
             области гражданского права.
            Он является экспертом в своей области и имеет более 10 лет практического опыта. В процессе 
            своей карьеры он успешно представлял интересы клиентов в различных юридических вопросах, включая 
            арбитражные споры, банкротство, регистрация и оформление сделок, взыскание долгов, строительные подряды.
            <br/><br/>
            <span style = {{fontSize:"1.2vw",color:"gold"}}> 
                Гарантирует реалистическую оценку перспективам дела и защиту вашего бизнеса.
            </span>
            </p>
        </ScrollAnimation>
        </div>
        <div className="secondBlock">
                <img style = {{objectFit:"fill"}} src="img/men2.png" width={"auto"} height={"100%"} />
        </div>


        <div className="lastBlock">
            
                <ScrollAnimation animateIn="fadeIn" >
                    <div className="Block"  style = {{backgroundColor:"gold",color:"black",position:"absolute",top:"10vh",right:"0",height:"10vh"}}>
                        +79278826745
                    </div>
                </ScrollAnimation>
            
            <div className="Block">
                <img className="effect" src="img/telega.png" width={"30%"} height={"auto"}/>
            </div>
            <div className="Block">
                <img className="effect" src="img/wat.png" width={"30%"} height={"auto"}/>
            </div>
            <div className="Block">
                <img className="effect" src="img/vk.png" width={"30%"} height={"auto"}/>
            </div>
        </div>
        
    </div>
    );
}