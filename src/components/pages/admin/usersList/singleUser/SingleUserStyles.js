import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#aaffaa56",
    justifyContent: "center",
    width: 200,
    margin: theme.spacing(3),
    padding: theme.spacing(2),
    border: "solid 1px #ddd",
    borderRadius: 10,
    posotion: "relative",
    curser: "pointer",
    "&:hover": {
      boxShadow: "0 0 10px #fff",
    },
  },
  userName: {
    fontFamily: "vazir",
    marginBottom: theme.spacing(2),
  },
  fullName: {
    marginBottom: theme.spacing(2),
  },
  fullNameText: {
    fontFamily: "vazir",
    fontSize: "0.8rem",
    marginLeft: theme.spacing(0.5),
  },
  lastName: {
    fontFamily: "vazir",
    fontSize: "0.8rem",
    marginLeft: theme.spacing(0.5),
  },
  firstName: {
    fontFamily: "vazir",
    fontSize: "0.8rem",
    marginLeft: theme.spacing(1),
  },
  showDate: {
    fontFamily: "vazir",
    marginBottom: theme.spacing(1),
    lineHeight: 2,
  },
  NoPurchases: {
    fontFamily: "vazir",
    lineHeight: 2,
  },
  buttonsContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginTop: theme.spacing(2),
  },
  removeButton: {
    color: "#ff5555",
    border: "solid 2px #ff4444",
    marginBottom: theme.spacing(2),
  },
  showOrders: {
    color: "#5555ff",
    border: "solid 2px #4444ff",
    marginBottom: theme.spacing(2),
  },
}));

export default useStyle;
