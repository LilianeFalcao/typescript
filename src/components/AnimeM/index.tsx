import * as s from "./styles"
import dayss from "assets/img/19days.svg"
import sereioo from "assets/img/sereio.svg"
import bokuno from "assets/img/bnha.svg"
import mononoke from "assets/img/mononokehime.svg"
import ookikuf from "assets/img/ookiku.svg"
import purpleg from "assets/img/purpleguy.svg"
import shingeki from "assets/img/snk.svg"
import man from "assets/img/cara.svg"

const AnimeM = () => {
    return(
        <s.AnimeM>
            <section>
                     <h2>Anime/Mangá </h2>
            </section>
            <div>
                <section>
                    <img src={sereioo} alt="sereio"/>
                </section>
                <section>
                    <img src={bokuno} alt="bnha"/>
                </section>
                <section>
                    <img src={dayss} alt="days"/>
                </section>
                <section>
                    <img src={mononoke} alt="hime"/>
                </section>
            </div>
            <div>
                <section>
                    <img src={ookikuf} alt="ookiku furikabutte"/>
                </section>
                <section>
                    <img src={shingeki} alt="shingeki no kyojin"/>
                </section>
                <section>
                    <img src={purpleg} alt="purpleguy"/>
                </section>
                <section>
                    <img src={man}alt="cara"/>
                </section>
            </div>
        </s.AnimeM>
    )
}

export default AnimeM