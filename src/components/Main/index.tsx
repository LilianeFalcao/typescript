import * as s from "./styles"
import wallpaperM from "assets/img/wallpaper.svg"
import tradicionalM from "assets/img/tradicional.svg"
import Psicodelica from "assets/img/psic.svg"
import pixelart from "assets/img/pixel.svg"
import Mecha from "assets/img/mecha.svg"
import anime from "assets/img/anime.svg"
import comic from "assets/img/comic.svg"
import digital from "assets/img/digitaldraw.svg"

const Main = () => {
    return(
        <s.Main>
         <div>
            <section>
                <h4>Anime</h4>
                <picture>
                    <img src={anime} alt= "anime art"/> 
                </picture>
            </section>
            <section>
                <h4>Comics</h4>
                <picture>
                    <img src={comic} alt= "comic art"/> 
                </picture>
            </section>
            <section>
                <h4>Pixel art</h4>
                <picture>
                    <img src={pixelart} alt= "pixel art"/> 
                </picture>
            </section>
            <section>
                <h4>Wallpaper</h4>
                <picture>
                    <img src={wallpaperM} alt= "wallpaper art"/> 
                </picture>
            </section>
        </div>
        <div>
            <section>
                <h4>Tradicional art</h4>
                <picture>
                    <img src={tradicionalM} alt= "tradicional art"/> 
                </picture>
            </section>
            <section>
                <h4>Digital draw</h4>
                <picture>
                    <img src={digital} alt= "digitaldraw art"/> 
                </picture>
            </section>
            <section>
                <h4>Mecha</h4>
                <picture>
                        <img src={Mecha} alt= "mecha art"/> 
                </picture>
            </section>
            <section>
                <h4>Psicodélica</h4>
                <picture>
                    <img src={Psicodelica} alt= "psicodelic art"/> 
                </picture>
            </section>
        </div>
        </s.Main>
    )
}

export default Main