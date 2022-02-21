import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  container: {
    display: "flex",
    height: "6rem",
    backgroundColor: "#FFF1BD",
    padding: theme.spacing(2),
    paddingTop: theme.spacing(1.3),
    justifyContent: "space-between",
    alignItems: "center",
  },
  icon: {
    width: "5rem",
    height: "5rem",
    marginLeft: theme.spacing(2),
  },
  logo: {
    height: "5rem",
    width: "8rem",
    marginLeft: theme.spacing(2),
  },
  searchBar: {
    backgroundColor: "white",
    width: "15rem",
    height: "3rem",
    fontFamily: "vazir-bold",
    padding: theme.spacing(2),
    borderRadius: "5px",
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
