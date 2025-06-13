import axios from "axios";

export const BaseUrl = "http://localhost:5000/";

class ApiServices {
    getToken() {
        return {
            Authorization: sessionStorage.getItem("token")
        };
    }

    // Auth
    Login(data) {
        return axios.post(BaseUrl + "student/login", data);
    }

    // ----- Teacher -----
    AddTeacher(data) {
        return axios.post(BaseUrl + "admin/teacher/add", data, { headers: this.getToken() });
    }

    UpdateTeacher(data) {
        return axios.post(BaseUrl + "admin/teacher/update", data, { headers: this.getToken() });
    }

    SingleTeacher(data) {
        return axios.post(BaseUrl + "admin/teacher/single", data, { headers: this.getToken() });
    }

    AllTeacher() {
        return axios.post(BaseUrl + "admin/teacher/all", null, { headers: this.getToken() });
    }

    DeleteTeacher(data) {
        return axios.post(BaseUrl + "admin/teacher/softDelete", data, { headers: this.getToken() });
    }

    // ----- Class -----
    AddClass(data) {
        return axios.post(BaseUrl + "admin/class/add", data, { headers: this.getToken() });
    }

    UpdateClass(data) {
        return axios.post(BaseUrl + "admin/class/update", data, { headers: this.getToken() });
    }

    SingleClass(data) {
        return axios.post(BaseUrl + "admin/class/single", data, { headers: this.getToken() });
    }

    AllClass() {
        return axios.post(BaseUrl + "admin/class/all", null, { headers: this.getToken() });
    }

    DeleteClass(data) {
        return axios.post(BaseUrl + "admin/class/softDelete", data, { headers: this.getToken() });
    }

    // ----- Student -----
    AddStudent(data) {
        return axios.post(BaseUrl + "admin/students/add", data, { headers: this.getToken() });
    }

    UpdateStudent(data) {
        return axios.post(BaseUrl + "admin/students/update", data, { headers: this.getToken() });
    }

    SingleStudent(data) {
        return axios.post(BaseUrl + "admin/students/single", data, { headers: this.getToken() });
    }

    AllStudent() {
        return axios.post(BaseUrl + "admin/students/all", null, { headers: this.getToken() });
    }

    DeleteStudent(data) {
        return axios.post(BaseUrl + "admin/students/softDelete", data, { headers: this.getToken() });
    }

    // ----- Teacher > Class -----
    TeacherShowClassJoined(data) {
        return axios.post(BaseUrl + "teacher/showclassjoined/teacher/", data, { headers: this.getToken() });
    }

    // ----- Teacher > Material -----
    TeacherAddMaterial(data) {
        return axios.post(BaseUrl + "teacher/material/add", data, { headers: this.getToken() });
    }

    TeacherAllMaterial(data) {
        return axios.post(BaseUrl + "teacher/material/all", data, { headers: this.getToken() });
    }

    TeacherDeleteMaterial(data) {
        return axios.post(BaseUrl + "teacher/material/softDelete", data, { headers: this.getToken() });
    }
    TeacherSingleMaterial(data) {
        return axios.post(BaseUrl + "teacher/material/single", data, { headers: this.getToken() });
    }
    TeacherUpdateMaterial(data) {
        return axios.post(BaseUrl + "teacher/material/update", data, { headers: this.getToken() });
    }
    

    // ----- Teacher > Assignment -----
    TeacherAddAssignment(data) {
        return axios.post(BaseUrl + "teacher/assignment/add", data, { headers: this.getToken() });
    }

    TeacherAllAssignment(data) {
        return axios.post(BaseUrl + "teacher/assignment/all", data, { headers: this.getToken() });
    }

    TeacherDeleteAssignment(data) {
        return axios.post(BaseUrl + "teacher/assignment/softDelete", data, { headers: this.getToken() });
    }
    TeacherSingleAssignment(data) {
        return axios.post(BaseUrl + "teacher/assignment/single", data, { headers: this.getToken() });
    }
    TeacherUpdateAssignment(data) {
        return axios.post(BaseUrl + "teacher/assignment/update", data, { headers: this.getToken() });
    }

    // ----- Teacher > Announcement -----
    TeacherAddAnnouncement(data) {
        return axios.post(BaseUrl + "teacher/announcement/add", data, { headers: this.getToken() });
    }

    TeacherAllAnnouncement(data) {
        return axios.post(BaseUrl + "teacher/announcement/all", data, { headers: this.getToken() });
    }

    TeacherDeleteAnnouncement(data) {
        return axios.post(BaseUrl + "teacher/announcement/softDelete", data, { headers: this.getToken() });
    }
    TeacherSingleAnnouncement(data) {
        return axios.post(BaseUrl + "teacher/announcement/single", data, { headers: this.getToken() });
    }
    TeacherUpdateAnnouncement(data) {
        return axios.post(BaseUrl + "teacher/announcement/update", data, { headers: this.getToken() });
    }

    // ----- Admin Change Password -----
    AdminChangePassword(data) {
        return axios.post(BaseUrl + "admin/password/change", data, { headers: this.getToken() });
    }
    // ----- Teacher Change Password -----
    TeacherChangePassword(data) {
        return axios.post(BaseUrl + "teacher/password/change", data, { headers: this.getToken() });
    }
}

export default new ApiServices();
