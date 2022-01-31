import * as s from "./styles"
import { Link } from "react-router-dom"
import  pixel from "assets/img/pixeltopic.svg"
import  wallpaper from "assets/img/wallpapertopic.svg"
import  comic from "assets/img/comic.svg"
import  Tradicional from "assets/img/tradicionaltopic.svg"
import Animetop from "assets/img/animetopic.svg"

const Nav = () => {
    return(
        <s.Nav>
          <div>
            <ul>
                <li>
                    <Link to = "/AnimeGuia" >Anime</Link>
                    <picture>
                        <img src={Animetop} alt= "anime art"/> 
                    </picture>
                </li>
                <li><h3> pixel </h3> 
                    <picture>
                        <img src={pixel} alt= "pixel art"/> 
                    </picture>
                </li>
                <li><h3> tradicional </h3>
                    <picture>
                        <img src={Tradicional} alt= "tradicional art"/> 
                    </picture>
                </li>
                <li><h3> comics </h3>
                    <picture>
                        <img src={comic} alt= "comic art"/> 
                    </picture>
                </li>
                <li><h3> todos </h3>
                    <picture>
                    <img src={wallpaper} alt= "wallpaper art"/>
                    </picture>
                </li>
                <li>
                    <Link to = "/Login" >Login</Link>
                    <picture>
                    <img src={wallpaper} alt= "wallpaper art"/>
                    </picture>
                </li>
                <li>
                    <Link to = "/register" >registrar</Link>
                    <picture>
                    <img src={wallpaper} alt= "wallpaper art"/>
                    </picture>
                </li>
            </ul>
        </div>
        </s.Nav>
    )
}

export default Nav