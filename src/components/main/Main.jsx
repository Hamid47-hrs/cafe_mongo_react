import Footer from "../footer/Footer";
import Header from "../header/Header";

const Main = (props) => {
  return (
    <div>
      <Header />
      {props.children}
      <Footer />
    </div>
  );
};

export default Main;
