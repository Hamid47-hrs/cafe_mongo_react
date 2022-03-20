import {
  Button,
  Typography,
  Grid,
  TextField,
  FormControlLabel,
  Checkbox,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
} from "@material-ui/core";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import logo from "../../../images/icons/name_logo.png";
import useStyle from "./SignUpStyles";

const SignUpForm = () => {
  const classes = useStyle();
  const history = useHistory();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userPasswordConfirm, setUserPasswordConfirm] = useState("");
  const [vipMembership, setVipMembership] = useState(false);

  const handleVipChange = () => {
    !vipMembership ? setVipMembership(true) : setVipMembership(false);
  };

  const signUpValidation = (user) => {
    if (!user.userFirstName) return ".نام وارد نشده است";
    if (!user.userLastName) return ".نام خانوادگی وارد نشده است";
    if (!user.userName) return ".نام کاربری وارد نشده است";
    if (!user.userEmail) return ".آدرس ایمیل وارد نشده است";
    if (!user.userPassword) return ".رمز عبور وارد نشده است";
    if (user.userPassword !== userPasswordConfirm)
      return ".رمز عبور و تکرار رمز عبور یکسان نیست";
    if (user.userPassword.length < 8)
      return ".طول رمز عبور کمتر از 8 کاراکتر است";
    if (user.userName === user.userPassword)
      return "نام کاربری و رمز عبور نباید یکسان باشد";
  };

  const signUpHandler = (event) => {
    event.preventDefault();

    const user = {
      userFirstName: firstName,
      userLastName: lastName,
      userName: userName,
      userEmail: userEmail,
      userPassword: userPassword,
      vipMembership: vipMembership,
    };

    const signUpError = signUpValidation(user);

    if (signUpError) return toast.error(signUpError);

    fetch("bbbb", {
      method: "POST",
      user,
    })
      .then()
      .then((data) => {
        toast.success(".ثبت نام با موفقیت انجام شد");
        localStorage.setItem("x-auth-token", data["x-auth-token"]);
        history.push("/login");
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
        <Typography className={classes.wellcomeText}>فرم ثبت نام</Typography>
      </div>
      <form className={classes.form}>
        <Grid container className={classes.userGrid}>
          <Grid item>
            <Grid item className={classes.userGridItem}>
              <TextField
                className={classes.userInput}
                name="firstName"
                label="نام *"
                type="text"
                value={firstName ? firstName : ""}
                onChange={(event) => setFirstName(event.target.value)}
              />
            </Grid>
            <Grid item className={classes.userGridItem}>
              <TextField
                className={classes.userInput}
                name="lastName"
                label="نام خانوادگی *"
                type="text"
                value={lastName ? lastName : ""}
                onChange={(event) => setLastName(event.target.value)}
              />
            </Grid>
            <Grid item className={classes.userGridItem}>
              <TextField
                className={classes.userInput}
                id="username"
                name="usename"
                label="نام کاربری *"
                type="text"
                value={userName ? userName : ""}
                onChange={(event) => setUserName(event.target.value)}
              />
            </Grid>
          </Grid>
          <Grid item>
            <Grid item className={classes.userGridItem}>
              <TextField
                className={classes.userInput}
                name="useremail"
                label="آدرس ایمیل *"
                type="text"
                value={userEmail ? userEmail : ""}
                onChange={(event) => setUserEmail(event.target.value)}
              />
            </Grid>
            <Grid item className={classes.userGridItem}>
              <TextField
                className={classes.userInput}
                id="userpassword"
                name="userpassword"
                label="رمز عبور *"
                type="password"
                value={userPassword ? userPassword : ""}
                onChange={(event) => setUserPassword(event.target.value)}
              />
            </Grid>
            <Grid item className={classes.userGridItem}>
              <TextField
                className={classes.userInput}
                name="userpasswordConfirm"
                label="تکرار رمز عبور *"
                type="password"
                value={userPasswordConfirm ? userPasswordConfirm : ""}
                onChange={(event) => setUserPasswordConfirm(event.target.value)}
              />
            </Grid>
          </Grid>
        </Grid>
        <FormControlLabel
          control={
            <Checkbox
              checked={vipMembership}
              onChange={handleVipChange}
              name="vipMembership"
              color="primary"
            />
          }
          className={classes.vipCheck}
          label="آیا مایل به دریافت عضویت ویژه می باشید؟"
        />

        {vipMembership && (
          <FormControl className={classes.formControl}>
            <InputLabel shrink className={classes.vipTitle}>
              نوع اشتراک
            </InputLabel>
            <Select displayEmpty className={classes.selectEmpty}>
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem className={classes.vipItems} value={1}>
                یک ماهه : 30هزار تومان
              </MenuItem>
              <MenuItem className={classes.vipItems} value={3}>
                سه ماهه : 90 هزار تومان
              </MenuItem>
              <MenuItem className={classes.vipItems} value={6}>
                شش ماهه : 180 هزار تومان
              </MenuItem>
              <MenuItem className={classes.vipItems} value={12}>
                یک ساله : 300 هزار تومان
                <span className={classes.vipOffer}>(30 درصد تخفیف ویژه)</span>
              </MenuItem>
            </Select>
            <FormHelperText className={classes.chooseOffer}>
              نوع اشتراک مورد نظر خود را انتخاب کنید.
            </FormHelperText>
          </FormControl>
        )}
        <Button
          type="submit"
          onClick={(event) => signUpHandler(event)}
          className={classes.submitButton}
        >
          ثبت نام
        </Button>
        <Typography className={classes.didYouSignUp}>
          <span className={classes.asterisk}>*</span>
          قبلا ثبت نام کرده اید؟
          <Link to="/login" className={classes.loginLink}>
            اینجا
          </Link>
          کلیک کنید.
        </Typography>
      </form>
    </div>
  );
};

export default SignUpForm;
