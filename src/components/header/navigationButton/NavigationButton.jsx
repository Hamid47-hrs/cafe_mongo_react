import { Button } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import CloseIcon from "@material-ui/icons/Close";
import { Link, useHistory } from "react-router-dom";
import useStyle from "./NavigationButtonStyles";
import vip_logo from "../../../images/icons/vip.png";
import SignButton from "../SignButton";

const NavigationButton = () => {
  const classes = useStyle();
  const history = useHistory();

  const closeMenu = () => {
    history.goBack();
  };
  
  return (
    <div className={classes.container}>
      <div className={classes.closeIcon}>
        <Button onClick={closeMenu}>
          <CloseIcon />
        </Button>
      </div>
      <div className={classes.topContainer}>
        <SignButton />
        <Link to="/cart">
          <Button className={classes.shoppingCart}>
            <ShoppingCartIcon />
          </Button>
        </Link>
      </div>
      <div className={classes.links}>
        <div className={classes.linkContainer}>
          <Link to="/" className={classes.link}>
            خانه
          </Link>
        </div>
        <div className={classes.linkContainer}>
          <Link to="/cafe" className={classes.link}>
            کافی شاپ
          </Link>
        </div>
        <div className={classes.linkContainer}>
          <Link to="/fast-food" className={classes.link}>
            فست فود
          </Link>
        </div>
        <div className={classes.linkContainer}>
          <Link to="/coming-soon" className={classes.link}>
            به زودی
          </Link>
        </div>
        <div className={classes.linkContainer}>
          <Link to="/about-us" className={classes.link}>
            درباره ی ما
          </Link>
        </div>
        <div className={classes.linkContainer}>
          <Link to="/contact-us" className={classes.link}>
            تماس با ما
          </Link>
        </div>
        <div className={classes.linkContainer}>
          <Link to="/wiki-coffee" className={classes.link}>
            ویکی قهوه
          </Link>
        </div>
      </div>
      <div className={classes.BottomContainer}>
        <Link to="/vip-membership" className={classes.link_vip}>
          اشتراک ویژه
          <img className={classes.vip_logo} src={vip_logo} alt="vip_logo" />
        </Link>
      </div>
    </div>
  );
};

export default NavigationButton;