import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  container: {
    width: "60%",
    paddingRight: theme.spacing(2),
    paddingBottom: theme.spacing(5),
    color: "#fffddd",
    [theme.breakpoints.down("870")]: {
      width: "100%",
    },
  },
  title: {
    fontSize: "1.4rem",
    letterSpacing: "2px",
  },
  conection: {
    display: "flex",
    padding: theme.spacing(1),
    letterSpacing: "2px",
    [theme.breakpoints.down("520")]: {
      flexDirection: "column",
    },
  },
  divider: {
    backgroundColor: "#000000a4",
  },
  dividerh: {
    backgroundColor: "#000000a4",
    width: "90%",
  },
  text: {
    fontFamily: "vazir-medium",
    letterSpacing: "2px",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.down("520")]: {
      marginTop: theme.spacing(3)
    },
  },
  info: {
    display: "flex",
    marginTop: theme.spacing(2),
    [theme.breakpoints.down("520")]: {
      flexDirection: "column",
    },
  },
}));

export default useStyle;
