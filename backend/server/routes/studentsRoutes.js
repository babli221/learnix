const express = require('express');
const router = express.Router();


const studentsController = require("../apis/students/studentsController")
const teacherController = require("../apis/teachers/teachersController")
const classController = require("../apis/class/classController")
const materialsController = require("../apis/materials/materialsController")
const announcementsController = require("../apis/announcements/announcementsController")
const assignmentsController = require("../apis/assignments/assignmentsController")
const commentController = require("../apis/comments/commentController")
const assignClassController = require("../apis/assignClass/assignClassController")
const userController = require("../apis/user/userController")

router.post("/students/add", studentsController.register)
router.post("/students/update", studentsController.update)
router.post("/students/single", studentsController.single)
router.post("/students/all", studentsController.all)
router.post("/students/softDelete", studentsController.softDelete)

router.post("/login", userController.login)


module.exports = router;
