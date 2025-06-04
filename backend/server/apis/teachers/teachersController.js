const Teacher = require("./teachersModel")
const User = require("../user/userModel")
const bcrypt = require("bcrypt");
const saltRounds = 10;

const register = (req, res) => {
    console.log(req.body)

    
    let validation = ""
    if (!req.body.name) {
        validation += "name is required "
    }
    if (!req.body.email) {
        validation += "email is required "
    }
    if (!req.body.password) {
        validation += "password is required "
    }

    if (!!validation) {
        res.send({
            status: 400,
            success: false,
            message: validation
        })
    }
    else {
        User.findOne({ email: req.body.email }).then(async (userData) => {
            if (userData) {
                res.send({
                    success: false,
                    status: 400,
                    message: "Email Already Exists"
                })
            } else {
                User.countDocuments().then((totalUsers) => {
                    let newUser = new User()
                    newUser.autoId = totalUsers + 1
                    newUser.name = req.body.name
                    newUser.email = req.body.email
                    newUser.password = bcrypt.hashSync(req.body.password, saltRounds)
                    newUser.userType = 2
                    newUser.save().then((savedUser) => {
                        Teacher.countDocuments().then((totalTeachers) => {
                            let newTeacher = new Teacher()
                            newTeacher.autoId = totalTeachers + 1
                            newTeacher.name = req.body.name
                            newTeacher.email = req.body.email
                            newTeacher.userId = savedUser._id
                            newTeacher.save().then((savedTeacher) => {
                                newUser.teacherId = savedTeacher._id
                                newUser.save().then(() => {
                                    res.send({
                                        success: true,
                                        status: 201,
                                        message: "Teacher Registered Successfully",
                                        data: savedUser
                                    })
                                }).catch((err) => {
                                    res.send({
                                        success: false,
                                        status: 400,
                                        message: err
                                    })
                                })

                            }).catch((err) => {
                                res.send({
                                    success: false,
                                    status: 400,
                                    message: err
                                })
                            })
                        }).catch((err) => {
                            res.send({
                                success: false,
                                status: 400,
                                message: err
                            })
                        })
                    }).catch((err) => {
                        res.send({
                            success: false,
                            status: 400,
                            message: err
                        })
                    })
                }).catch((err) => {
                    res.send({
                        success: false,
                        status: 400,
                        message: err
                    })
                })
            }
        }).catch((err) => {
            res.send({
                success: false,
                status: 400,
                message: err
            })
        })
    }
}


const add = (req, res) => {
    console.log(req.file);
    let validation = ""
    if (!req.body.name) {
        validation += "name is required"
    }
    if (!req.file) {
        validation += "image is required"
    }
    if (!!validation) {
        res.send({
            status: 400,
            success: false,
            message: validation
        })
    }
    else {
        Teacher.findOne({ name: req.body.name }).then(async (teacherData) => {
            if (teacherData) {
                res.send({
                    success: false,
                    status: 400,
                    message: "Teacher Already Exist"
                })
            } else {
                let total = await Teacher.countDocuments()
                let newTeacher = new Teacher()
                newTeacher.autoId = total + 1
                newTeacher.name = req.body.name
                newTeacher.description = req.body.description
                newTeacher.image = "teacherImages/" + req.file.filename
                newTeacher.save().then((savedTeacher) => {
                    res.send({
                        status: 200,
                        success: true,
                        message: "Teacher Added Successfully",
                        data: savedTeacher
                    })

                }).catch((err) => {
                    res.send({
                        success: false,
                        status: 400,
                        message: err
                    })
                })

            }
        }).catch((err) => {
            res.send({
                success: false,
                status: 400,
                message: err
            })
        })
    }
}

const update = (req, res) => {
    validation = ''
    if (!req.body._id) {
        validation += "_id is required"
    }
    if (!!validation) {
        res.send({
            status: 400,
            success: false,
            message: validation
        })
    }
    else {
        Teacher.findOne({ _id: req.body._id }).then((teacherData) => {
            if (teacherData) {
                if (req.body.name) {
                    teacherData.name = req.body.name
                }
                if (req.body.contact) {
                    teacherData.contact = req.body.contact
                }
                if (req.body.address) {
                    teacherData.address = req.body.address
                }
                if (req.body.qualification) {
                    teacherData.qualification = req.body.qualification
                }
                if (req.file) {
                    teacherData.profile = "teachers/" + req.file.filename
                }
                teacherData.save().then((updatedUser) => {
                    User.findOne({
                        teacherId: req.body._id
                    }).then((userData) => {
                        if (userData) {
                            userData.name = req.body.name
                        }
                        userData.save().then(() => {
                            res.send({
                                status: 200,
                                success: true,
                                message: "Record Updated",
                                data: updatedUser
                            })
                        })

                    })



                }).catch((err) => {
                    res.send({
                        success: false,
                        status: 400,
                        message: err
                    })
                })

            }
            else {
                res.send({
                    success: false,
                    status: 404,
                    message: "Teacher not found"
                })
            }

        }).catch((err) => {
            res.send({
                success: false,
                status: 400,
                message: err
            })
        })
    }

}



const softDelete = (req, res) => {
    validation = ''
    if (!req.body._id) {
        validation += "_id is required"
    }
    if (!req.body.status) {
        validation += "status is required"
    }
    if (!!validation) {
        res.send({
            status: 400,
            success: false,
            message: validation
        })
    }
    else {
        Teacher.findOne({ _id: req.body._id }).then((teacherData) => {
            if (TeacherData) {
                if (req.body.status) {
                    TeacherData.status = req.body.status
                }
                teacherData.save().then((updatedTeacher) => {
                    res.send({
                        status: 200,
                        success: true,
                        message: "Teacher Status Updated",
                        data: updatedTeacher
                    })

                }).catch((err) => {
                    res.send({
                        success: false,
                        status: 400,
                        message: err
                    })
                })

            }
            else {
                res.send({
                    success: false,
                    status: 404,
                    message: "Teacher not found"
                })
            }

        }).catch((err) => {
            res.send({
                success: false,
                status: 400,
                message: err
            })
        })
    }

}

const single = (req, res) => {
    validation = ''
    if (!req.body._id) {
        validation += "_id is required"
    }
    if (!!validation) {
        res.send({
            status: 400,
            success: false,
            message: validation
        })
    }
    else {
        Teacher.findOne({ _id: req.body._id }).then((teacherData) => {
            if (teacherData) {
                res.send({
                    status: 200,
                    success: true,
                    message: "Teacher Loaded Successfully",
                    data: teacherData
                })
            }
            else {
                res.send({
                    success: false,
                    status: 404,
                    message: "Teacher not found"
                })
            }
        }).catch((err) => {
            res.send({
                success: false,
                status: 400,
                message: err
            })
        })
    }
}

const all = async (req, res) => {
    Teacher.find(req.body).then(async (data) => {
        await Teacher.countDocuments(req.body).then((total) => {
            res.send({
                status: 200,
                success: true,
                message: "Teachers Loaded Successfully",
                total: total,
                data: data
            })

        }).catch((err) => {
            res.send({
                success: false,
                status: 400,
                message: err
            })
        })
    }).catch((err) => {
        res.send({
            success: false,
            status: 400,
            message: err
        })
    })

}






module.exports = {
    register, add, update, softDelete, single, all
}