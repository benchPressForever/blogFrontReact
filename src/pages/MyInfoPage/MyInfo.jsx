import { MYINFO_ROUTE } from "../../utils/constants";
import "./MyInfo.css"
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.compat.css"

import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import { useMediaQuery } from "react-responsive";



export function MyInfo(){

    const S1 = useMediaQuery({ maxWidth: 992 });
    const S2 = useMediaQuery({ maxWidth: 620 });
    const S3 = useMediaQuery({ maxWidth: 500 });

    return(
    <div className="MainBlock" style = {{fontSize: S3 ? "12px" : S2 ? "14px" : S1 ? "16px" : "1.3em"}}>

        {S3 ?
        <div className= {"secondBlock"} style = {{width:"100vw",height:"auto"}}>
                <img style = {{objectFit:"cover"}} src="img/men2.png" width={"100%"} height={"100%"} />
        </div> : undefined}

        <div className= {S3 ? "firstBlock450" : "firstBlock"} >
        <ScrollAnimation animateIn="fadeIn" >
            <div style = {{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginBottom:"2vh",flexWrap: S1 ? "wrap" : "nowrap"}}>
                <h4 style = {{color:"white"}}>
                Юрист  высшей {S1 ? undefined  :<br/>}категории 
                </h4>
                <h1 style = {{color:"gold",marginTop:"1vh"}}>
                    Иван Кутырин
                </h1>
            </div>
        </ScrollAnimation>


        <ScrollAnimation animateIn="fadeIn" >
            <p style={{color:"#898989",fontWeight:"400"}}>
            Иван Кутырин обладает обширным опытом в
             области гражданского права.
            Он является экспертом в своей области и имеет более 10 лет практического опыта. В процессе 
            своей карьеры он успешно представлял интересы клиентов в различных юридических вопросах, включая 
            арбитражные споры, банкротство, регистрация и оформление сделок, взыскание долгов, строительные подряды.
            <br/><br/>
            <span style = {{color:"gold"}}> 
                Гарантирует реалистическую оценку перспективам дела и защиту вашего бизнеса.
            </span>
            </p>
        </ScrollAnimation>
        </div>

        {S3 ? undefined :

        <div className= {"secondBlock"} >
                <img style = {{objectFit:"cover"}} src="img/men2.png" width={"100%"} height={"100%"} />
        </div>}


        
        
    </div>
    );
}