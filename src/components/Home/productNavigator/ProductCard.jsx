import { Link } from "react-router-dom";
import useStyle from "./ProductCardStyles";

const ProductCard = (props) => {
  const classes = useStyle();

  return (
    <Link to={`/products/${props.name}`} className={classes.container}>
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
      <p className={classes.productDescription}>{props.description}</p>
      <h5 className={classes.productPrice}>{props.price} تومان</h5>
    </Link>
  );
};

export default ProductCard;