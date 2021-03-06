import { makeStyles } from "@material-ui/core";
import backgroundPicture from "../../../images/coffee_background_space_text_85121087.jpg";

const useStyle = makeStyles((theme) => ({
  container: {
    background: `url(${backgroundPicture})`,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: theme.spacing(5),
    height: "100vh",
  },
  logo: {
    width: "16rem",
    padding: theme.spacing(1),
    backgroundColor: "#ffffff33",
    borderRadius: "4px 15px",
    marginBottom: theme.spacing(1.5),
    [theme.breakpoints.down("xs")]: {
      width: "10rem",
    },
  },
  wellcomeText: {
    fontFamily: "vazir-bold",
    fontSize: "2rem",
    color: "#ffffff",
    marginBottom: theme.spacing(1.5),
  },
  form: {
    backgroundColor: "#fffffff1",
    padding: "1rem 2rem",
    borderRadius: 10,
    width: "35%",
    [theme.breakpoints.down("md")]: {
      width: "50%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "70%",
    },
    [theme.breakpoints.down("xs")]: {
      width: "90%",
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
  submitButton: {
    border: "solid 2px #A3DA8D",
    padding: "0.4rem 7rem",
    marginBottom: theme.spacing(4),
    "&:hover": {
      border: "solid 2px #36bee7",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "0.4rem 5rem",
    },
  },
  signUp: {
    fontFamily: "vazir",
    fontSize: "1.1rem",
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.7rem",
    },
  },
  asterisk: {
    color: "red",
    marginLeft: theme.spacing(2),
  },
  link: {
    margin: "0 0.3rem",
  },
}));

export default useStyle;
