import { makeStyles } from "@material-ui/core";
import image from "../../../images/download.jpg";
const useStyle = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    backgroundColor: "#FFF1BD",
    backgroundImage: `url(${image})`,
    backgroundSize: "contain",
  },
}));

export default useStyle;
