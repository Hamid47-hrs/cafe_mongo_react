import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  topContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: theme.spacing(2),
  },
  rightBar: {
    backgroundColor: "#dddddd44",
    width: "40%",
    padding: "1rem 3rem",
    borderRadius: "8px",
    boxShadow: "5px 5px 5px #00000022",
    [theme.breakpoints.down("670")]: {
      position: "fixed",
      display: "flex",
      justifyContent: "space-around",
      alignItems: "flex-start",
      bottom: 0,
      left: 0,
      backgroundColor: "#fff",
      width: "100%",
      zIndex: "1",
    },
  },
  productTitle: {
    fontFamily: "vazir-bold",
    fontSize: "1.7rem",
    textShadow: "0 0 5px #00000022",
    textAlign: "center",
    marginBottom: theme.spacing(4),
    [theme.breakpoints.down("670")]: {
      fontFamily: "vazir",
      fontSize: "1.2rem",
    },
  },
  productPrice: {
    fontFamily: "vazir",
    fontSize: "1.4rem",
    textShadow: "0 0 5px #00000022",
    textAlign: "left",
    marginBottom: theme.spacing(4),
    [theme.breakpoints.down("670")]: {
      fontSize: "1.2rem",
    },
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
  },
  addToCart: {
    backgroundColor: "#dddddddd",
    border: "solid 2px #A3DA8D",
    padding: "0.5rem 1rem",
    margin: "auto",
    "&:hover": {
      backgroundColor: "#fff",
      border: "solid 2px #146356",
      color: "#872a01",
    },
  },
  leftBar: {
    display: "flex",
    justifyContent: "center",
    borderRadius: "2rem",
    overflow: "hidden",
    width: "100%",
  },
  productImage: {
    width: "300px",
    borderRadius: "2rem",
  },
  productDescription: {
    backgroundColor: "#FFF1BD",
    margin: theme.spacing(1),
    padding: "1rem 1.5rem",
    fontFamily: "vazir-medium",
    fontSize: "1rem",
  },
}));

export default useStyle;
