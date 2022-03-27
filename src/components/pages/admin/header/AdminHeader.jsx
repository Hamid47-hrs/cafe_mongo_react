import { Link } from "react-router-dom";
import { InputBase } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import logo from "../../../../images/icons/name_logo.png";
import useStyle from "./AdminHeaderStyles";

const AdminHeader = () => {
  const classes = useStyle();

  return (
    <div className={classes.navigator}>
      <div>
        <Link to="/admin/add-product" className={classes.link}>
          افزودن محصول
        </Link>
      </div>
      <div>
        <Link to="/admin/products-list" className={classes.link}>
          لیست محصولات
        </Link>
      </div>
      <div>
        <Link to="/admin/users-list" className={classes.link}>
          لیست کاربران
        </Link>
      </div>
      <div>
        <Link to="/admin/orders-list" className={classes.link}>
          لیست سفارشات
        </Link>
      </div>
    </div>
  );
};

export default AdminHeader;
