import { useState, useEffect } from "react";
import AdminHeader from "../header/AdminHeader";
import ProductCard from "./singleProduct/ProductCard";
import useStyle from "./ProductListStyles";
import { toast } from "react-toastify";

const ProductList = () => {
  const classes = useStyle();
  const [products, setProducts] = useState([]);

  const getData = () => {
    fetch("https://cafe-mongo-backend.herokuapp.com/product/show-all-products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((err) => toast.error("دریافت اطلاعات با خطا مواجه شد."));
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
            productId={item._id}
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
    </>
  );
};

export default ProductList;
