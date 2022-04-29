import { Button, Divider, Typography } from "@material-ui/core";
import useStyle from "./CartStyles";
import SingleProduct from "./singleProduct/SingleProduct";

const product = [
  {
    id: 12378953034,
    name: "زرد",
    subcet: "کوکتل",
    price: "15000",
  },
  {
    id: 10984223423,
    name: "پپرونی",
    subcet: "پیتزا",
    price: "100000",
  },
  {
    id: 109035693456,
    name: "اسپرسو",
    subcet: "قهوه",
    price: "8000",
  },
];

const Cart = () => {
  const classes = useStyle();

  return (
    <div className={classes.container}>
      <Typography className={classes.title}>سبد خرید</Typography>
      <Divider className={classes.divider} />
      <div className={classes.mainContainer}>
        <div className={classes.productListContainer}>
          <Typography className={classes.productList}>لیست محصولات</Typography>
          {product.length > 0 ? (
            product.map((item, index) => (
              <SingleProduct
                key={index}
                name={item.name}
                subcet={item.subcet}
                price={item.price}
                image={item.image}
              />
            ))
          ) : (
            <div>
              <Typography className={classes.productList}>
                هیچ محصولی در سبد خرید وجود ندارد.
              </Typography>
            </div>
          )}
        </div>
        {product.length > 0 && (
          <div className={classes.totalAmountContianer}>
            <Typography className={classes.totalPriceTitle}>
              مجموع قیمت محصولات
            </Typography>
            <Typography className={classes.price}>3000 تومان</Typography>
            <Button className={classes.buyButton}>
              نهایی کردن خرید
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
