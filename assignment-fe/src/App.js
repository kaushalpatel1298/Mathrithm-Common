  
import Signup from "./pages/signUp";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ExistingUser from "./pages/existingUser";


function App() {
  return (
      <>
      <Router>
        <Switch>
        <Route exact path="/allusers" component={ExistingUser} />
        <Route exact path="/" component={Signup} />
        </Switch>
      </Router>
      </>
    );
}

export default App;

