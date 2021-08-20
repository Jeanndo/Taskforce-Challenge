import { BrowserRouter as Router,Route,Switch } from "react-router-dom";
import Home from "../compoments/Home/Home";
const Routes = () =>{

return(
<Router>
    <Switch>
        <Route exact path="/landing" component={Home}/>
    </Switch>
</Router>
)

}
export default Routes;