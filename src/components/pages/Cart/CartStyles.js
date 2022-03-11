import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(2),
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
  },
}));

export default useStyle;
