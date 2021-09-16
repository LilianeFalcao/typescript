import * as s from "./styles"
import { Link } from "react-router-dom"
import  pixel from "assets/img/pixeltopic.svg"
import  wallpaper from "assets/img/wallpapertopic.svg"
import  comic from "assets/img/comic.svg"
import  Tradicional from "assets/img/tradicionaltopic.svg"
import  Todos from "assets/img/todos.svg"
import Animetop from "assets/img/animetopic.svg"

const Nav = () => {
    return(
        <s.Nav>
        <div>
            <h3>
                Pesquisa
            </h3>
            <ul>
                <li>
                <Link to = "" >Configuração</Link>
                </li>
                <li>
                    <Link to = "" >Perfil</Link>
                </li>
                <li> notificação </li>
            </ul>
        </div>
        
        <h2>
            Topics
        </h2>

        <ul>
            <li>
                <picture>
                    <img src={Animetop} alt= "anime art"/> 
                </picture>
            </li>
            <li>
                Comic
                <picture>
                    <img src={comic} alt= "comic art"/> 
                </picture>
            </li>
            <li>
                Pixel art
                <picture>
                    <img src={pixel} alt= "pixel art"/> 
                </picture>
            </li>
            <li>
                Wallpaper
                <picture>
                    <img src={wallpaper} alt= "wallpaper art"/> 
                </picture>
            </li>
            <li>
                Tradicional art
                <picture>
                    <img src={Tradicional} alt= "tradicional art"/>
                </picture> 
            </li>
            <li>
                Todos
                <picture>
                    <img src={Todos} alt= "todos art"/> 
                </picture>
            </li>
        </ul>
        </s.Nav>
    )
}

export default Nav