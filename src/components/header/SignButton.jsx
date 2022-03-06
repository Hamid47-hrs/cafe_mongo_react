import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import useStyle from "./SignButtonStyles";
const SignButton = () => {
  const classes = useStyle();
  return (
    <div className={classes.signIn_Up}>
      <Link to="/signup">
        <Button className={classes.signIn}>ورود کاربر</Button>
      </Link>
      <span className={classes.slash}>/</span>
      <Link to="/login">
        <Button className={classes.signUp}>ثبت نام</Button>
      </Link>
    </div>
  );
};

export default SignButton;
