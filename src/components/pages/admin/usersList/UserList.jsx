import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import AdminHeader from "../header/AdminHeader";
import SingleUser from "./singleUser/SingleUser";
import useStyle from "./UserListStyles";

const UserList = () => {
  const classes = useStyle();

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const config = {
      headers: {
        "x-auth-token": localStorage.getItem("x-auth-token"),
      },
    };
    axios
      .post("http://127.0.0.1:8080/admin/users-list", {}, config)
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  }, []);

  return (
    <>
      <AdminHeader />
      <div className={classes.container}>
        {users.map((item, index) => (
          <SingleUser
            key={index}
            username={item.userName}
            firstname={item.firstName}
            lastname={item.lastName}
            date={item.date}
            NoP={item.NoPourchasses}
          />
        ))}
      </div>
    </>
  );
};

export default UserList;
