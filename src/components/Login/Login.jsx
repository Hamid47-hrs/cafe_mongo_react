import { Button, Typography, Grid, TextField, Link } from "@material-ui/core";
import logo from "../../images/icons/name_logo.png";
import useStyle from "./LoginStyles";

const LoginForm = () => {
  const classes = useStyle();

  return (
    <div className={classes.container}>
      <div className={classes.logoContainer}>
        <img className={classes.logo} src={logo} alt="logo" />
      </div>
      <div className={classes.wellcomeContainer}>
        <Typography className={classes.wellcomeText}>ورود کاربر</Typography>
      </div>
      <form className={classes.form}>
        <Grid
          container
          alignItems="center"
          justify="center"
          direction="column"
          className={classes.userGrid}
        >
          <Grid item className={classes.userGridItem}>
            <TextField
              className={classes.userInput}
              id="username"
              name="usename"
              label="نام کاربری"
              type="text"
              required
            />
          </Grid>
          <Grid item className={classes.userGridItem}>
            <TextField
              className={classes.userInput}
              id="userpassword"
              name="userpassword"
              label="رمز عبور"
              required
              type="password"
            />
          </Grid>
          <Button className={classes.submitButton}>ورود</Button>
          <Typography className={classes.signUp}>
            <span className={classes.asterisk}>*</span>
            اگر هنوز ثبت نام نکرده اید
            <Link href="/signup" className={classes.link}>
              اینجا
            </Link>
            کلیک کنید.
          </Typography>
        </Grid>
      </form>
    </div>
  );
};

export default LoginForm;
