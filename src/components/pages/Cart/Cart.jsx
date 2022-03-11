import { Button, Divider, Typography } from "@material-ui/core";
import useStyle from "./CartStyles";
import SingleProduct from "./singleProduct/SingleProduct";

const Cart = () => {
  const classes = useStyle();

  return (
    <div className={classes.container}>
      <Typography className={classes.title}>سبد خرید</Typography>
      <Divider className={classes.divider} />
      <div className={classes.mainContainer}>
        <div className={classes.productListContainer}>
          <Typography className={classes.productList}>لیست محصولات</Typography>
          <SingleProduct />
        </div>
        <div className={classes.totalAmountContianer}>
          <Typography className={classes.totalPriceTitle}>
            مجموع قیمت محصولات
          </Typography>
          <Typography className={classes.price}>3000 تومان</Typography>
          {/* <Divider className={classes.divider} /> */}
          <Button className={classes.buyButton}>نهایی کردن خرید</Button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
