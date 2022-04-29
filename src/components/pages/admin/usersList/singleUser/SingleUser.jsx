import { Typography, Button } from "@material-ui/core";
import useStyle from "./SingleUserStyles";

const SingleUser = (props) => {
  const classes = useStyle();

  return (
    <div className={classes.container}>
      <div>
        <Typography className={classes.userName}>نام کاربری : {props.username}</Typography>
      </div>
      <div className={classes.fullName}>
        <Typography className={classes.fullNameText}>نام کامل : </Typography>
        <Typography className={classes.lastName}>{props.lastname}</Typography>
        <Typography className={classes.firstName}>{props.firstname}</Typography>
        
      </div>
      <div>
        <Typography className={classes.showDate}>تاریخ عضویت : {props.date}</Typography>
      </div>
      <div>
        <Typography className={classes.NoPurchases}>
            دفعات خرید : 
          {props.NoP}
        </Typography>
      </div>
      <div className={classes.buttonsContainer}>
        <Button className={classes.removeButton}>حذف کاربر</Button>
        <Button className={classes.showOrders}>سفارشات کاربر</Button>
      </div>
    </div>
  );
};
export default SingleUser;
