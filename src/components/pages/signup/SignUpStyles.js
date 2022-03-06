import { makeStyles } from "@material-ui/core";
import backgroundPicture from "../../../images/coffee_background_space_text_85121087.jpg";

const useStyle = makeStyles((theme) => ({
  container: {
    background: `url(${backgroundPicture})`,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: theme.spacing(2),
  },
  logo: {
    width: "12rem",
    padding: theme.spacing(1),
    backgroundColor: '#ffffff33',
    borderRadius: '4px 15px'
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
  },
  userGrid: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
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
