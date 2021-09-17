import {Switch, Route} from "react-router-dom"
import {home,AnimeG} from "pages"

const routes = () => {
    return(
        <Switch>
            <Route path ="/AnimeGuia" exact component={AnimeG}/>
            <Route path ="/" exact component={home}/>
        </Switch>
    )
}

export default routes