import { Outlet } from "react-router-dom";
import TeacherHeader from "./TeacherHeader";
import TeacherFooter from "./TeacherFooter";


export default function TeacherMasterLayout() {
    return (
        <>
            <TeacherHeader></TeacherHeader>
            <Outlet></Outlet>
            <TeacherFooter></TeacherFooter>
        </>
    )
}