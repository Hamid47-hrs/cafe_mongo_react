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
    marginTop: '1.1rem'
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
  searchBar: {
    backgroundColor: "#dddddd4a",
    width: "30%",
    height: "3rem",
    fontFamily: "vazir-bold",
    fontSize: '0.8rem',
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
