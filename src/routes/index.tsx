import {Switch, Route} from "react-router-dom"
import {home} from "pages"

const routes = () => {
    return(
        <Switch>
            <Route path ="/" exact component={home}/>
        </Switch>
    )
}

export default routes