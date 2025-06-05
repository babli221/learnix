import axios from "axios";

export const BaseUrl = "http://localhost:5000/"

class ApiServices{
    getToken(){
        let obj = {
            Authorization : sessionStorage.getItem("token")
        }
        return obj
    }

    Login(data){
        return axios.post(BaseUrl + "student/login", data)
    }

    AddTeacher(data){
        return axios.post(BaseUrl + "admin/teacher/add", data, {headers : this.getToken()})
    }

    AddClass(data){
    return axios.post(BaseUrl + "admin/class/add", data, {headers : this.getToken()})
}
    AddStudent(data){
    return axios.post(BaseUrl + "admin/students/add", data, {headers : this.getToken()})
}
}

export default new ApiServices;