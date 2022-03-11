import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(2),
  },
  contactMeTitle: {
    fontFamily: "vazir-bold",
    marginBottom: theme.spacing(1.5),
  },
  contactMeBottomContainer: {
    marginRight: theme.spacing(2),
  },
  contactMeText: {
    fontFamily: "vazir-medium",
    marginBottom: theme.spacing(2),
  },
  contactContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
  },
  contactItem: {
    display: "flex",
    margin: theme.spacing(2),
  },
  contactIcon: {
    marginRight: theme.spacing(2),
  },
}));

export default useStyle;
