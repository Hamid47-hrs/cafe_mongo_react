import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  container: {
    display: "flex",
    padding: theme.spacing(1),
    marginTop: theme.spacing(2),
    backgroundColor: "#a65214aa",
    [theme.breakpoints.down("870")]: {
      flexDirection: "column",
    },
  },
}));

export default useStyle;
