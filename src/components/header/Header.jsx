import { Button, InputBase } from "@material-ui/core";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import SearchIcon from "@material-ui/icons/Search";
import icon from "../../images/icons/PngItem_5251970.png";
import logo from "../../images/icons/name_logo.png";
import useStyle from "./HeaderStyles";
import SignButton from "./SignButton";
import NavBar from "./navigator/NavBar";

const Header = () => {
  const classes = useStyle();
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
        <div className={classes.rightSideButtons}>
          <SignButton />
          <Link to="/cart">
            <Button className={classes.shoppingCart}>
              <ShoppingCartIcon />
            </Button>
          </Link>
        </div>
      </header>
      <NavBar />
    </>
  );
};

export default Header;
