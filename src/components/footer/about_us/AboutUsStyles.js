import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  container: {
    width: "60%",
    paddingRight: theme.spacing(2),
    paddingBottom: theme.spacing(5),
    color: "#000000bf",
  },
  title: {
    fontSize: "1.4rem",
  },
  conection: {
    display: "flex",
    padding: theme.spacing(1),
  },
  divider: {
    backgroundColor: '#000000a4',
  },
  dividerh: {
    backgroundColor: '#000000a4',
    width: '90%'
  },
  text: {
    fontFamily: "vazir-medium",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2)
  },
  info: {
      display: 'flex',
      marginTop: theme.spacing(2)
  }
}));

export default useStyle;
