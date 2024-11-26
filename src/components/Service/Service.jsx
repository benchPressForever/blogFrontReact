import { Link } from "react-scroll";
import "./Service.css";
import { CONSULTATION_ROUTE } from "../../utils/constants";
import { useMediaQuery } from "react-responsive";

export function Service({Url,Title,Text}) {

    const S1 = useMediaQuery({ maxWidth: 1200 });
    const S2 = useMediaQuery({ maxWidth: 992 });
    const S3 = useMediaQuery({ maxWidth: 768 });
    const S4 = useMediaQuery({ maxWidth: 576 });
    const S5 = useMediaQuery({ maxWidth: 376 });

    return(
        <Link to = {CONSULTATION_ROUTE} activeClass="active"  
                    spy={true} 
                    smooth={true} 
                    offset={0} 
                    duration={500} >
             <div className= {S5? "SBlock SB376" : S4 ? "SBlock SB576" : S3 ? "SBlock SB768" : S2 ? "SBlock SB992" :  S1? "SBlock SB1200" : "SBlock"} 
                  style = {{backgroundImage:`url(${Url})`,backgroundSize:"100% 100%"}}>
                    <p style = {{marginTop:0,margin:"3%"}}>
                                <h3>{Title}</h3>
                                {Text}
                    </p>
            </div>
        </Link>
    );
}