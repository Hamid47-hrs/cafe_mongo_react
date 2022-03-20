import { Button, Typography } from "@material-ui/core";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import useStyle from "./SingleProductStyles";
import image from "../../../../images/product_images/cafe/yellow_cocktail.jpg";

const SingleProduct = () => {
  const classes = useStyle();

  return (
    <div className={classes.container}>
      <div className={classes.productImageContaienr}>
        <img src={image} className={classes.productImage} alt="product" />
      </div>
      <div className={classes.productInfoContianer}>
        <Typography className={classes.productTitle}>
          <span className={classes.titleText}>عنوان محصول : </span>
          کوکتل زرد
        </Typography>
        <Typography className={classes.productPrice}>
          <span className={classes.titleText}>قیمت محصول : </span>
          3000 تومان
        </Typography>
      </div>
      <Button className={classes.deleteButton}>
        <DeleteForeverIcon className={classes.deleteButtonIcon} />
      </Button>
      <span className={classes.deleteButtonSpan}>
        <DeleteForeverIcon className={classes.deleteButtonIcon} />
      </span>
    </div>
  );
};

export default SingleProduct;
