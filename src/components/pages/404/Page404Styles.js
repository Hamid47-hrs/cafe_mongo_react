import { makeStyles } from "@material-ui/core";
import image from "../../../images/WallPaper4.jpg";

const useStyle = makeStyles((theme) => ({
  container: {
    background: `url(${image})`,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "50vh",
  },
  errorTitle: {
    fontFamily: "vazir-bold",
    fontSize: "3rem",
    textShadow: "0 0 2px #00000099",
    marginBottom: theme.spacing(3),
  },
  errorText: {
    fontFamily: "vazir-bold",
    fontSize: "1.5rem",
    textShadow: "0 0 2px #00000099",
    marginBottom: theme.spacing(3),
  },
  cafe: {
    color: "#28a10299",
  },
  mongo: {
    color: "#a6521499",
  },
}));

export default useStyle;
