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
          عنوان محصول : کوکتل زرد
        </Typography>
        <Typography className={classes.productPrice}>
          قیمت محصول : 3000 تومان
        </Typography>
      </div>
      <Button className={classes.deleteButton}>
        <DeleteForeverIcon className={classes.deleteButtonIcon} />
      </Button>
    </div>
  );
};

export default SingleProduct;
