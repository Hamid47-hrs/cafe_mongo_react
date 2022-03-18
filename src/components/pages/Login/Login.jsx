import { Button, Typography, Grid, TextField } from "@material-ui/core";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import logo from "../../../images/icons/name_logo.png";
import useStyle from "./LoginStyles";

const LoginForm = () => {
  const classes = useStyle();
  const history = useHistory();

  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const loginValidation = (user) => {
    if (!user.username) return ".نام کاربری وارد نشده است";
    if (!user.userpassword) return ".رمز عبور وارد نشده است";
  };

  const logInHandler = (event) => {
    event.preventDefault();

    const user = {
      username: userName,
      userpassword: userPassword,
    };

    const loginError = loginValidation(user);

    if (loginError) return toast.error(loginError);

    fetch("xxxx", {
      method: "POST",
      user,
    })
      .then()
      .then((data) => {
        toast.success(".ورود موفقیت آمیز");
        localStorage.setItem("x-auth-token", data["x-auth-token"]);
        history.goBack();
      })
      .catch((err) => toast.error(err));
  };
  return (
    <div className={classes.container}>
      <div className={classes.logoContainer}>
        <Link to="/">
          <img className={classes.logo} src={logo} alt="logo" />
        </Link>
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
              value={userName}
              onChange={(event) => setUserName(event.target.value)}
            />
          </Grid>
          <Grid item className={classes.userGridItem}>
            <TextField
              className={classes.userInput}
              id="userpassword"
              name="userpassword"
              label="رمز عبور"
              type="password"
              value={userPassword}
              onChange={(event) => setUserPassword(event.target.value)}
            />
          </Grid>
          <Button
            type="submit"
            onClick={(event) => {
              logInHandler(event);
            }}
            className={classes.submitButton}
          >
            ورود
          </Button>
          <Typography className={classes.signUp}>
            <span className={classes.asterisk}>*</span>
            اگر هنوز ثبت نام نکرده اید
            <Link to="/signup" className={classes.link}>
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
