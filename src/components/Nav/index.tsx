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
                    <Link to = "/perfil" >Perfil</Link>
                </li>
                
            </ul>
        </div>
        <div>
            <h2>
                Topics
            </h2>
        </div>
        <ul>
            <li>
                <Link to = "/AnimeGuia" >Anime</Link>
                
                <picture>
                    <img src={Animetop} alt= "anime"/> 
                </picture>
            </li>
            <li>
                Comic
                <picture>
                    <img src={comic} alt= "comic"/> 
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
                    <img src={wallpaper} alt= "wallpaper"/> 
                </picture>
            </li>
            <li>
                Tradicional art
                <picture>
                    <img src={Tradicional} alt= "tradicional"/>
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