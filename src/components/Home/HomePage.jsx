import Main from "./main/Main";
import useStyle from "./HomePageStyles";

const HomePage = () => {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <Main />
    </div>
  );
};

export default HomePage;
