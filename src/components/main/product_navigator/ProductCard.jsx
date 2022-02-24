import { Link } from "@material-ui/core";
import useStyle from "./ProductCardStyles";

const ProductCard = (props) => {
  const classes = useStyle();

  return (
    <Link href={props.link} className={classes.container}>
      <div className={classes.imageContainer}>
        <img
          className={classes.productImage}
          src={props.image}
          alt="productImage"
        />
      </div>
      <h4 className={classes.productTitle}>{props.title}</h4>
      <p className={classes.productDescription}>{props.description}</p>
      <h5 className={classes.productPrice}>{props.price} تومان</h5>
    </Link>
  );
};

export default ProductCard;
