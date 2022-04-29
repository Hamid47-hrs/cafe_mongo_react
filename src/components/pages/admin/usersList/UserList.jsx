import AdminHeader from "../header/AdminHeader";
import SingleUser from "./singleUser/SingleUser";
import useStyle from "./UserListStyles";

const users = [
  {
    id: 1,
    username: "hamid47",
    firstName: "hamid",
    lastName: "sadati",
    date: "27/10/1994",
    NoPourchasses: 10,
  },
  {
    id: 1,
    username: "hamid47",
    firstName: "hamid",
    lastName: "sadati",
    date: "27/10/1994",
    NoPourchasses: 10,
  },
  {
    id: 1,
    username: "hamid47",
    firstName: "hamid",
    lastName: "sadati",
    date: "27/10/1994",
    NoPourchasses: 10,
  },
  {
    id: 1,
    username: "hamid47",
    firstName: "hamid",
    lastName: "sadati",
    date: "27/10/1994",
    NoPourchasses: 10,
  },
  {
    id: 1,
    username: "hamid47",
    firstName: "hamid",
    lastName: "sadati",
    date: "27/10/1994",
    NoPourchasses: 10,
  },
  {
    id: 1,
    username: "hamid47",
    firstName: "hamid",
    lastName: "sadati",
    date: "27/10/1994",
    NoPourchasses: 10,
  },
  {
    id: 1,
    username: "hamid47",
    firstName: "hamid",
    lastName: "sadati",
    date: "27/10/1994",
    NoPourchasses: 10,
  },
  {
    id: 1,
    username: "hamid47",
    firstName: "hamid",
    lastName: "sadati",
    date: "27/10/1994",
    NoPourchasses: 10,
  },
  
];
const UserList = () => {
  const classes = useStyle();

  return (
    <>
      <AdminHeader />
      <div className={classes.container}>
        {users.map((item, index) => (
          <SingleUser
            key={index}
            username={item.username}
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
