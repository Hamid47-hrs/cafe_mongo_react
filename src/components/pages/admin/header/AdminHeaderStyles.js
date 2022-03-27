import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  header: {
    height: "6rem",
    display: "flex",
    padding: theme.spacing(3),
    paddingTop: theme.spacing(3),
    justifyContent: "space-around",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      height: "4rem",
    },
  },
  logoContainer: {
    marginTop: "1.1rem",
  },
  logo: {
    height: "4rem",
    width: "7rem",
    marginLeft: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      height: "2.5rem",
      width: "4rem",
    },
  },
  sreachContainer: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#dddddd4a",
    borderRadius: "5px",
    width: "30%",
    padding: theme.spacing(0.5),
    paddingRight: theme.spacing(3),
    color: "#aaaaaaff",
    height: "3rem",
    [theme.breakpoints.down("sm")]: {
      width: "50%",
    },
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  searchBar: {
    padding: theme.spacing(1),
    fontFamily: "vazir-bold",
    fontSize: "0.8rem",
  },
  navigator: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(2),
    height: "4rem",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  link: {
    marginLeft: theme.spacing(0.5),
    marginRight: theme.spacing(0.5),
    padding: theme.spacing(2),
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    cursor: "pointer",
    borderRadius: "7px",
    "&:hover": {
      backgroundColor: "#00000033",
      color: "#fff",
    },
  },
}));

export default useStyle;
