import ScrollAnimation from "react-animate-on-scroll";
import "./Contacts.css"

export function Contacts(){


    return(
        <div className="MainDivContacts">
            <div className="firstDivContacts">
                <div className="DivContacts">
                    <div style = {{width:"min-content"}}> 
                        <ScrollAnimation animateIn="fadeIn" delay={200}>
                            <h1>ГДЕ НАС НАЙТИ</h1>
                        </ScrollAnimation>
                    </div>
                    <div className="RowDiv">
                        <img src = "img/telefone.png" />
                        <ScrollAnimation animateIn="fadeIn" delay={300}>
                            <p>+79275353453</p>
                        </ScrollAnimation>
                    </div>
                    <div className="RowDiv">
                        <img src="img/map.png" />
                        <ScrollAnimation animateIn="fadeIn" delay={400}>
                            <p>г,Москва , ул.Ташкентская д.34</p>
                        </ScrollAnimation>
                    </div>
                    <div className="RowDiv">
                        <img src = "img/email.png"/>
                        <ScrollAnimation animateIn="fadeIn" delay={500}>
                            <p>ivan@mail.ru</p>
                        </ScrollAnimation>
                    </div><br/><br/>

                    <div className="lineImg">
                        <img src = "img/vk1.png"/>
                        <img src = "img/watsap.png"/>
                        <img src = "img/telegram.png"/>   
                    </div>
                </div>

                <div className="Map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2248.6063439302325!2d37.797727990223244!3d55.695831503608645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x414ab5c0d976578d%3A0x8059ec460349a70a!2z0KLQsNGI0LrQtdC90YLRgdC60LDRjyDRg9C7LiwgMzQsINCc0L7RgdC60LLQsCwgMTA5NDcy!5e0!3m2!1sru!2sru!4v1732324491020!5m2!1sru!2sru" 
                        width="100%" 
                        height="100%" 
                        style={{border:0}} 
                        allowfullscreen="" 
                        loading="lazy" 
                        referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>

            <div className="lastDivContacts">
                Иван Кутырин ©, 2024
            </div>
        </div>
    );
}