import { Element } from "react-scroll";
import "./LegalA.css";
import { MAIN_ROUTE, MYINFO_ROUTE } from "../../utils/constants";
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.compat.css"

export function LegalA(){


    return(
        <Element name={MAIN_ROUTE} className="element" >
            <div className="MainDiv" >
                <div className="firstDiv">
                    <ScrollAnimation animateIn="fadeIn" >
                            <h1>ЮРИДИЧЕСКАЯ<br/> ПОМОЩЬ</h1>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="fadeIn" >
                    <p style={{fontWeight:400,lineHeight:"2em",fontSize:"1.5em",backgroundColor:"white",borderRadius:"1em",paddingLeft:"0 0 1em 1em"}} >
                        <span style = {{backgroundColor:"gold",padding:"0 0.3em 0 0.3em"}}>Многолетний опыт </span> 
                        и <span style = {{backgroundColor:"gold",padding:"0 0.5em 0 0.5em"}}> уникальный <br/> подход</span> к работе с клиентами
                    </p>
                    </ScrollAnimation>
                </div>
            </div>
            <ScrollAnimation animateIn="fadeIn" >
                <button className="But">консультация</button>
            </ScrollAnimation>
        </Element>
    );
}