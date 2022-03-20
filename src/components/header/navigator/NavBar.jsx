import { Link } from "react-router-dom";
import useStyle from "./NavBarStyles";
import vip_logo from "../../../images/icons/vip.png";

const NavBar = () => {
  const classes = useStyle();
  return (
    <div className={classes.container}>
      <div className={classes.rightSideBar}>
        <div>
          <Link to="/cafe" className={classes.link}>
            کافی شاپ
          </Link>
        </div>
        <div>
          <Link to="/fast-food" className={classes.link}>
            فست فود
          </Link>
        </div>
        <div>
          <Link to="/coming-soon" className={classes.link}>
            به زودی
          </Link>
        </div>
        <div>
          <Link to="/about-us" className={classes.link}>
            درباره ی ما
          </Link>
        </div>
        <div>
          <Link to="/contact-us" className={classes.link}>
            تماس با ما
          </Link>
        </div>
        <div>
          <Link to="/wiki-coffee" className={classes.link}>
            ویکی قهوه
          </Link>
        </div>
      </div>
      <div className={classes.leftSideBar}>
        <Link to="/vip-membership" className={classes.link_vip}>
          اشتراک ویژه
          <img className={classes.vip_logo} src={vip_logo} alt="vip_logo" />
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
