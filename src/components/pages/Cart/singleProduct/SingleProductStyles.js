import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    border: "solid 2px #872a0199",
    borderRadius: 4,
    padding: theme.spacing(1.5),
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down("375")]: {
      padding: theme.spacing(0.5),
    },
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
}));

export default useStyle;
