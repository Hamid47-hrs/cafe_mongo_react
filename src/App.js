import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Main from "./components/main/Main";
import HomePage from "./components/Home/HomePage";
import LoginForm from "./components/pages/login/Login";
import SignUpForm from "./components/pages/signup/SignUp";
import ProductPage from "./components/pages/productPage/ProductPage";
import CafeStore from "./components/pages/cafe/CafeStore";
import FastFoodStore from "./components/pages/fastFood/FastFoodStore";
import ComingSoon from "./components/pages/comingSoon/ComingSoon";
import Cart from "./components/pages/Cart/Cart";
import AboutUs from "./components/pages/aboutUs/AboutUs";
import ContactUs from "./components/pages/contactUs/ContactUs";
import VipMembership from "./components/pages/vipMembership/VipMembership";
import Page404 from "./components/pages/404/Page404";

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
            <Route path={"/cart"} component={Cart} />
            <Route path={"/about-us"} component={AboutUs} />
            <Route path={"/contact-us"} component={ContactUs} />
            <Route path={"/vip-membership"} component={VipMembership} />
            <Route path={"/not-found-404"} component={Page404} />
          </Main>
        </Switch>
      </Router>
      <ToastContainer />
    </div>
  );
}

export default App;
