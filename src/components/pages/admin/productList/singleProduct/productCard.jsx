import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import useStyle from "./ProductCardStyles";

const ProductCard = (props) => {
  const classes = useStyle();

  const addToCart = () => {};

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
          حذف
        </Button>
        <h5 className={classes.productPrice}>{props.price} تومان</h5>
      </div>
    </div>
  );
};

export default ProductCard;
