import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  container: {
    display: "flex",
    width: "100%",
    overflow: "scroll",
    '&::-webkit-scrollbar': {
        width: 1
    }
  },
}));

export default useStyle;
