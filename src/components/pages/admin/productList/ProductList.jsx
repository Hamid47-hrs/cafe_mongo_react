import { useState, useEffect } from "react";
import AdminHeader from "../header/AdminHeader";
import ProductCard from "./singleProduct/ProductCard";
import useStyle from "./ProductListStyles";

const ProductList = () => {
  const classes = useStyle();
  const [products, setProducts] = useState([]);

  const getData = () => {
    fetch("/product.json", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <AdminHeader />
      <div className={classes.container}>
        {products.map((item, index) => (
          <ProductCard
            key={index}
            name={item.name}
            type={item.type}
            subset={item.subset}
            description={item.description}
            price={item.price}
            image={item.image}
            NOP={item.NumberOfPurchases}
          />
        ))}
      </div>
    </>
  );
};

export default ProductList;
