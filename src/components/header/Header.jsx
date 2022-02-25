import { Button, InputBase, Link } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
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
          <Link href="#">
            <img className={classes.icon} src={icon} alt="cafe-mongo" />
          </Link>
          <Link href="#">
            <img className={classes.logo} src={logo} alt="cafe-mongo" />
          </Link>
        </div>
        <InputBase
          className={classes.searchBar}
          placeholder="جستوجوی محصول ..."
        />
        <div className={classes.rightSideButtons}>
          <SignButton />
          <Button className={classes.shoppingCart}>
            <ShoppingCartIcon />
          </Button>
        </div>
      </header>
      <NavBar />
    </>
  );
};

export default Header;
