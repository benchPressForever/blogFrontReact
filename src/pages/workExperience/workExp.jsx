import ScrollAnimation from "react-animate-on-scroll";
import "./workExp.css";

export function WorkE(){


    return(
        <div className="mainBlockYO" style = {{backgroundImage:"url(img/bacYO4.png)",backgroundSize:"100% 100%"}}>
            <div className="firstBlockYO">
                <ScrollAnimation animateIn="fadeIn" delay={400}>
                    <h1>ЮРИДИЧЕСКАЯ ПОМОЩЬ</h1>
                    <h1 >БОЛЕЕ <span style={{color:"gold"}}>10 ЛЕТ</span> ОПЫТА</h1>
                </ScrollAnimation>
                    <ScrollAnimation animateIn="fadeIn" delay={500}>
                        <h4>Мы гордимся тем, что наша юридическая фирма предлагает <span style={{color:"gold"}}>первоклассные юридические услуги по доступным ценам  по всей стране.</span>
                        <br/><br/>Наша цель — сделать <span style={{color:"gold"}}>качественную юридическую помощь</span> доступной для каждого клиента, независимо от его финансового положения.
                        </h4>
                    </ScrollAnimation>
            </div>

            <ScrollAnimation animateIn="fadeIn" delay={600}>
            <div className="lastBlockYO">
                
                <div className="elementYO">
                    <h1 style={{color:"gold"}}>-900-</h1>
                    <h5>Довольных клиентов</h5>
                </div>
                <div className="elementYO">
                    <h1 style={{color:"gold"}}>-672-</h1>
                    <h5>Успешных дела</h5>
                </div>
                <div className="elementYO">
                    <h1 style={{color:"gold"}}>-2013-</h1>
                    <h5>Начало работы</h5>
                </div>
            </div>
            </ScrollAnimation>

        </div>
    );
}