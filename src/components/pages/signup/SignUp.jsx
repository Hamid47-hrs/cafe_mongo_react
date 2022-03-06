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
import { Link } from "react-router-dom";
import logo from "../../../images/icons/name_logo.png";
import useStyle from "./SignUpStyles";

const SignUpForm = () => {
  const classes = useStyle();

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
          <Grid Item>
            <Grid item className={classes.userGridItem}>
              <TextField
                className={classes.userInput}
                name="firstName"
                label="نام"
                type="text"
                required
              />
            </Grid>
            <Grid item className={classes.userGridItem}>
              <TextField
                className={classes.userInput}
                name="lastName"
                label="نام خانوادگی"
                type="text"
                required
              />
            </Grid>
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
          </Grid>
          <Grid item>
            <Grid item className={classes.userGridItem}>
              <TextField
                className={classes.userInput}
                name="useremail"
                label="آدرس ایمیل"
                type="email"
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
            <Grid item className={classes.userGridItem}>
              <TextField
                className={classes.userInput}
                name="userpasswordConfirm"
                label="تکرار رمز عبور"
                required
                type="password"
              />
            </Grid>
          </Grid>
        </Grid>
        <FormControlLabel
          control={
            <Checkbox
              // checked={state.checkedB}
              // onChange={handleChange}
              name="checkedB"
              color="primary"
            />
          }
          className={classes.vipCheck}
          label="آیا مایل به دریافت عضویت ویژه می باشید؟"
        />
        <FormControl className={classes.formControl}>
          <InputLabel shrink className={classes.vipTitle}>
            نوع اشتراک
          </InputLabel>
          <Select
            // value={age}
            // onChange={handleChange}
            displayEmpty
            className={classes.selectEmpty}
          >
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
        <Button type="submit" className={classes.submitButton}>
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
