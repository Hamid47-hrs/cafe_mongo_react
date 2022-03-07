import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./components/main/Main";
import HomePage from "./components/Home/HomePage";
import LoginForm from "./components/pages/login/Login";
import SignUpForm from "./components/pages/signup/SignUp";
import ProductPage from "./components/pages/productPage/ProductPage";
import CafeStore from "./components/pages/cafe/CafeStore";
import FastFoodStore from "./components/pages/fastFood/FastFoodStore";
import ComingSoon from "./components/pages/comingSoon/ComingSoon";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path={"/login"} component={LoginForm} />
          <Route exact path={"/signup"} component={SignUpForm} />
          <Main>
            <Route exact path={"/"} component={HomePage} />
            <Route path={"/products/:productId"} component={ProductPage} />
            <Route path={"/cafe"} component={CafeStore} />
            <Route path={"/fast-food"} component={FastFoodStore} />
            <Route path={"/coming-soon"} component={ComingSoon} />
          </Main>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
