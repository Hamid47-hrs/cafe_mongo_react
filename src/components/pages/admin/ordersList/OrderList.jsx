import AdminHeader from "../header/AdminHeader";
import SingleOrder from "./singleOrder/SingleOrder";
import useStyle from "./OrderListStyles";

const orders = [
  {
    username: "hamid47",
    firstname: "hamid",
    lastname: "sadati",
    phonenumber: "09050551235",
    address: 'خیابان معلم - معلم پانزده - پلاک 7',
    orderdate: "27/10/2022",
    order: [
      {
        productname: "چای ماسالا",
        numberofproduct: 4,
      },
      {
        productname: "قهوه اسپرسو",
        numberofproduct: 2,
      },
      {
        productname: "پیتزا قارچ و گوشت",
        numberofproduct: 1,
      },
      {
        productname: "ساندویچ بندری",
        numberofproduct: 3,
      },
    ],
  },
  {
    username: "hamid47",
    firstname: "hamid",
    lastname: "sadati",
    phonenumber: "09050551235",
    address: 'خیابان معلم - معلم پانزده - پلاک 7',
    orderdate: "27/10/2022",
    order: [
      {
        productname: "چای ماسالا",
        numberofproduct: 4,
      },
      {
        productname: "قهوه اسپرسو",
        numberofproduct: 2,
      },
      {
        productname: "پیتزا قارچ و گوشت",
        numberofproduct: 1,
      },
      {
        productname: "ساندویچ بندری",
        numberofproduct: 3,
      },
    ],
  },
  {
    username: "hamid47",
    firstname: "hamid",
    lastname: "sadati",
    phonenumber: "09050551235",
    address: 'خیابان معلم - معلم پانزده - پلاک 7',
    orderdate: "27/10/2022",
    order: [
      {
        productname: "چای ماسالا",
        numberofproduct: 4,
      },
      {
        productname: "قهوه اسپرسو",
        numberofproduct: 2,
      },
      {
        productname: "پیتزا قارچ و گوشت",
        numberofproduct: 1,
      },
      {
        productname: "ساندویچ بندری",
        numberofproduct: 3,
      },
    ],
  },
  {
    username: "hamid47",
    firstname: "hamid",
    lastname: "sadati",
    phonenumber: "09050551235",
    address: 'خیابان معلم - معلم پانزده - پلاک 7',
    orderdate: "27/10/2022",
    order: [
      {
        productname: "چای ماسالا",
        numberofproduct: 4,
      },
      {
        productname: "قهوه اسپرسو",
        numberofproduct: 2,
      },
      {
        productname: "پیتزا قارچ و گوشت",
        numberofproduct: 1,
      },
      {
        productname: "ساندویچ بندری",
        numberofproduct: 3,
      },
    ],
  },
  {
    username: "hamid47",
    firstname: "hamid",
    lastname: "sadati",
    phonenumber: "09050551235",
    address: 'خیابان معلم - معلم پانزده - پلاک 7',
    orderdate: "27/10/2022",
    order: [
      {
        productname: "چای ماسالا",
        numberofproduct: 4,
      },
      {
        productname: "قهوه اسپرسو",
        numberofproduct: 2,
      },
      {
        productname: "پیتزا قارچ و گوشت",
        numberofproduct: 1,
      },
      {
        productname: "ساندویچ بندری",
        numberofproduct: 3,
      },
    ],
  },
  {
    username: "hamid47",
    firstname: "hamid",
    lastname: "sadati",
    phonenumber: "09050551235",
    address: 'خیابان معلم - معلم پانزده - پلاک 7',
    orderdate: "27/10/2022",
    order: [
      {
        productname: "چای ماسالا",
        numberofproduct: 4,
      },
      {
        productname: "قهوه اسپرسو",
        numberofproduct: 2,
      },
      {
        productname: "پیتزا قارچ و گوشت",
        numberofproduct: 1,
      },
      {
        productname: "ساندویچ بندری",
        numberofproduct: 3,
      },
    ],
  },
  {
    username: "hamid47",
    firstname: "hamid",
    lastname: "sadati",
    phonenumber: "09050551235",
    address: 'خیابان معلم - معلم پانزده - پلاک 7',
    orderdate: "27/10/2022",
    order: [
      {
        productname: "چای ماسالا",
        numberofproduct: 4,
      },
      {
        productname: "قهوه اسپرسو",
        numberofproduct: 2,
      },
      {
        productname: "پیتزا قارچ و گوشت",
        numberofproduct: 1,
      },
      {
        productname: "ساندویچ بندری",
        numberofproduct: 3,
      },
    ],
  },
  {
    username: "hamid47",
    firstname: "hamid",
    lastname: "sadati",
    phonenumber: "09050551235",
    address: 'خیابان معلم - معلم پانزده - پلاک 7',
    orderdate: "27/10/2022",
    order: [
      {
        productname: "چای ماسالا",
        numberofproduct: 4,
      },
      {
        productname: "قهوه اسپرسو",
        numberofproduct: 2,
      },
      {
        productname: "پیتزا قارچ و گوشت",
        numberofproduct: 1,
      },
      {
        productname: "ساندویچ بندری",
        numberofproduct: 3,
      },
    ],
  },
  {
    username: "hamid47",
    firstname: "hamid",
    lastname: "sadati",
    phonenumber: "09050551235",
    address: 'خیابان معلم - معلم پانزده - پلاک 7',
    orderdate: "27/10/2022",
    order: [
      {
        productname: "چای ماسالا",
        numberofproduct: 4,
      },
      {
        productname: "قهوه اسپرسو",
        numberofproduct: 2,
      },
      {
        productname: "پیتزا قارچ و گوشت",
        numberofproduct: 1,
      },
      {
        productname: "ساندویچ بندری",
        numberofproduct: 3,
      },
    ],
  },
  {
    username: "hamid47",
    firstname: "hamid",
    lastname: "sadati",
    phonenumber: "09050551235",
    address: 'خیابان معلم - معلم پانزده - پلاک 7',
    orderdate: "27/10/2022",
    order: [
      {
        productname: "چای ماسالا",
        numberofproduct: 4,
      },
      {
        productname: "قهوه اسپرسو",
        numberofproduct: 2,
      },
      {
        productname: "پیتزا قارچ و گوشت",
        numberofproduct: 1,
      },
      {
        productname: "ساندویچ بندری",
        numberofproduct: 3,
      },
    ],
  },
  {
    username: "hamid47",
    firstname: "hamid",
    lastname: "sadati",
    phonenumber: "09050551235",
    address: 'خیابان معلم - معلم پانزده - پلاک 7',
    orderdate: "27/10/2022",
    order: [
      {
        productname: "چای ماسالا",
        numberofproduct: 4,
      },
      {
        productname: "قهوه اسپرسو",
        numberofproduct: 2,
      },
      {
        productname: "پیتزا قارچ و گوشت",
        numberofproduct: 1,
      },
      {
        productname: "ساندویچ بندری",
        numberofproduct: 3,
      },
    ],
  },
  {
    username: "hamid47",
    firstname: "hamid",
    lastname: "sadati",
    phonenumber: "09050551235",
    address: 'خیابان معلم - معلم پانزده - پلاک 7',
    orderdate: "27/10/2022",
    order: [
      {
        productname: "چای ماسالا",
        numberofproduct: 4,
      },
      {
        productname: "قهوه اسپرسو",
        numberofproduct: 2,
      },
      {
        productname: "پیتزا قارچ و گوشت",
        numberofproduct: 1,
      },
      {
        productname: "ساندویچ بندری",
        numberofproduct: 3,
      },
    ],
  },
  {
    username: "hamid47",
    firstname: "hamid",
    lastname: "sadati",
    phonenumber: "09050551235",
    address: 'خیابان معلم - معلم پانزده - پلاک 7',
    orderdate: "27/10/2022",
    order: [
      {
        productname: "چای ماسالا",
        numberofproduct: 4,
      },
      {
        productname: "قهوه اسپرسو",
        numberofproduct: 2,
      },
      {
        productname: "پیتزا قارچ و گوشت",
        numberofproduct: 1,
      },
      {
        productname: "ساندویچ بندری",
        numberofproduct: 3,
      },
    ],
  },
  {
    username: "hamid47",
    firstname: "hamid",
    lastname: "sadati",
    phonenumber: "09050551235",
    address: 'خیابان معلم - معلم پانزده - پلاک 7',
    orderdate: "27/10/2022",
    order: [
      {
        productname: "چای ماسالا",
        numberofproduct: 4,
      },
      {
        productname: "قهوه اسپرسو",
        numberofproduct: 2,
      },
      {
        productname: "پیتزا قارچ و گوشت",
        numberofproduct: 1,
      },
      {
        productname: "ساندویچ بندری",
        numberofproduct: 3,
      },
    ],
  },
  {
    username: "hamid47",
    firstname: "hamid",
    lastname: "sadati",
    phonenumber: "09050551235",
    address: 'خیابان معلم - معلم پانزده - پلاک 7',
    orderdate: "27/10/2022",
    order: [
      {
        productname: "چای ماسالا",
        numberofproduct: 4,
      },
      {
        productname: "قهوه اسپرسو",
        numberofproduct: 2,
      },
      {
        productname: "پیتزا قارچ و گوشت",
        numberofproduct: 1,
      },
      {
        productname: "ساندویچ بندری",
        numberofproduct: 3,
      },
    ],
  },
  {
    username: "hamid47",
    firstname: "hamid",
    lastname: "sadati",
    phonenumber: "09050551235",
    address: 'خیابان معلم - معلم پانزده - پلاک 7',
    orderdate: "27/10/2022",
    order: [
      {
        productname: "چای ماسالا",
        numberofproduct: 4,
      },
      {
        productname: "قهوه اسپرسو",
        numberofproduct: 2,
      },
      {
        productname: "پیتزا قارچ و گوشت",
        numberofproduct: 1,
      },
      {
        productname: "ساندویچ بندری",
        numberofproduct: 3,
      },
    ],
  },
];
const OrderList = () => {
  const classes = useStyle();

  return (
    <>
      <AdminHeader />
      <div className={classes.container}>
        {
          orders.map((item, index) => (
            <SingleOrder
            key={index}
            userName={item.username}
            firstName={item.firstname}
            lastName={item.lastname}
            phoneNumber={item.phonenumber}
            orderDate={item.orderdate}
            address={item.address}
            order = {item.order}
            />
          ))
        }
      </div>
    </>
  );
};

export default OrderList;
