import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./components/Home/HomePage";
import LoginForm from "./components/Login/Login";
import SignUpForm from "./components/signup/SignUp";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path={"/"} component={HomePage} />
          <Route exact path={"/login"} component={LoginForm} />
          <Route exact path={"/signup"} component={SignUpForm} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
