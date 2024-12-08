import ScrollAnimation from "react-animate-on-scroll";
import "./Contacts.css"
import { useMediaQuery } from "react-responsive";
import { useDispatch } from "react-redux";
import { ChangeOpenModal } from "../../store/consReducer";


export function Contacts(){

    const dispatch = useDispatch();
    const S1 = useMediaQuery({ maxWidth: 900 });

    return(
        <footer className="MainDivContacts">
            <div className="firstDivContacts">
                <div className= {S1 ? "DivContacts900" : "DivContacts"}>
                    <div style = {{width:"min-content"}}> 
                        <ScrollAnimation animateIn="fadeIn" delay={200}>
                            <h1 className="H1">ГДЕ НАС НАЙТИ</h1>
                        </ScrollAnimation>
                    </div>

    
                    <div className="RowDiv">
                        <img src = "img/telefone.png" alt = "Номер телефона"/>
                        <ScrollAnimation animateIn="fadeIn" delay={300}>
                            <p>+7-910-210-96-94</p>
                        </ScrollAnimation>
                    </div>
                    <div className="RowDiv">
                        <img src="img/map.png" alt  = "карта" />
                        <ScrollAnimation animateIn="fadeIn" delay={400}>
                            <p>Российская Федерация, 305007, город Курск ул. Дейнеки д. 5е к.7</p>
                        </ScrollAnimation>
                    </div>
                    <div className="RowDiv">
                        <img src = "img/email.png" alt = "Почта"/>
                        <ScrollAnimation animateIn="fadeIn" delay={500}>
                            <p>Saenko-kursk@mail.ru</p>
                        </ScrollAnimation>
                    </div>
                    <br/><br/>
                    <div className="RowDiv">
                        <a href="https://vk.com/id609725624" style = {{display:"flex",justifyContent:"center",alignItems:"center"}}  target="_blank">
                        <img src = "img/vk1.png" style={{width:"40px" ,height:"40px"}} alt = "вконтакте Саенко Максим"/>
                        <ScrollAnimation animateIn="fadeIn" delay={300}>
                            <p>Свяжитесь со мной в вк </p>
                        </ScrollAnimation></a>
                    </div>


                    
                </div>

                <div className= {S1 ? "Map900" : "Map"}>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3496.420550361664!2d36.138597755859976!3d51.70847286760802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x412f033bf6c76e5b%3A0x4f4c9a1633f5ff8!2z0YPQuy4g0JTQtdC50L3QtdC60LgsIDXQlSwg0JrRg9GA0YHQuiwg0JrRg9GA0YHQutCw0Y8g0L7QsdC7LiwgMzA1MDA3!5e0!3m2!1sru!2sru!4v1732985865604!5m2!1sru!2sru" 
                                width="100%" 
                                height="100%" 
                                style={{border:0}} 
                                allowfullscreen="" 
                                loading="lazy" 
                                referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>

            <div className="lastDivContacts">
                <p>Саенко Максим ©, 2024 </p> <p style = {{marginRight:"1vw",marginLeft:"1vw"}}>|</p> <p className="pol" onClick={() => dispatch(ChangeOpenModal())}>Политика конфиденциальности</p>
            </div>
        </footer>
    );
}