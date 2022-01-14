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
                <li><a href=""> pixel </a>
                    <picture>
                        <img src={pixel} alt= "pixel art"/> 
                    </picture>
                </li>
                <li><a href=""> tradicional </a>
                    <picture>
                        <img src={Tradicional} alt= "tradicional art"/> 
                    </picture>
                </li>
                <li><a href=""> comic</a>
                    <picture>
                        <img src={comic} alt= "comic art"/> 
                    </picture>
                </li>
                <li><a href=""> todos </a>
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