import { Outlet } from "react-router-dom";
import AdminHeader from "./AdminHeader";
import AdminFooter from "./AdminFooter";

export default function AdminMasterLayout(){
    return(
        <>
           <AdminHeader></AdminHeader>
           <Outlet></Outlet>
           <AdminFooter></AdminFooter>
        </>
    )
}