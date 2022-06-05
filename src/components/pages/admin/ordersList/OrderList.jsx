import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import AdminHeader from "../header/AdminHeader";
import SingleOrder from "./singleOrder/SingleOrder";
import useStyle from "./OrderListStyles";

const OrderList = () => {
  const classes = useStyle();

  const [userData, setUserData] = useState([]);
  const [refresh, setRefresh] = useState(userData.length);


  useEffect(() => {
    const config = {
      headers: {
        "x-auth-token": localStorage.getItem("x-auth-token"),
      },
    };
    axios
      .post("http://127.0.0.1:8080/admin/cart-list", {}, config)
      .then((result) => {
        setUserData(result.data);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  }, [refresh]);
  return (
    <>
      <AdminHeader />
      <div className={classes.container}>
        {userData.map((item, index) => (
          <SingleOrder
            key={index}
            userId={item._id}
            orderDate={item.orderDate}
            address={item.userAddress}
            order={item.items}
            refresh={setRefresh}
          />
        ))}
      </div>
    </>
  );
};

export default OrderList;
