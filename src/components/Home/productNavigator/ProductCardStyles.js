import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: '#bf8557aa',
    width: 200,
    height: 330,
    margin: theme.spacing(3),
    padding: theme.spacing(2),
    paddingTop: theme.spacing(0.5),
    paddingbottom: theme.spacing(0.5),
    border: "solid 1px #ddd",
    borderRadius: 10,
    position: "relative",
    cursor: "pointer",
    color: "#000",
    "&:hover": {
      boxShadow: "0 0 10px #fff",
    },
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
  },
  productDescription: {
    paddingRight: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    lineHeight: 1.3,
  },
  productPrice: {
    position: "absolute",
    left: 15,
    bottom: 15,
    fontSize: "1rem",
  },
}));

export default useStyle;
