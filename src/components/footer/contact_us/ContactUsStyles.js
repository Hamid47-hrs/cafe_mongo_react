import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  container: {
    width: "40%",
    padding: theme.spacing(2),
    color: "#fffddd",
    position: "relative",
  },
  title: {
    marginTop: theme.spacing(2),
    letterSpacing: "2px",
  },
  social: {
    marginTop: theme.spacing(4),
  },
  icons: {
    fontSize: "2.3rem",
    marginLeft: theme.spacing(3),
  },
  text: {
    position: "absolute",
    left: 10,
    bottom: 10,
    marginTop: theme.spacing(2),
    fontSize: "1.2rem",
    fontFamily: "vazir",
  },
}));

export default useStyle;
