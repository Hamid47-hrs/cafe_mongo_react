import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Redirect,
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
import NavigationButton from "./components/header/navigationButton/NavigationButton";
import OrderList from "./components/pages/admin/ordersList/OrderList";
import AddProduct from "./components/pages/admin/addProduct/AddProduct";
import ProductList from "./components/pages/admin/productList/ProductList";
import UsersList from "./components/pages/admin/usersList/UserList";
import Admin from "./components/pages/admin/Admin";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path={"/menu"} component={NavigationButton} />
          <Route exact path={"/login"} component={LoginForm} />
          <Route exact path={"/signup"} component={SignUpForm} />

          <Main>
            <Route exact path={"/"} component={HomePage} />
            <Route exact path={"/product/:productId"} component={ProductPage} />
            <Route exact path={"/cafe"} component={CafeStore} />
            <Route exact path={"/fast-food"} component={FastFoodStore} />
            <Route exact path={"/cart/:userId"} component={Cart} />
            <Route exact path={"/about-us"} component={AboutUs} />
            <Route exact path={"/contact-us"} component={ContactUs} />
            <Route exact path={"/coming-soon"} component={ComingSoon} />
            <Route exact path={"/vip-membership"} component={VipMembership} />
            <Route path={"/not-found-404"} component={Page404} />

            {/* Admin Routes */}
            <Route path={"/admin/add-product"} component={AddProduct} />
            <Route path={"/admin/products-list"} component={ProductList} />
            <Route path={"/admin/users-list"} component={UsersList} />
            <Route path={"/admin/orders-list"} component={OrderList} />
          </Main>
        </Switch>
      </Router>
      <ToastContainer />
    </div>
  );
}

export default App;
