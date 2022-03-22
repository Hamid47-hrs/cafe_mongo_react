import { makeStyles } from "@material-ui/core";
import image from "../../../../images/istockphoto_86110739_612x6121.jpg";
const useStyle = makeStyles((theme) => ({
  container: {
    background: `url(${image})`,
  },
  titleContainer: {
    padding: theme.spacing(4),
  },
  title: {
    fontFamily: "vazir-bold",
    fontSize: "1.5rem",
    marginRight: theme.spacing(4),
    marginBottom: theme.spacing(2),
  },
  subTitle: {
    fontFamily: "vazir-medium",
    fontSize: "1rem",
  },
  body: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    flexWrap: "wrap",
  },
  form: {
    paddingRight: theme.spacing(5),
  },
  productFormGrid: {
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(4),
    backgroundColor: "#FFF1BDaa",
    width: "fit-content",
    borderRadius: 10,
  },
  productInput: {
    backgroundColor: "#FFF1BD",
    borderRadius: 4,
    marginBottom: theme.spacing(3),
    padding: theme.spacing(0.5),
    width: "100%",
    "& .MuiFormLabel-root": {
      fontFamily: "vazir",
    },
  },
  itemSelect: {
    "& .MuiMenuItem-root": {
      fontFamily: "vazir",
    },
  },
  submitButton: {
    border: "solid 2px #A3DA8D",
    padding: "0.4rem 7rem",
    marginBottom: theme.spacing(1),
    "&:hover": {
      border: "solid 2px #36bee7",
    },
    [theme.breakpoints.down("390")]: {
      padding: "0.4rem 4rem",
    },
  },
}));
export default useStyle;
