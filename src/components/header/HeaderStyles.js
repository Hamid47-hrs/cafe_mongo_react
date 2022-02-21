import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  container: {
    display: "flex",
    height: "6rem",
    backgroundColor: "lightgreen",
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
  signIn_Up: {
    backgroundColor: "lightGrey",
    padding: theme.spacing(0.5),
    borderRadius: "5px",
  },
  slash: {
    cursor: "default",
  },
}));

export default useStyle;
