
import "./HeaderStyle.css"
import { CONSULTATION_ROUTE, CONTACTS_ROUTE, MAIN_ROUTE, MYINFO_ROUTE, SERVICES_ROUTE } from "../../utils/constants";
import React from "react";

import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';

export function Header(){

    React.useEffect(() => {
    
        Events.scrollEvent.register('begin', (to, element) => {
          console.log('begin', to, element);
        });
    
        Events.scrollEvent.register('end', (to, element) => {
          console.log('end', to, element);
        });
    
        scrollSpy.update();
    
        return () => {
          Events.scrollEvent.remove('begin');
          Events.scrollEvent.remove('end');
        };
      }, []);

      const scrollTo = () => {
        scroll.scrollTo(100); // Scrolling to 100px from the top of the page.
      };
    
      const scrollMore = () => {
        scroll.scrollMore(100); // Scrolling an additional 100px from the current scroll position.
      };

      const scrollToTop = () => {
        scroll.scrollToTop();
      };

      const scrollToBottom = () => {
        scroll.scrollToBottom();
      };

    return(
        <div className="headerDiv">
                <a onClick={scrollToTop}>
                <div className="divRow">
                    <img style={{marginLeft:"2vw"}} src = "img/logo1.png" width={40} height={40}/>
                    <div style={{marginLeft:"2vw",fontWeight:500}}>Иван Кутырин</div>
                </div>
                </a>
            

            <div className="divRow">
            <Link to = {MYINFO_ROUTE} activeClass="active"  
                  spy={true} 
                  smooth={true} 
                  offset={0} 
                  duration={500} className="item">обо мне </Link>
   
            <Link to = {SERVICES_ROUTE} activeClass="active"  
                  spy={true} 
                  smooth={true} 
                  offset={0} 
                  duration={500} className="item">услуги</Link>

            <Link to = {CONTACTS_ROUTE} activeClass="active"  
                  spy={true} 
                  smooth={true} 
                  offset={0} 
                  duration={500} className="item">контакты</Link>

            <Link to = {CONSULTATION_ROUTE} activeClass="active"  
                  spy={true} 
                  smooth={true} 
                  offset={0} 
                  duration={500} className="item">консультация</Link>

                <a  onClick={scrollToBottom} style = {{position:"absolute",top:"2vh",right:"2vw"}}>
                    <img src="img/strelka.png" width={"40px"} height={"auto"}/>
                </a>

                

                
            </div>
            
        </div>
    );
}