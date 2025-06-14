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
const userController = require("../apis/user/userController");
const multer = require('multer');


router.post("/login", userController.login)
router.post("/students/update", studentsController.update)

// Class
router.post("/class/all", classController.all)

// Announcement
router.post("/announcement/single", announcementsController.single)

// comments....................

router.post("/comment/add", commentController.add)
router.post("/comment/update", commentController.update)
router.post("/comment/single", commentController.single)
router.post("/comment/all", commentController.all)
router.post("/comment/softDelete", commentController.softDelete)

// comments....................

// material
router.post("/material/single", materialsController.single)

//Assign..........................

const assignStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './server/public/assign')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix + "-" + file.originalname)
    }
})


const assignUpload = multer({ storage: assignStorage })

router.post("/assign/add", assignUpload.single('file'), assignClassController.add)
router.post("/assign/update", assignUpload.single('file'), assignClassController.update)
router.post("/assign/single", assignClassController.single)
router.post("/assign/all", assignClassController.all)
router.post("/assign/softDelete", assignClassController.softDelete)
//Assign..........................................


router.post("/password/change", userController.changePassword)

router.post("/students/all", studentsController.all)


module.exports = router;
