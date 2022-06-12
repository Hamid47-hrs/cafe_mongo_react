import { Typography, Button } from "@material-ui/core";
import axios from "axios";
import { toast } from "react-toastify";
import useStyle from "./SingleUserStyles";

const SingleUser = (props) => {
  const classes = useStyle();

  const removeUser = () => {
    const userId = props.userId;
    const config = {
      headers: {
        "x-auth-token": localStorage.getItem("x-auth-token"),
      },
    };
    axios
      .delete("https://cafe-mongo-backend.herokuapp.com/admin/delete-user/" + userId, config)
      .then((res) => {
        toast.success(res.data.message);
        props.refresh(-1);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };

  const userOrders = () => {};

  return (
    <div className={classes.container}>
      <div>
        <Typography className={classes.userName}>
          نام کاربری :
          <br />
          {props.username}
        </Typography>
      </div>
      <div className={classes.fullName}>
        <Typography className={classes.fullNameText}>نام کامل : </Typography>
        <Typography className={classes.firstName}>{props.firstname}</Typography>
        <Typography className={classes.lastName}>{props.lastname}</Typography>
      </div>
      <div>
        <Typography className={classes.showDate}>
          تاریخ عضویت :
          <br />
          {props.date}
        </Typography>
      </div>
      <div>
        <Typography className={classes.NoPurchases}>
          دفعات خرید :{props.NoP}
        </Typography>
      </div>
      <div className={classes.buttonsContainer}>
        <Button className={classes.removeButton} onClick={removeUser}>
          حذف کاربر
        </Button>
        <Button className={classes.showOrders} onClick={userOrders}>
          سفارشات کاربر
        </Button>
      </div>
    </div>
  );
};
export default SingleUser;
