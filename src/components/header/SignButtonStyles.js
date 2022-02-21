import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  signIn_Up: {
    backgroundColor: "lightGrey",
    padding: theme.spacing(0.5),
    borderRadius: "5px",
  },
  slash: {
    cursor: "default",
  },
}));

export default useStyle;
