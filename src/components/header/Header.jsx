import { Button, InputBase, Link } from "@material-ui/core";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import icon from "../../images/icons/PngItem_5251970.png";
import logo from "../../images/icons/name_logo.png";
import useStyle from "./HeaderStyles";

const Header = () => {
    const classes = useStyle();
    return (
        <header className={classes.container}>
            <di>
                <Link href='#'>
                    <img className={classes.icon} src={icon} alt="cafe-mongo" />
                </Link>
                <Link href='#'>
                    <img className={classes.logo} src={logo} alt="cafe-mongo" />
                </Link>
            </di>
            <InputBase className={classes.searchBar} placeholder="جستوجوی محصول ..." />
            <div className={classes.rightSideButtons}>
                <div className={classes.signIn_Up}>
                    <Button className={classes.signIn}>ورود کاربر</Button>
                    <span className={classes.slash}>/</span>
                    <Button className={classes.signUp}>ثبت نام</Button>
                </div>
                <Button className={classes.shoppingCart}><ShoppingCartIcon /></Button>
            </div>
        </header>
    );
};

export default Header;
