import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  container: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#872a0177",
    width: "100vw",
    height: "100vh",
    alignItems: "center",
    padding: theme.spacing(6),
  },
  closeIcon: {
    position: "absolute",
    top: "8px",
    right: "8px",
  },
  topContainer: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(3),
  },
  links: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  linkContainer: {
    marginTop: theme.spacing(3),
  },
  link: {
    padding: theme.spacing(5),
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
    marginTop: theme.spacing(2),
    padding: theme.spacing(5),
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
