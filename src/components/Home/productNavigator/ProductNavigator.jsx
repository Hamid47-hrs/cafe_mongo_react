import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import ProductCard from "./ProductCard";
import useStyle from "./ProductNavigatorStyles";

const ProductNavigator = () => {
  const classes = useStyle();
  const [products, setProducts] = useState([]);

  const getData = () => {
    fetch("http://127.0.0.1:8080/product/show-top-products", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => toast.error(err.response.data.message));
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={classes.container}>
      {products.map((item, index) => (
        <ProductCard
          key={index}
          name={item.productName}
          type={item.productType}
          subset={item.productSubset}
          description={item.productDescription}
          price={item.productPrice}
          image={item.productImage}
          NOP={item.numberOfPurchases}
        />
      ))}
    </div>
  );
};

export default ProductNavigator;
