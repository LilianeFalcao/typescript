import * as s from "./styles"
import logo from "assets/img/lua (1) 1.svg"

const Header = () => {
    return(
        <s.Header>
        <picture>
            <img src={logo} alt= "Logo site"/> 
        </picture>
        <h1> 
            PD 
            Moon
        </h1>
        </s.Header>
    )
}

export default Header