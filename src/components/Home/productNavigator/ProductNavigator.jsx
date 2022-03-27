import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import useStyle from "./ProductNavigatorStyles";

const ProductNavigator = () => {
  const classes = useStyle();
  const [products, setProducts] = useState([]);

  const getData = () => {
    fetch("./product.json", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        data.sort((a, b) => b.NumberOfPurchases - a.NumberOfPurchases);
        data = data.slice(0, 10);
        setProducts(data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getData();
  }, []);

  return (
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
  );
};

export default ProductNavigator;
