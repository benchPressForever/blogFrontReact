import { Link } from "react-scroll";
import "./Service.css";
import { CONSULTATION_ROUTE } from "../../utils/constants";

export function Service({Url,Title,Text}) {


    return(
        <Link to = {CONSULTATION_ROUTE} activeClass="active"  
                    spy={true} 
                    smooth={true} 
                    offset={0} 
                    duration={500} >
            <div className="SBlock" style = {{backgroundImage:`url(${Url})`,backgroundSize:"100% 100%"}}>
                    <p style = {{fontSize:"15px",marginTop:0,margin:"3%"}}>
                                <h3>{Title}</h3>
                                {Text}
                    </p>
            </div>
        </Link>
    );
}