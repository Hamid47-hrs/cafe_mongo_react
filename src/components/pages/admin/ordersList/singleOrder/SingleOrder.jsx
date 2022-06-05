import { Button, Divider, Typography } from "@material-ui/core";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { toast } from "react-toastify";
import useStyle from "./SingleOrderStyles";

const SingleOrder = ({ userId, orderDate, address, order }) => {
  const classes = useStyle();

  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const config = {
      headers: {
        "x-auth-token": localStorage.getItem("x-auth-token"),
      },
    };
    axios
      .post("http://127.0.0.1:8080/admin/user/" + userId, {}, config)
      .then((result) => {
        setUserData(result.data);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  });
  return (
    <div className={classes.container}>
      {userData.map((item, index) => (
        <div className={classes.information} key={index}>
          <Typography className={classes.userName}>
            <span className={classes.coloredText}>نام کاربری: </span>
            {item.userName}
          </Typography>
          <Typography className={classes.fullName}>
            <span className={classes.coloredText}>نام کامل: </span>
            {item.firstName} {item.lastName}
          </Typography>
          <Typography className={classes.phoneNumber}>
            <span className={classes.coloredText}>شماره تماس: </span>
            {item.phoneNumber}
          </Typography>
          <Typography className={classes.address}>
            <p className={classes.coloredText}>آدرس:</p>
            {address}
          </Typography>
          <Typography className={classes.orderDate}>
            <span className={classes.coloredText}>تاریخ سفارش: </span>
            <br />
            {orderDate}
          </Typography>
        </div>
      ))}
      <Divider />
      <div className={classes.orders}>
        <span className={classes.coloredText}>لیست سفارشات: </span>
        {order.map((item, index) => (
          <div className={classes.orderContainer} key={index}>
            <Typography className={classes.productName}>
              {item.productSubset} {item.productName}
            </Typography>
            <Typography className={classes.numberOfProducts}>
              {item.quantity}
              <span className={classes.coloredText}> عدد</span>
            </Typography>
          </div>
        ))}
      </div>
      <Divider />
      <div className={classes.buttonsContainer}>
        {/* <Button className={classes.sendOrder}>ارسال سفارش</Button> */}
        <Button className={classes.removeOrder}>حذف سفارش</Button>
      </div>
    </div>
  );
};

export default SingleOrder;
