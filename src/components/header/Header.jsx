import { useState, useEffect } from "react";
import { Button, InputBase } from "@material-ui/core";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import icon from "../../images/icons/PngItem_5251970.png";
import logo from "../../images/icons/name_logo.png";
import SignButton from "./SignButton";
import NavBar from "./navigator/NavBar";
import useStyle from "./HeaderStyles";

const Header = () => {
  const classes = useStyle();

  const [logedIn, setLogedIn] = useState("");

  const userAuthorized = localStorage.getItem("x-auth-token");
  const userId = localStorage.getItem("user-id");

  const logOut = () => {
    setLogedIn("");
    localStorage.removeItem("x-auth-token");
    window.location.reload();
  };

  useEffect(() => {
    setLogedIn(userAuthorized);
  }, [userAuthorized]);

  return (
    <>
      <header className={classes.container}>
        <div className={classes.logos}>
          <Link to="/">
            <img className={classes.icon} src={icon} alt="cafe-mongo" />
          </Link>
          <Link to="/">
            <img className={classes.logo} src={logo} alt="cafe-mongo" />
          </Link>
        </div>
        <div className={classes.sreachContainer}>
          <SearchIcon />
          <InputBase
            className={classes.searchBar}
            placeholder="جستوجوی محصول ..."
          />
        </div>
        <div className={classes.LeftSideButtons}>
          {logedIn ? (
            <Button className={classes.logOutButton} onClick={logOut}>
              خروج
            </Button>
          ) : (
            <SignButton />
          )}
          <Link to={`/cart/${userId}`}>
            <Button className={classes.shoppingCart}>
              <ShoppingCartIcon />
            </Button>
          </Link>
        </div>
        <div className={classes.navButtonContainer}>
          <Link to="/menu" className={classes.navButton}>
            <MenuIcon className={classes.navButtonIcon} />
          </Link>
        </div>
      </header>
      <NavBar />
    </>
  );
};

export default Header;
