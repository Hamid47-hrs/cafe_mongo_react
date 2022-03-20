import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: theme.spacing(2),
    height: "4rem",
    // backgroundColor: "lightgreen",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  rightSideBar: {
    display: "flex",
  },
  link: {
    marginLeft: theme.spacing(0.5),
    marginRight: theme.spacing(0.5),
    padding: theme.spacing(2),
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    cursor: "pointer",
    borderRadius: "7px",
    "&:hover": {
      backgroundColor: "#00000033",
      color: "#fff",
    },
  },
  link_vip: {
    display: "flex",
    alignItems: "center",
    marginLeft: theme.spacing(0.5),
    marginRight: theme.spacing(0.5),
    padding: theme.spacing(2),
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    cursor: "pointer",
    borderRadius: "7px",
    "&:hover": {
      backgroundColor: "#00000033",
      color: "#fff",
    },
  },
  vip_logo: {
    width: "2rem",
    marginRight: theme.spacing(1.3),
  },
}));

export default useStyle;
