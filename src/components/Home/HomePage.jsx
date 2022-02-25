import Header from "../header/Header";
import Main from "../main/Main";
import Footer from "../footer/Footer";
import useStyle from './HomePageStyles';

const HomePage = () => {
    const classes = useStyle();
  return (
    <div className={classes.root}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default HomePage;
