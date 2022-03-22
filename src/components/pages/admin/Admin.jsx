import AdminHeader from "./header/AdminHeader";

const Admin = (props) => {
  return (
    <div>
      <AdminHeader />
      <div>{props.children}</div>
    </div>
  );
};

export default Admin;
