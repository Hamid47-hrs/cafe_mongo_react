import { makeStyles } from "@material-ui/core";
import image from "../../../images/istockphoto_86110739_612x6121.jpg";

const useStyle = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(2),
    background: `url(${image})`,
  },
  aboutMeTitle: {
    fontFamily: "vazir-bold",
    marginBottom: theme.spacing(1.5),
  },
  aboutMeParOne: {
    fontFamily: "vazir-medium",
    marginRight: theme.spacing(2),
    marginBottom: theme.spacing(1.2),
    lineHeight: "2",
  },
  aboutMeParTwo: {
    fontFamily: "vazir-medium",
    marginRight: theme.spacing(2),
    marginBottom: theme.spacing(1.2),
    lineHeight: "2",
  },
  commentContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "left",
    marginLeft: theme.spacing(5),
  },
  commentTitle: {
    fontFamily: "vazir-bold",
    marginLeft: theme.spacing(3),
  },
  likeButton: {
    border: "solid 2px #5dd439",
    "&:hover": {
      backgroundColor: "#5dd43999",
      color: "#fff",
    },
    marginLeft: theme.spacing(3),
  },
  disLikeButton: {
    border: "solid 2px #c94646",
    "&:hover": {
      backgroundColor: "#c9464699",
      color: "#fff",
    },
  },
}));

export default useStyle;
