import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  container: {
    display: "flex",
    height: "6rem",
    // backgroundColor: "#FFF1BD",
    padding: theme.spacing(3),
    paddingTop: theme.spacing(3),
    justifyContent: "space-between",
    alignItems: "center",
  },
  logos: {
    marginTop: "1.1rem",
  },
  icon: {
    width: "4rem",
    height: "4rem",
    marginLeft: theme.spacing(2),
  },
  logo: {
    height: "4rem",
    width: "7rem",
    marginLeft: theme.spacing(2),
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
  },
  searchBar: {
    padding: theme.spacing(1),
    fontFamily: "vazir-bold",
    fontSize: "0.8rem",
  },
  rightSideButtons: {
    display: "flex",
    alignItems: "center",
  },
  shoppingCart: {
    marginRight: theme.spacing(1),
  },
}));

export default useStyle;
