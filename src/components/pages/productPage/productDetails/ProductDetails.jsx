import { Button, Typography } from "@material-ui/core";
import axios from "axios";
import { toast } from "react-toastify";
import useStyle from "./ProductDetailsStyles";

const ProductDetails = ({
  productId,
  productName,
  productSubset,
  productTitle,
  productImage,
  productDesc,
  productPrice,
}) => {
  const classes = useStyle();

  const addToCart = () => {
    const newCart = {
      userId: localStorage.getItem("user-id"),
      productId: productId,
      productName: productName,
      productSubset: productSubset,
      productPrice: productPrice,
      productImage: productImage,
    };

    const config = {
      headers: {
        "x-auth-token": localStorage.getItem("x-auth-token"),
      },
    };

    axios
      .post("https://cafe-mongo-backend.herokuapp.com/cart/add-to-cart", newCart, config)
      .then((res) => {
        toast.success(res.data.message);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };

  return (
    <div className={classes.container}>
      <div className={classes.topContainer}>
        <div className={classes.rightBar}>
          <Typography className={classes.productTitle} varient="h1">
            {productTitle}
          </Typography>
          <Typography className={classes.productPrice}>
            {productPrice} ریال
          </Typography>
          <div className={classes.buttonContainer}>
            <Button className={classes.addToCart} onClick={addToCart}>
              افزودن به سبد خرید
            </Button>
          </div>
        </div>
        <div className={classes.leftBar}>
          <img
            className={classes.productImage}
            src={productImage}
            alt="product"
          />
        </div>
      </div>
      <div className={classes.bottomContainer}>
        <Typography className={classes.productDescription}>
          {productDesc}
        </Typography>
      </div>
    </div>
  );
};

export default ProductDetails;
