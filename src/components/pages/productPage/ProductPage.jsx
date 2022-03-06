import ProductDetails from "./productDetails/ProductDetails";

const ProductPage = (props) => {
  console.log(props.match.params.productId);

  return <ProductDetails />;
};

export default ProductPage;
