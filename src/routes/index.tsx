import {Switch, Route} from "react-router-dom"
import {home,AnimeG, Register} from "pages"

const routes = () => {
    return(
        <Switch>
            <Route path ="/Register" exact component={Register}/>
            <Route path ="/AnimeGuia" exact component={AnimeG}/>
            <Route path ="/comentGuia" exact component={AnimeG}/>
            <Route path ="/" exact component={home}/>
        </Switch>
    )
}

export default routes