import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  container: {
    display: "flex",
    height: "6rem",
    backgroundColor: "#FFF1BD",
    padding: theme.spacing(3),
    paddingTop: theme.spacing(3),
    justifyContent: "space-between",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      height: "4rem",
    },
  },
  logos: {
    marginTop: "1.1rem",
  },
  icon: {
    width: "4rem",
    height: "4rem",
    marginLeft: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
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
  LeftSideButtons: {
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  logOutButton: {
    backgroundColor: "lightGrey",
    padding: theme.spacing(0.5),
    borderRadius: "5px",
  },
  shoppingCart: {
    marginRight: theme.spacing(1),
  },
  navButtonContainer: {
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

export default useStyle;
