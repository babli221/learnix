import axios from "axios";

export const BaseUrl = "http://localhost:5000/"

class ApiServices {
    getToken() {
        let obj = {
            Authorization: sessionStorage.getItem("token")
        }
        return obj
    }

    Login(data) {
        return axios.post(BaseUrl + "student/login", data)
    }

    AddTeacher(data) {
        return axios.post(BaseUrl + "admin/teacher/add", data, { headers: this.getToken() })
    }
    
    UpdateTeacher(data) {
        return axios.post(BaseUrl + "admin/teacher/update", data, { headers: this.getToken() })
    }

    SingleTeacher(data){
        return axios.post(BaseUrl + "admin/teacher/single", data, { headers: this.getToken() })

    }

    AllTeacher(){
        return axios.post(BaseUrl + "admin/teacher/all", null, {headers : this.getToken() })
    }

    DeleteTeacher(data){
        return axios.post(BaseUrl + "admin/teacher/softDelete", data, {headers : this.getToken() })
    }

    AddClass(data) {
        return axios.post(BaseUrl + "admin/class/add", data, { headers: this.getToken() })
    }
    AllClass(){
        return axios.post(BaseUrl + "admin/class/all", null, {headers : this.getToken() })
    }
    DeleteClass(data){
        return axios.post(BaseUrl + "admin/class/softDelete", data, {headers : this.getToken() })
    }



    AddStudent(data) {
        return axios.post(BaseUrl + "admin/students/add", data, { headers: this.getToken() })
    }
    AllStudent(){
        return axios.post(BaseUrl + "admin/students/all", null, {headers : this.getToken() })
    }
    DeleteStudent(data){
        return axios.post(BaseUrl + "admin/students/softDelete", data, {headers : this.getToken() })
    }

    TeacherAddMaterial(data) {
        return axios.post(BaseUrl + "teacher/material/add", data, { headers: this.getToken() })
    }
    TeacherAllMaterial(data) {
        return axios.post(BaseUrl + "teacher/material/all", data, { headers: this.getToken() })
    }
    TeacherDeleteMaterial(data) {
        return axios.post(BaseUrl + "teacher/material/softDelete", data, { headers: this.getToken() })
    }

    TeacherAddAssignment(data) {
        return axios.post(BaseUrl + "teacher/assignment/add", data, { headers: this.getToken() })
    }
    TeacherAllAssignment(data) {
        return axios.post(BaseUrl + "teacher/assignment/all", data, { headers: this.getToken() })
    }
    TeacherDeleteAssignment(data) {
        return axios.post(BaseUrl + "teacher/assignment/softDelete", data, { headers: this.getToken() })
    }

    TeacherAddAnnouncement(data) {
        return axios.post(BaseUrl + "teacher/announcement/add", data, { headers: this.getToken() })
    }
    TeacherAllAnnouncement(data) {
        return axios.post(BaseUrl + "teacher/announcement/all", data, { headers: this.getToken() })
    }
    TeacherDeleteAnnouncement(data) {
        return axios.post(BaseUrl + "teacher/announcement/softDelete", data, { headers: this.getToken() })
    }







}

export default new ApiServices;