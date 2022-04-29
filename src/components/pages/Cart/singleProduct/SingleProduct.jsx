import { Button, Typography } from "@material-ui/core";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import useStyle from "./SingleProductStyles";
import { useEffect, useState } from "react";

const SingleProduct = ({ name, subcet, price, image }) => {
  const classes = useStyle();
  const [counter, setCounter] = useState(+1);
  const [totalPrice, setTotalPrice] = useState(+price);

  const removeOneItem = () => {
    counter > 1 && setCounter(counter - 1);
  };

  useEffect(() => {
    setTotalPrice(price * counter);
  }, [counter, price]);

  return (
    <div className={classes.container}>
      <div className={classes.topContainer}>
        <div className={classes.productImageContaienr}>
          <img src={image} className={classes.productImage} alt="product" />
        </div>
        <div className={classes.productInfoContianer}>
          <Typography className={classes.productTitle}>
            {subcet + " " + name}
          </Typography>
          <Typography className={classes.productPrice}>
            <span className={classes.titleText}>قیمت : </span>
            {price} تومان
          </Typography>
        </div>
        <Button className={classes.deleteButton}>
          <DeleteForeverIcon className={classes.deleteButtonIcon} />
        </Button>
        <span className={classes.deleteButtonSpan}>
          <DeleteForeverIcon className={classes.deleteButtonIcon} />
        </span>
      </div>
      <div className={classes.BottomContainer}>
        <Button className={classes.removeOneButton} onClick={removeOneItem}>
          -
        </Button>
        <Typography className={classes.numberOfProducts}>
          <span className={classes.numberOfProducts}>تعداد :</span>
          <span className={classes.numberOfProducts}>{counter}</span>
        </Typography>
        <Button
          className={classes.addOneButton}
          onClick={() => setCounter(counter + 1)}
        >
          +
        </Button>
      </div>
    </div>
  );
};

export default SingleProduct;
