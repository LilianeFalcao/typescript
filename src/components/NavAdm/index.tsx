import * as s from "./styles"
import { Link } from "react-router-dom"

const NavAdm = () => {
    return(
        <s.Nav>
          <div>
            <ul>
                <li>
                    <Link to = "/Adm" >Uploads</Link>
                </li>
                <li>
                    <Link to = "/Adm/Coments" >Coments</Link>
                </li>
                <li>
                    <Link to = "/logout" >Sair</Link>
                </li>
            </ul>
        </div>
        </s.Nav>
    )
}

export default NavAdm