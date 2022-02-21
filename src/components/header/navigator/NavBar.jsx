import { Link } from "@material-ui/core";
import useStyle from "./NavBarStyles";
import vip_logo from "../../../images/icons/vip.png";

const NavBar = () => {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <div className={classes.rightSideBar}>
        <div>
          <Link className={classes.link}>کافی شاپ</Link>
        </div>
        <div>
          <Link className={classes.link}>فست فود</Link>
        </div>
        <div>
          <Link className={classes.link}>به زودی</Link>
        </div>
        <div>
          <Link className={classes.link}>درباره ی ما</Link>
        </div>
        <div>
          <Link className={classes.link}>تماس با ما</Link>
        </div>
        <div>
          <Link className={classes.link}>ویکی قهوه</Link>
        </div>
      </div>
      <div className={classes.leftSideBar}>
        <Link className={classes.link_vip}>
          اشتراک ویژه
          <img className={classes.vip_logo} src={vip_logo} alt="vip_logo" />
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
