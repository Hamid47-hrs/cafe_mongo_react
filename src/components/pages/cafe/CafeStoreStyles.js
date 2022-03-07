import { makeStyles } from "@material-ui/core";
import image from "../../../images/14558b98bd1d7de23d23772ee22fccda7c4ea8e5.jpg";

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
