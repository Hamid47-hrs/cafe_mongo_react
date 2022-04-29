import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#bf8557aa",
    width: 200,
    height: 340,
    margin: theme.spacing(3),
    padding: theme.spacing(2),
    paddingTop: theme.spacing(0.5),
    paddingbottom: theme.spacing(0.5),
    border: "solid 1px #ddd",
    borderRadius: 10,
    position: "relative",
    cursor: "pointer",
    "&:hover": {
      boxShadow: "0 0 10px #fff",
    },
  },
  link: {
    color: "#000",
  },
  imageContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 180,
    marginBottom: theme.spacing(2),
    overflow: "hidden",
  },
  productImage: {
    width: 150,
    borderRadius: 4,
  },
  productTitle: {
    paddingBottom: theme.spacing(1),
    wordWrap: "break-word",
  },
  productDescription: {
    height: '45px',
    overflow: 'hidden',
    textAlign: 'justify',
    paddingRight: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    lineHeight: 1.2,
    fontSize: "0.8rem"
  },
  button_priceContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    position: "absolute",
    bottom: 15,
  },
  addToCartButton: {
    marginLeft: theme.spacing(2),
    backgroundColor: "#ffffffdd",
    "&:hover": {
      color: "#fff",
      backgroundColor: "#000000dd",
    },
  },
  productPrice: {
    fontSize: "0.9rem",
  },
}));

export default useStyle;
