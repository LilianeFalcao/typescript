import {Switch, Route} from "react-router-dom"
import {home,AnimeG, Register, Login, AdmComents, AdmComentsStore} from "pages"
import { PrivateRoute } from "./PrivateRoute"

const routes = () => {
    return(
        <Switch>
            <PrivateRoute path="/Adm/coments" exact  component= {AdmComentsStore} />
            <PrivateRoute path="/Adm" exact  component= {AdmComents} />


            <Route path ="/Login" exact component={Login}/>
            <Route path ="/Register" exact component={Register}/>
            <Route path ="/AnimeGuia" exact component={AnimeG}/>
            <Route path ="/comentGuia" exact component={AnimeG}/>
            <Route path ="/" exact component={home}/>
        </Switch>
    )
}

export default routes