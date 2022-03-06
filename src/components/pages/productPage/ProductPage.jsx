import Header from "../../header/Header";
import Footer from "../../footer/Footer";
import ProductDetails from "./productDetails/ProductDetails";

const ProductPage = (props) => {
  console.log(props.match.params.productId);

  return (
    <>
      <Header />
      <ProductDetails />
      <Footer />
    </>
  );
};

export default ProductPage;
