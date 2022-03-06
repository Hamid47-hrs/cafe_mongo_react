import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./components/Home/HomePage";
import LoginForm from "./components/pages/Login/Login";
import SignUpForm from "./components/pages/signup/SignUp";
import ProductPage from "./components/pages/productPage/ProductPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path={"/"} component={HomePage} />
          <Route exact path={"/login"} component={LoginForm} />
          <Route exact path={"/signup"} component={SignUpForm} />
          <Route path={"/products/:productId"} component={ProductPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
