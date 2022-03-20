import { makeStyles } from "@material-ui/core";
import backgroundPicture from "../../../images/coffee_background_space_text_85121087.jpg";

const useStyle = makeStyles((theme) => ({
  container: {
    background: `url(${backgroundPicture})`,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    // height: "100vh",
  },
  logo: {
    width: "12rem",
    padding: theme.spacing(1),
    backgroundColor: "#ffffff33",
    borderRadius: "4px 15px",
  },
  wellcomeText: {
    fontFamily: "vazir-bold",
    fontSize: "1.5rem",
    color: "#ffffff",
    marginBottom: theme.spacing(1.5),
  },
  form: {
    backgroundColor: "#fffffff1",
    padding: "1rem 2rem",
    borderRadius: 10,
    width: "35%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    [theme.breakpoints.down("md")]: {
      width: "60%",
    },
    [theme.breakpoints.down("xs")]: {
      width: "90%",
    },
  },
  userGrid: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  userGridItem: {
    width: "100%",
  },
  userInput: {
    width: "100%",
    direction: "rtl",
    textAlign: "right",
    marginBottom: theme.spacing(3),
    "& .MuiFormLabel-root": {
      fontFamily: "vazir",
      textAlign: "right",
    },
  },
  vipCheck: {
    "& .MuiFormControlLabel-label": {
      fontFamily: "vazir",
      [theme.breakpoints.down("1130")]: {
        fontSize: "0.85rem",
      },
    },
  },
  formControl: {
    marginBottom: theme.spacing(2),
  },
  vipTitle: {
    fontFamily: "vazir",
  },
  vipItems: {
    fontFamily: "vazir",
  },
  vipOffer: {
    color: "#c94646",
    paddingRight: theme.spacing(1),
  },
  chooseOffer: {
    fontFamily: "vazir",
  },
  submitButton: {
    border: "solid 2px #A3DA8D",
    padding: "0.4rem 7rem",
    marginBottom: theme.spacing(4),
    "&:hover": {
      border: "solid 2px #36bee7",
    },
    [theme.breakpoints.down("390")]: {
      padding: "0.4rem 4rem"
    },
  },
  didYouSignUp: {
    fontFamily: "vazir",
    fontSize: "1.1rem",
  },
  asterisk: {
    color: "red",
    marginLeft: theme.spacing(2),
  },
  loginLink: {
    margin: "0 0.3rem",
  },
}));

export default useStyle;
