import { useState } from "react";
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
  setItemsCount,
}) => {
  const classes = useStyle();
  const [counter, setCounter] = useState(parseInt(quantity));

  const removeOneItem = () => {
    ;
    counter > 1 && setCounter(counter - 1,updateCartItem());
  };

  const addOneItem = () => {
    updateCartItem();
    setCounter(counter + 1,updateCartItem());
  };

  const updateCartItem = (callBack) => {
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
      .post("https://cafe-mongo-backend.herokuapp.com/cart/update-cart-items", data, config)
      .then(res => toast.success(res.data.message))
      .catch((err) => toast.error(err.response.data.message));
    setItemsCount(counter);
  };

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
      .post("https://cafe-mongo-backend.herokuapp.com/cart/delete-cart-item", data, config)
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
        <Button
          className={classes.deleteButton}
          onClick={() => deleteCartItem()}
        >
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
        <Button className={classes.addOneButton} onClick={addOneItem}>
          +
        </Button>
      </div>
    </div>
  );
};

export default SingleProduct;
