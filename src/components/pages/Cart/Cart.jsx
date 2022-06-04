import { useEffect } from "react";
import {
  Button,
  Divider,
  Modal,
  TextField,
  Typography,
} from "@material-ui/core";
import axios from "axios";
import { toast } from "react-toastify";
import SingleProduct from "./singleProduct/SingleProduct";
import useStyle from "./CartStyles";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const Cart = (props) => {
  const classes = useStyle();
  const history = useHistory();

  const [product, setProduct] = useState([]);
  const [totalPrice, setTotalPrice] = useState([]);
  const [itemsCount, setItemsCount] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [address, setAddress] = useState("");

  let cartPrice = 0;
  product.forEach((item) => {
    const price = item.productPrice * item.quantity;
    cartPrice += price;
  });

  useEffect(() => {
    const cartId = props.match.params.userId;
    const config = {
      headers: {
        "x-auth-token": localStorage.getItem("x-auth-token"),
      },
    };

    axios
      .get("http://127.0.0.1:8080/cart/" + cartId, config)
      .then((res) => {
        setProduct(res.data[0].items);
        setItemsCount(res.data.length);
      })
      .catch((err) => {
        toast.error(err);
      });
  }, [props.match.params.userId, totalPrice, itemsCount]);

  const submitShopping = () => {
    const data = {
      userId: props.match.params.userId,
      userAddress: address,
    };
    const config = {
      headers: {
        "x-auth-token": localStorage.getItem("x-auth-token"),
      },
    };

    setOpenModal(false);

    axios
      .post("http://127.0.0.1:8080/cart/finalize-shipping", data, config)
      .then((res) => toast.success(res.data.message))
      .catch((err) => {
        toast.error(err.response.data.message);
      });

    history.go("/cart");
  };
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
                userId={props.match.params.userId}
                productId={item._id}
                name={item.productName}
                subcet={item.productSubset}
                price={item.productPrice}
                image={item.productImage}
                quantity={item.quantity}
                setTotalPrice={setTotalPrice}
                setItemsCount={setItemsCount}
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
            <Typography className={classes.price}>{cartPrice} تومان</Typography>
            <Button
              className={classes.buyButton}
              onClick={() => setOpenModal(true)}
            >
              نهایی کردن خرید
            </Button>
          </div>
        )}
      </div>
      <Modal open={openModal}>
        <div className={classes.modalContainer}>
          <Typography className={classes.modalContainerLabel}>
            اطلاعات خرید شما :
          </Typography>
          <ol className={classes.listContainer}>
            {product.map((item, index) => (
              <li key={index} className={classes.listItems}>
                {item.productSubset} {item.productName} - {item.quantity} عدد
              </li>
            ))}
          </ol>
          <TextField
            id="outlined-multiline-static"
            label="آدرس خود را وارد کنید."
            multiline
            rows={4}
            variant="outlined"
            value={address}
            onChange={(event) => setAddress(event.target.value)}
            style={{
              width: "95%",
            }}
          ></TextField>
          <div className={classes.cancel_submitButtonContainer}>
            <Button
              className={classes.finalSubmitButton}
              onClick={submitShopping}
            >
              تایید
            </Button>
            <Button
              className={classes.cancelButton}
              onClick={() => setOpenModal(false)}
            >
              انصراف
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Cart;
