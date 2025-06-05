const express = require('express');
const router = express.Router();
const multer = require('multer')
const teacherController = require("../apis/teachers/teachersController")
const studentsController = require("../apis/students/studentsController")
const classController = require("../apis/class/classController")
const materialsController = require("../apis/materials/materialsController")
const announcementsController = require("../apis/announcements/announcementsController")
const assignmentsController = require("../apis/assignments/assignmentsController")
const commentController = require("../apis/comments/commentController")
const assignClassController = require("../apis/assignClass/assignClassController")
const userController = require("../apis/user/userController")


const teacherStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './server/public/teachers')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix + "-" + file.originalname)
    }
})
const teacherUpload = multer({ storage: teacherStorage })
router.post("/profile/update", teacherUpload.single('profile'), teacherController.update)

// router.post("/students/add", studentsController.register)
// router.post("/students/update", studentsController.update)
// router.post("/students/single", studentsController.single)
// router.post("/students/all", studentsController.all)
// router.post("/students/softDelete", studentsController.softDelete)

// router.post("/class/add", classController.add)
// router.post("/class/update", classController.update)
router.post("/class/single", classController.single)
router.post("/class/all", classController.all)
// router.post("/class/softDelete", classController.softDelete)



const materialStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './server/public/materials')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix + "-" + file.originalname)
    }
})

const materialUpload = multer({ storage: materialStorage })

router.post("/material/add", materialUpload.single('file'), materialsController.add);
router.post("/material/update", materialUpload.single('file'), materialsController.update);
router.post("/material/softDelete", materialsController.softDelete)
router.post("/material/single", materialsController.single)
router.post("/material/all", materialsController.all)


// Assignments........................


const assignmentStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './server/public/assignments')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix + "-" + file.originalname)
    }
})

const assignmentUpload = multer({ storage: assignmentStorage })


router.post("/assignment/add", assignmentUpload.single('file'), assignmentsController.add)
router.post("/assignment/update", assignmentUpload.single('file'), assignmentsController.update)
router.post("/assignment/single", assignmentsController.single)
router.post("/assignment/all", assignmentsController.all)
router.post("/assignment/softDelete", assignmentsController.softDelete)


// Assignments routes end........................


// Announcements Routes
const announcementStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './server/public/announcements')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix + "-" + file.originalname)
    }
})


const announcementUpload = multer({ storage: announcementStorage })

router.post("/announcement/add", announcementUpload.single('file'), announcementsController.add)
router.post("/announcement/update", announcementUpload.single('file'), announcementsController.update)
router.post("/announcement/single", announcementsController.single)
router.post("/announcement/all", announcementsController.all)
router.post("/announcement/softDelete", announcementsController.softDelete)




// Announcements Routes

// comments....................

router.post("/comment/add", commentController.add)
router.post("/comment/update", commentController.update)
router.post("/comment/single", commentController.single)
router.post("/comment/all", commentController.all)
router.post("/comment/softDelete", commentController.softDelete)

// comments....................




// user
router.post("/password/change", userController.changePassword)

module.exports = router;
