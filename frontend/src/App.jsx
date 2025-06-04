import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MasterLayout from './component/layout/MasterLayout'
import Home from './component/pages/Home'
import About from './component/pages/About'
import Courses from './component/pages/courses'
import Contact from './component/pages/Contact'
import Pages from './component/pages/Pages'
import Services from './component/pages/Services'
import AddAnnouncement from './component/admin/announcements/AddAnnouncement'
import AllAnnouncement from './component/admin/announcements/AllAnnouncement'
import SingleAnnouncement from './component/admin/announcements/SingleAnnouncement'
import SoftDeleteAnnouncement from './component/admin/announcements/SoftDeleteAnnouncement'
import UpdateAnnouncement from './component/admin/announcements/UpdateAnnouncement'
import AddAssignment from './component/admin/assignments/AddAssignment'
import AllAssignment from './component/admin/assignments/AllAssignment'
import SingleAssignment from './component/admin/assignments/SingleAssignment'
import SoftDeleteAssignment from './component/admin/assignments/SoftDeleteAssignment'
import UpdateAssignment from './component/admin/assignments/UpdateAssignment'
import AddClass from './component/admin/class/AddClass'
import AllClass from './component/admin/class/AllClass'


import UpdateClass from './component/admin/class/UpdateClass'
import AddComment from './component/admin/comments/AddComment'
import AllComment from './component/admin/comments/AllComment'
import SingleComment from './component/admin/comments/SingleComment'
import SoftDeleteComment from './component/admin/comments/SoftDeleteComment'
import UpdateComment from './component/admin/comments/UpdateComment'
import Dashboard from './component/admin/dashboard/Dashboard'
import AddMaterial from './component/admin/materials/AddMaterial'
import AllMaterial from './component/admin/materials/AllMaterial'
import SingleMaterial from './component/admin/materials/SingleMaterial'
import SoftDeleteMaterial from './component/admin/materials/SoftDeleteMaterial'
import UpdateMaterial from './component/admin/materials/UpdateMaterial'
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
            <Route path='/admin/updateteacher' element={<UpdateTeacher></UpdateTeacher>}></Route>

            <Route path='/admin/addclass' element={<AddClass></AddClass>}></Route>
            <Route path='/admin/allclass' element={<AllClass></AllClass>}></Route>
            <Route path='/admin/updateclass' element={<UpdateClass></UpdateClass>}></Route>

            <Route path='/admin/addstudent' element={<AddStudent></AddStudent>}></Route>
            <Route path='/admin/allstudent' element={<AllStudent></AllStudent>}></Route>
            <Route path='/admin/updatestudent' element={<UpdateStudent></UpdateStudent>}></Route>

            <Route path='/admin/addmaterial' element={<AddMaterial></AddMaterial>}></Route>
            <Route path='/admin/allmaterial' element={<AllMaterial></AllMaterial>}></Route>
            <Route path='/admin/updatematerial' element={<UpdateMaterial></UpdateMaterial>}></Route>

            <Route path='/admin/addannouncement' element={<AddAnnouncement></AddAnnouncement>}></Route>
            <Route path='/admin/allannouncement' element={<AllAnnouncement></AllAnnouncement>}></Route>
            <Route path='/admin/updateannouncement' element={<UpdateAnnouncement></UpdateAnnouncement>}></Route>

            <Route path='/admin/addassignment' element={<AddAssignment></AddAssignment>}></Route>
            <Route path='/admin/allassignment' element={<AllAssignment></AllAssignment>}></Route>
            <Route path='/admin/updateassignment' element={<UpdateAssignment></UpdateAssignment>}></Route>

            <Route path='/admin/addcomment' element={<AddComment></AddComment>}></Route>
            <Route path='/admin/allcomment' element={<AllComment></AllComment>}></Route>
            <Route path='/admin/updatecomment' element={<UpdateComment></UpdateComment>}></Route>





          </Route>
          <Route path="/teacher" element={<TeacherMasterLayout></TeacherMasterLayout>}>
            
          </Route>

        </Routes>
      </BrowserRouter>


    </>
  )
}

export default App

