import { Button, Typography } from "@material-ui/core";
import useStyle from "./ProductDetailsStyles";
import imge from "../../../../images/product_images/cafe/blackBerry_smootie.jpg";

const ProductDetails = () => {
  const classes = useStyle();
  return (
    <div className={classes.container}>
      <div className={classes.topContainer}>
        <div className={classes.rightBar}>
          <Typography className={classes.productTitle} varient="h1">
            عنوان محصول
          </Typography>
          <Typography className={classes.productPrice}>350000 ریال</Typography>
          <div className={classes.buttonContainer}>
            <Button className={classes.addToCart}>افزودن به سبد خرید</Button>
          </div>
        </div>
        <div className={classes.leftBar}>
          <img className={classes.productImage} src={imge} alt="product" />
        </div>
      </div>
      <div className={classes.bottomContainer}>
        <Typography className={classes.productDescription}>
          توضیحات محصول
        </Typography>
      </div>
    </div>
  );
};

export default ProductDetails;
