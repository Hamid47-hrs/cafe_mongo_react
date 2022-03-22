import { useState, useEffect } from "react";
import ProductCard from "./singleProduct/productCard";
import useStyle from "./ProductListStyles";

const ProductList = () => {
  const classes = useStyle();
  const [products, setProducts] = useState([]);

  const getProductData = () => {
    fetch("http://127.0.0.1:3001/product/show-all-products", {
      method: "GET",
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getProductData();
  }, []);

  return (
    <div className={classes.container}>
      {products &&
        products.map((item, index) => (
          <ProductCard
            key={index}
            name={item.productName}
            type={item.productType}
            subset={item.productSubset}
            // description={item.productDescription}
            price={item.productPrice}
            image={item.productImage}
          />
        ))}
    </div>
  );
};

export default ProductList;
