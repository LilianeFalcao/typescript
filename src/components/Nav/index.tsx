import * as s from "./styles"
import { Link } from "react-router-dom"
import  pixel from "assets/img/pixeltopic.svg"
import  wallpaper from "assets/img/wallpapertopic.svg"
import  comic from "assets/img/comic.svg"
import  Tradicional from "assets/img/tradicionaltopic.svg"
import  Todos from "assets/img/todos.svg"

const Nav = () => {
    return(
        <s.Nav>
        <div>
            <h3>
                Pesquisa
            </h3>
            <ul>
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
                    <img src="./moon/topics/animetopic.svg" alt= "anime art"/> 
            </li>
            <li>
                Comic
                    <img src={comic} alt= "comic art"/> 
            </li>
            <li>
                Pixel art
                    <img src={pixel} alt= "pixel art"/> 
            </li>
            <li>
                Wallpaper
                    <img src={wallpaper} alt= "wallpaper art"/> 
            </li>
            <li>
                Tradicional art
                    <img src={Tradicional} alt= "tradicional art"/> 
            </li>
            <li>
                Todos
                    <img src={Todos} alt= "todos art"/> 
            </li>
        </ul>
        </s.Nav>
    )
}

export default Nav