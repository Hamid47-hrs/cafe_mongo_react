import { Button, Link } from "@material-ui/core";
import useStyle from "./SignButtonStyles";
const SignButton = () => {
  const classes = useStyle();
  return (
    <div className={classes.signIn_Up}>
      <Link href="/signup">
        <Button className={classes.signIn}>ورود کاربر</Button>
      </Link>
      <span className={classes.slash}>/</span>
      <Link href="/login">
        <Button className={classes.signUp}>ثبت نام</Button>
      </Link>
    </div>
  );
};

export default SignButton;
