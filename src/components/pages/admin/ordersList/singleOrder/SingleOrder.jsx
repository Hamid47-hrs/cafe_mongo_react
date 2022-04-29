import { Button, Divider, Typography } from "@material-ui/core";
import useStyle from "./SingleOrderStyles";

const SingleOrder = (props) => {
  const classes = useStyle();

  return (
    <div className={classes.container}>
      <div className={classes.information}>
        <Typography className={classes.userName}>
          <span className={classes.coloredText}>نام کاربری: </span>
          {props.userName}
        </Typography>
        <Typography className={classes.fullName}>
          <span className={classes.coloredText}>نام کامل: </span>
          {props.firstName} {props.lastName}
        </Typography>
        <Typography className={classes.phoneNumber}>
          <span className={classes.coloredText}>شماره تماس: </span>
          {props.phoneNumber}
        </Typography>
        <Typography className={classes.address}>
          <p className={classes.coloredText}>آدرس:</p>
          {props.address}
        </Typography>
        <Typography className={classes.orderDate}>
          <span className={classes.coloredText}>تاریخ سفارش: </span>
          {props.orderDate}
        </Typography>
      </div>
      <Divider />
      <div className={classes.orders}>
        <span className={classes.coloredText}>لیست سفارشات: </span>
        {props.order.map((item, index) => (
          <div className={classes.orderContainer} key={index}>
            <Typography className={classes.productName}>
              {item.productname}
            </Typography>
            <Typography className={classes.numberOfProducts}>
              {item.numberofproduct}
              <span className={classes.coloredText}> عدد</span>
            </Typography>
          </div>
        ))}
      </div>
      <Divider />
      <div className={classes.buttonsContainer}>
        <Button className={classes.sendOrder}>ارسال سفارش</Button>
        <Button className={classes.removeOrder}>حذف سفارش</Button>
      </div>
    </div>
  );
};

export default SingleOrder;
