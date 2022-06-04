import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(2),
    [theme.breakpoints.down("375")]: {
      padding: theme.spacing(0.5),
    },
  },
  title: {
    fontFamily: "vazir-bold",
    fontSize: "1.2rem",
    textShadow: "0 0 2px #00000050",
    // marginBottom : theme.spacing(2)
  },
  divider: {
    height: "2px",
    backgroundColor: "#aaa",
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  mainContainer: {
    display: "flex",
    justifyContent: "space-between",
    paddingRight: theme.spacing(2),
    paddingLeft: theme.spacing(2),
  },
  productListContainer: {
    flex: "1 1 80%",
    marginLeft: theme.spacing(1.5),
    border: "solid 2px #aaaaaa99",
    borderRadius: 4,
    padding: theme.spacing(1.5),
    [theme.breakpoints.down("790")]: {
      flex: "1 1 70$",
    },
  },
  productList: {
    fontFamily: "vazir",
    marginBottom: theme.spacing(2),
  },
  totalAmountContianer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    flex: "1 1 20%",
    border: "solid 2px #aaaaaa99",
    borderRadius: 4,
    padding: theme.spacing(1.5),
    [theme.breakpoints.down("790")]: {
      flex: "1 1 30%",
    },
    [theme.breakpoints.down("600")]: {
      position: "fixed",
      bottom: "0",
      right: "0",
      backgroundColor: "#fff",
      width: "100%",
      zIndex: "1",
    },
  },
  totalPriceTitle: {
    fontFamily: "vazir",
    marginBottom: theme.spacing(2),
  },
  price: {
    fontFamily: "vazir-bold",
    marginBottom: theme.spacing(4),
  },
  buyButton: {
    border: "solid 2px #146356",
    backgroundColor: "#A3DA8D77",
    fontSize: "1rem",
    padding: "0.6rem 1.7rem",
    [theme.breakpoints.down("1091")]: {
      fontSize: "0.7rem",
    },
  },
  modalContainer: {
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    width: "60%",
    height: "70vh",
    margin: "auto",
    padding: theme.spacing(3),
    backgroundColor: "#fff",
    overflow: "hidden",
    borderRadius: 4,
    boxShadow: "5px 5px 1pc #00000077",
    "& .MuiFormLabel-root": {
      fontFamily: "vazir",
    },
    "& .MuiInputBase-input": {
      fontFamily: "vazir",
    },
    [theme.breakpoints.down("480")]: {
      width: "95%",
      height: "95vh",
    },
  },
  modalContainerLabel: {
    fontFamily: "vazir-medium",
  },
  listContainer: {
    height: "40%",
    overflow: "auto",
  },
  listItems: {
    margin: 10,
  },
  cancel_submitButtonContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "space-around",
    [theme.breakpoints.down("480")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  },
  finalSubmitButton: {
    width: 150,
    margin: 10,
    border: "2px solid #28a102",
    backgroundColor: "#28a10222",
  },
  cancelButton: {
    width: 150,
    margin: 10,
    border: "2px solid #c94646",
    backgroundColor: "#c9464666",
  },
}));

export default useStyle;
