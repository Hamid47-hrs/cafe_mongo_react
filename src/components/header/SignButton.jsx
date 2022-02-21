import { Button } from "@material-ui/core";
import useStyle from "./SignButtonStyles";
const SignButton = () => {
  const classes = useStyle();
  return (
    <div className={classes.signIn_Up}>
      <Button className={classes.signIn}>ورود کاربر</Button>
      <span className={classes.slash}>/</span>
      <Button className={classes.signUp}>ثبت نام</Button>
    </div>
  );
};

export default SignButton;
