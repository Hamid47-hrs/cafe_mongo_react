import { Button, Typography } from "@material-ui/core";
import useStyle from "./ProductDetailsStyles";

const ProductDetails = ({prodTitle, prodImage, prodDesc, prodPrice}) => {
  const classes = useStyle();
  return (
    <div className={classes.container}>
      <div className={classes.topContainer}>
        <div className={classes.rightBar}>
          <Typography className={classes.productTitle} varient="h1">
            {prodTitle}
          </Typography>
          <Typography className={classes.productPrice}>{prodPrice} ریال</Typography>
          <div className={classes.buttonContainer}>
            <Button className={classes.addToCart}>افزودن به سبد خرید</Button>
          </div>
        </div>
        <div className={classes.leftBar}>
          <img className={classes.productImage} src={prodImage} alt="product" />
        </div>
      </div>
      <div className={classes.bottomContainer}>
        <Typography className={classes.productDescription}>
          {prodDesc}
        </Typography>
      </div>
    </div>
  );
};

export default ProductDetails;
