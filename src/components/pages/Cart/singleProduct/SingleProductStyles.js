import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  container: {
    border: "solid 2px #872a0199",
    borderRadius: 4,
    padding: theme.spacing(1.5),
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down("375")]: {
      padding: theme.spacing(0.5),
    },
  },
  topContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  productImageContaienr: {
    width: 50,
    height: 50,
    overflow: "hidden",
    borderRadius: 4,
    marginLeft: theme.spacing(2),
    backgroundColor: "#00000066",
    [theme.breakpoints.down("375")]: {
      marginLeft: theme.spacing(0.5),
    },
  },
  productImage: {
    width: "100%",
  },
  productInfoContianer: {
    display: "flex",
    justifyContent: "space-between",
    flex: "1 1 70%",
    padding: "0 1rem",
  },
  productTitle: {
    fontFamily: "vazir-medium",
  },
  productPrice: {
    fontFamily: "vazir-medium",
  },
  titleText: {
    [theme.breakpoints.down("375")]: {
      display: "none",
    },
  },
  deleteButton: {
    [theme.breakpoints.down("375")]: {
      display: "none",
    },
  },
  deleteButtonSpan: {
    [theme.breakpoints.down("375")]: {
      display: "block",
      cursor: "pointer",
    },
    [theme.breakpoints.up("375")]: {
      display: "none",
    },
  },
  BottomContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "left",
    marginTop: theme.spacing(2),
  },
  numberOfProducts: {
    fontFamily: "vazir-medium",
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    [theme.breakpoints.down("425")]: {
      fontSize: "0.7rem",
    },
  },
  removeOneButton: {
    backgroundColor: "#c94646",
    color: "#000000aa",
    border: "solid 2px #c71e1e",
  },
  addOneButton: {
    backgroundColor: "#A3DA8D",
    color: "#000000aa",
    border: "solid 2px #38860c",
  },
}));

export default useStyle;
