import AdminHeader from "./header/AdminHeader";

const Admin = (props) => {
    return(
        <>
        <AdminHeader />
        <div>{props.children}</div>
        </>
    )
}

export default Admin;