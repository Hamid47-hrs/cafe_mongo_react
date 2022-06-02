import { Typography } from "@material-ui/core";
import axios from "axios";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import ProductDetails from "./productDetails/ProductDetails";
import useStyle from "./ProductPageStyles";

const ProductPage = (props) => {
  const classes = useStyle();

  const [product, setProduct] = useState([]);

  useEffect(() => {
    const productId = props.match.params.productId;
    axios
      .get(`http://127.0.0.1:8080/product/${productId}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => toast.error(err.response.data.message));
  }, [props]);

  return (
    <div className={classes.container}>
      {product ? (
        <ProductDetails
          productId={props.match.params.productId}
          productName={product.productName}
          productSubset={product.productSubset}
          productTitle={`${product.productSubset} ${product.productName}`}
          productImage={product.productImage}
          productDesc={product.productDescription}
          productPrice={product.productPrice}
        />
      ) : (
        <Typography className={classes.noProduct}>
          محصولی برای نمایش وجود ندارد.
        </Typography>
      )}
    </div>
  );
};

export default ProductPage;
