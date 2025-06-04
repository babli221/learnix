const Students = require("../students/studentsModel")
const Classes = require("../class/classModel");
const Teachers = require("../teachers/teachersModel")



let dashboard = async (req, res) => {

    const totalStudents = await Students.countDocuments();
    const totalClasses = await Classes.countDocuments();
    const totalTeachers = await Teachers.countDocuments();

    res.send({
        status: 200,
        success: true,
        message: "Welcome Admin",
        totalStudents: totalStudents,
        totalClasses: totalClasses,
        totalTeachers: totalTeachers

    })
}

module.exports = {
    dashboard
}