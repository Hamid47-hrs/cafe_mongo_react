import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  container: {
    display: "flex",
    width: "100%",
    height: 380,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    position: "relative",
    borderRadius: 5,
    backgroundColor: '#3d0f00'
  },
  divider: {
    margin: theme.spacing(2),
    border: "solid 2px #ddd",
  },
  dimmer: {
    position: "absolute",
    backgroundColor: "#ffffff5a",
    width: "100%",
    height: "100%",
  },
  video: {
    width: "100%",
  },
}));

export default useStyle;
