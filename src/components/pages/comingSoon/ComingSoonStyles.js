import { makeStyles } from "@material-ui/core";
import image from "../../../images/comingSoon/Cafe.jpg";

const useStyle = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "space-betWeen",
    alignItems: "center",
    height: "60vh",
    padding: theme.spacing(3),
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    overflow: "hidden",
    position: "relative",
  },
  comingSoonFa: {
    fontFamily: "vazir-bold",
    fontSize: "3rem",
    color: "#ffffffdd",
    textShadow: "0 0 5px #ffffffaa",
    transform: "rotateZ(20deg)",
    marginRight: theme.spacing(7),
    [theme.breakpoints.down("1080")]: {
      display: "none",
    },
  },
  comingSoonEn: {
    fontFamily: "vazir-bold",
    fontSize: "3rem",
    color: "#28a102",
    textShadow: "0 0 10px #000000dd",
    transform: "rotateZ(-15deg)",
    [theme.breakpoints.down("1080")]: {
      display: "none",
    },
  },
  comingSoonPNG: {
    width: "300px",
    position: "absolute",
    top: "50%",
    right: "50%",
    transform: "translateY(-50%) translateX(50%)",
    [theme.breakpoints.down("430")]: {
      width: "200px",
    },
  },
}));

export default useStyle;
