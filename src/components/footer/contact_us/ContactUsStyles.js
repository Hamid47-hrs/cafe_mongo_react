import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  container: {
    width: "40%",
    padding: theme.spacing(2),
    color: "#000000bf",
    position: "relative",
  },
  title: {
    marginTop: theme.spacing(2),
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
