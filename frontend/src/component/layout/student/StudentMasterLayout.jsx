import { Outlet } from "react-router-dom";
import StudentHeader from "./StudentHeader";
import StudentFooter from "./StudentFooter";


export default function StudentMasterLayout(){
    return(
        <>
           <StudentHeader></StudentHeader>
           <Outlet></Outlet>
           <StudentFooter></StudentFooter>
        </>
    )
}