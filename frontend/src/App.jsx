import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MasterLayout from './component/layout/MasterLayout'
import Home from './component/pages/Home'
import About from './component/pages/About'
import Courses from './component/pages/courses'
import Contact from './component/pages/Contact'
import Pages from './component/pages/Pages'
import Services from './component/pages/Services'
import AddClass from './component/admin/class/AddClass'
import AllClass from './component/admin/class/AllClass'
import UpdateClass from './component/admin/class/UpdateClass'
import Dashboard from './component/admin/dashboard/Dashboard'
import AddStudent from './component/admin/students/AddStudent'
import AllStudent from './component/admin/students/AllStudent'
import SingleStudent from './component/admin/students/SingleStudent'
import SoftDeleteStudent from './component/admin/students/SoftDeleteStudent'
import UpdateStudent from './component/admin/students/UpdateStudent'
import AddTeacher from './component/admin/teachers/AddTeacher'
import AllTeacher from './component/admin/teachers/AllTeacher'
import UpdateTeacher from './component/admin/teachers/UpdateTeacher'
import SoftDeleteTeacher from './component/admin/teachers/SoftDeleteTeacher'
import SingleTeacher from './component/admin/teachers/SingleTeacher'
import AdminMasterLayout from './component/layout/admin/AdminMasterLayout'
import TeacherMasterLayout from './component/layout/teacher/TeacherMasterLayout'
import Login from './component/students/auth/Login'
import ShowClassJoined from './component/teacher/showclassjoined/ShowClassJoined'

import TeacherAddMaterial from './component/teacher/Materials/TeacherAddMaterial'
import TeacherAllMaterial from './component/teacher/Materials/TeacherAllMaterial'
import TeacherUpdateMaterial from './component/teacher/Materials/TeacherUpdateMaterial'
import TeacherAddAssignment from './component/teacher/Assignments/TeacherAddAssignment'
import TeacherAllAssignment from './component/teacher/Assignments/TeacherAllAssignment'
import TeacherUpdateAssignment from './component/teacher/Assignments/TeacherUpdateAssignment'
import TeacherAddAnnouncement from './component/teacher/Announcements/TeacherAddAnnouncement'
import TeacherAllAnnouncement from './component/teacher/Announcements/TeacherAllAnnouncement'
import TeacherUpdateAnnouncement from './component/teacher/Announcements/TeacherUpdateAnnouncement'
import ChangePassword from './component/teacher/ChangePassword/ChangePassword'
import StudentMasterLayout from './component/layout/student/StudentMasterLayout'
import StudentChangePassword from './component/students/StudentChangePassword/StudentChangePassword'
import ViewJoinedClasses from './component/students/ViewJoinedClasses/ViewJoinedClasses'
import ShowMaterial from './component/students/ShowMaterial/ShowMaterial'
import ShowAssignments from './component/students/ShowAssignments/ShowAssignments'
import ShowAnnouncements from './component/students/ShowAnnouncements/ShowAnnouncements'
import SingleClass from './component/teacher/showclassjoined/SingleClass'
import { ToastContainer } from 'react-toastify'
import AdminChangePassword from './component/admin/ChangePassword/AdminChangePassword'





function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MasterLayout></MasterLayout>}>

            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/about' element={<About></About>}></Route>
            <Route path='/courses' element={<Courses></Courses>}></Route>
            <Route path='/services' element={<Services></Services>}></Route>
            <Route path='/pages' element={<Pages></Pages>}></Route>
            <Route path='/contact' element={<Contact></Contact>}></Route>
            <Route path='/login' element={<Login></Login>}></Route>

          </Route>

          <Route path="/admin" element={<AdminMasterLayout></AdminMasterLayout>}>
            <Route path='/admin' element={<Dashboard></Dashboard>}></Route>
            <Route path='/admin/addteacher' element={<AddTeacher></AddTeacher>}></Route>
            <Route path='/admin/allteacher' element={<AllTeacher></AllTeacher>}></Route>
            <Route path='/admin/updateteacher/:id' element={<UpdateTeacher></UpdateTeacher>}></Route>

            <Route path='/admin/addclass' element={<AddClass></AddClass>}></Route>
            <Route path='/admin/allclass' element={<AllClass></AllClass>}></Route>
            <Route path='/admin/updateclass/:id' element={<UpdateClass></UpdateClass>}></Route>

            <Route path='/admin/addstudent' element={<AddStudent></AddStudent>}></Route>
            <Route path='/admin/allstudent' element={<AllStudent></AllStudent>}></Route>
            <Route path='/admin/updatestudent/:id' element={<UpdateStudent></UpdateStudent>}></Route>

            <Route path='/admin/adminchangepassword' element={<AdminChangePassword></AdminChangePassword>}></Route>
            
          </Route>

          <Route path="/teacher" element={<TeacherMasterLayout></TeacherMasterLayout>}>
          
            <Route path='/teacher/' element={<ShowClassJoined></ShowClassJoined>}></Route>
           

            <Route path='/teacher/teacheraddmaterial' element={<TeacherAddMaterial></TeacherAddMaterial>}></Route>
            <Route path='/teacher/teacherallmaterial' element={<TeacherAllMaterial></TeacherAllMaterial>}></Route>
            <Route path='/teacher/teacherupdatematerial/:id' element={<TeacherUpdateMaterial></TeacherUpdateMaterial>}></Route>

            <Route path='/teacher/teacheraddassignment' element={<TeacherAddAssignment></TeacherAddAssignment>}></Route>
            <Route path='/teacher/teacherallassignment' element={<TeacherAllAssignment></TeacherAllAssignment>}></Route>
            <Route path='/teacher/teacherupdateassignment/:id' element={<TeacherUpdateAssignment></TeacherUpdateAssignment>}></Route>

            <Route path='/teacher/teacheraddannouncement' element={<TeacherAddAnnouncement></TeacherAddAnnouncement>}></Route>
            <Route path='/teacher/teacherallannouncement' element={<TeacherAllAnnouncement></TeacherAllAnnouncement>}></Route>
            <Route path='/teacher/teacherupdateannouncement/:id' element={<TeacherUpdateAnnouncement></TeacherUpdateAnnouncement>}></Route>

            <Route path='/teacher/changepassword' element={<ChangePassword></ChangePassword>}></Route>
            <Route path='/teacher/singleclass/:id/:tId' element={<SingleClass></SingleClass>}></Route>
            
          </Route>

          <Route path="/student" element={<StudentMasterLayout></StudentMasterLayout>}>
          <Route path='/student/' element={<ViewJoinedClasses></ViewJoinedClasses>}></Route>
          <Route path='/student/showmaterial' element={<ShowMaterial></ShowMaterial>}></Route>
          <Route path='/student/showassignments' element={<ShowAssignments></ShowAssignments>}></Route>
          <Route path='/student/showannouncements' element={<ShowAnnouncements></ShowAnnouncements>}></Route>

          <Route path='/student/studentchangepassword' element={<StudentChangePassword></StudentChangePassword>}></Route>
          


          </Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer></ToastContainer>
    </>
  );
}

export default App;


