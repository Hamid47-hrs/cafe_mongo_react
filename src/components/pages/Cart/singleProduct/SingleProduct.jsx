import { useEffect, useState } from "react";
import { Button, Typography } from "@material-ui/core";
import { toast } from "react-toastify";
import axios from "axios";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import useStyle from "./SingleProductStyles";

const SingleProduct = ({
  userId,
  productId,
  name,
  subcet,
  price,
  image,
  quantity,
  setTotalPrice,
  setItemsCount,
}) => {
  const classes = useStyle();
  const [counter, setCounter] = useState(+quantity);

  const removeOneItem = () => {
    counter > 1 && setCounter(counter - 1);
  };

  useEffect(() => {
    const data = {
      userId: userId,
      productId: productId,
      quantity: counter,
    };

    const config = {
      headers: {
        "x-auth-token": localStorage.getItem("x-auth-token"),
      },
    };

    axios
      .post("http://127.0.0.1:8080/cart/update-cart", data, config)
      .then()
      .catch((err) => toast.error(err.response.data.message));
    setTotalPrice(counter);
  }, [counter]);

  const deleteCartItem = () => {
    const data = {
      userId: userId,
      productId: productId,
    };

    const config = {
      headers: {
        "x-auth-token": localStorage.getItem("x-auth-token"),
      },
    };

    axios
      .post("http://127.0.0.1:8080/cart/delete-cart-item", data, config)
      .then((res) => {
        toast.success(res.data.message);
        setItemsCount(-1);
      })
      .catch((err) => toast.error(err.response.data.message));
  };
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
        <Button className={classes.deleteButton} onClick={deleteCartItem}>
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
          <span className={classes.numberOfProducts}>{quantity}</span>
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
