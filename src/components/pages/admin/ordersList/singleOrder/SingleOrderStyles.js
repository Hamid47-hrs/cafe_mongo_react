import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#44AA8D44",
    width: 250,
    margin: theme.spacing(3),
    padding: theme.spacing(2),
    paddingTop: theme.spacing(0.5),
    paddinBottom: theme.spacing(0.5),
    border: "solid 1px #ddd",
    borderRadius: 10,
    position: "relative",
    "&:hover": {
      boxShadow: "0 0 10px #fff",
    },
  },
  information: {
    display: "flex",
    flexDirection: "column",
    marginTop: theme.spacing(2),
  },
  userName: {
    fontFamily: "vazir",
    marginBottom: theme.spacing(1),
  },
  fullName: {
    fontFamily: "vazir",
    marginBottom: theme.spacing(1),
  },
  phoneNumber: {
    fontFamily: "vazir",
    marginBottom: theme.spacing(1),
  },
  address: {
    fontFamily: "vazir",
    marginBottom: theme.spacing(1),
  },
  orderDate: {
    fontFamily: "vazir",
    marginBottom: theme.spacing(2),
  },
  coloredText: {
    color: "#872000",
  },
  orders: {
    marginTop: theme.spacing(2),
  },
  orderContainer: {
    display: "flex",
    justifyContent: "space-between",
    margin: "1rem",
  },
  productName: {
    fontFamily: "vazir",
  },
  numberofproduct: {
    fontFamily: "vazir",
  },
  buttonsContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: theme.spacing(2),
  },
  // sendOrder: {
  //   border: "solid 2px #004600",
  //   color: "#FFF",
  //   backgroundColor: "#007744aa",
  //   "&:hover": {
  //     color: "#000",
  //   },
  // },
  removeOrder: {
    border: "solid 2px #ff7070",
    color: "#FFF",
    backgroundColor: "#800000",
    "&:hover": {
      color: "#000",
    },
  },
}));

export default useStyle;
