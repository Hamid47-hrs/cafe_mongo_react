import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import ProductCard from "../../Home/productNavigator/ProductCard";
import useStyle from "./FastFoodStoreStyles";

const FastFoodStore = () => {
  const classes = useStyle();
  const [products, setProducts] = useState([]);

  const getData = () => {
    axios
      .get("http://127.0.0.1:8080/product/show-fastfood-products")
      .then((res) => setProducts(res.data))
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
          productId={item._id}
          name={item.productName}
          type={item.productType}
          subset={item.productSubset}
          description={item.productDescription}
          price={item.productPrice}
          image={item.productImage}
          NOP={item.NumberOfPurchases}
        />
      ))}
    </div>
  );
};

export default FastFoodStore;
