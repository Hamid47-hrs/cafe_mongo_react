import { Button } from "@material-ui/core";
import axios from "axios";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import useStyle from "./ProductCardStyles";

const ProductCard = (props) => {
  const classes = useStyle();

  const addToCart = () => {
    const newCart = {
      userId: localStorage.getItem("user-id"),
      productId: props.productId,
      productName: props.name,
      productSubset: props.subset,
      productPrice: props.price,
      productImage: props.image,
    };

    const config = {
      headers: {
        "x-auth-token": localStorage.getItem("x-auth-token"),
      },
    };

    axios
      .post("https://cafe-mongo-backend.herokuapp.com/cart/add-to-cart", newCart, config)
      .then((result) => {
        toast.success(result.data.message);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };

  return (
    <div className={classes.container}>
      <Link to={`/product/${props.productId}`} className={classes.link}>
        <div className={classes.imageContainer}>
          <img
            className={classes.productImage}
            src={props.image}
            alt="productImage"
          />
        </div>
        <h4 className={classes.productTitle}>
          {props.subset} {props.name}
        </h4>
        <div>
          <p className={classes.productDescription}>{props.description}</p>
        </div>
      </Link>
      <div className={classes.button_priceContainer}>
        <Button className={classes.addToCartButton} onClick={addToCart}>
          خرید
        </Button>
        <h5 className={classes.productPrice}>{props.price} تومان</h5>
      </div>
    </div>
  );
};

export default ProductCard;
