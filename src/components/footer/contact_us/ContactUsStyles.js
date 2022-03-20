import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  container: {
    width: "40%",
    padding: theme.spacing(2),
    color: "#fffddd",
    position: "relative",
    [theme.breakpoints.down("870")]: {
      width: "100%",
    },
  },
  title: {
    marginTop: theme.spacing(2),
    letterSpacing: "2px",
    [theme.breakpoints.down("900")]: {
      fontSize: "0.8rem",
      marginLeft: theme.spacing(1),
    },
  },
  social: {
    marginTop: theme.spacing(4),
  },
  icons: {
    fontSize: "2.3rem",
    marginLeft: theme.spacing(3),
    [theme.breakpoints.down("900")]: {
      fontSize: "2rem",
      marginLeft: theme.spacing(1),
    },
  },
  text: {
    position: "absolute",
    left: 10,
    bottom: 10,
    marginTop: theme.spacing(2),
    fontSize: "1.2rem",
    fontFamily: "vazir",
    [theme.breakpoints.down("420")]: {
      position: "static",
    },
  },
}));

export default useStyle;
