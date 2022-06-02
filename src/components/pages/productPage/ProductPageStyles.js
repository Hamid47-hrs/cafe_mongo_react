import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  noProduct: {
    fontFamily: "vazir",
    fontSize: "2rem",
    textAlign: "center",
  },
}));

export default useStyle;
