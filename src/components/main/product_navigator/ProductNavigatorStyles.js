import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  container: {
    display: "flex",
    width: "100%",
    backgroundColor: '#bf8557a3',
    margin: theme.spacing(2),
    borderRadius: 10,
    overflow: "scroll",
    '&::-webkit-scrollbar': {
        width: 1
    }
  },
}));

export default useStyle;
