const Student = require("./studentsModel")
const User = require("../user/userModel")
const bcrypt = require("bcrypt");
const saltRounds = 10;

const register = (req, res) => {
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
     if (!req.body.contact) {
        validation += "contact is required "
    }
    if (!req.body.address) {
        validation += "address is required "
    }
    if (!req.body.qualification) {
        validation += "qualification is required "
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
                        Student.countDocuments().then((totalStudents) => {
                            let newStudent = new Student()
                            newStudent.autoId = totalStudents + 1
                            newStudent.name = req.body.name
                            newStudent.email = req.body.email
                            newStudent.contact = req.body.contact
                            newStudent.address = req.body.address
                            newStudent.qualification = req.body.qualification


                            newStudent.userId = savedUser._id
                            newStudent.save().then((savedStudent) => {
                                newUser.TeacherId = savedStudent._id
                                newUser.save().then(() => {
                                    res.send({
                                        success: true,
                                        status: 201,
                                        message: "Student Registered Successfully",
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


// const update = (req, res) => {
//     validation = ''
//     if (!req.body._id) {
//         validation += "_id is required"
//     }
//     if (!!validation) {
//         res.send({
//             status: 400,
//             success: false,
//             message: validation
//         })
//     }
//     else {
//         Student.findOne({ _id: req.body._id }).then((studentData) => {
//             if (studentData) {
//                 if (req.body.name) {
//                     studentData.name = req.body.name
//                 }
//                 if (req.body.contact) {
//                     studentData.contact = req.body.contact
//                 }
//                 if (req.body.address) {
//                     studentData.address = req.body.address
//                 }
//                 if (req.body.qualification) {
//                     studentData.qualification = req.body.qualification
//                 }
//                 if (req.file) {
//                     studentData.profile = "students/" + req.file.filename
//                 }
//                 studentData.save().then((updatedUser) => {
//                     User.findOne({
//                         studentId: req.body._id
//                     }).then((userData) => {
//                         if (userData) {
//                             userData.name = req.body.name
//                         }
//                         userData.save().then(() => {
//                             res.send({
//                                 status: 200,
//                                 success: true,
//                                 message: "Record Updated",
//                                 data: updatedUser
//                             })
//                         })

//                     })



//                 }).catch((err) => {
//                     res.send({
//                         success: false,
//                         status: 400,
//                         message: err
//                     })
//                 })

//             }
//             else {
//                 res.send({
//                     success: false,
//                     status: 404,
//                     message: "Student not found"
//                 })
//             }

//         }).catch((err) => {
//             res.send({
//                 success: false,
//                 status: 400,
//                 message: err
//             })
//         })
//     }

// }

const update = (req, res) => {
    let validation = '';
    if (!req.body._id) {
        validation += "_id is required. ";
    }
    if (validation) {
        return res.send({
            status: 400,
            success: false,
            message: validation.trim()
        });
    }

    Student.findOne({ _id: req.body._id }).then((studentData) => {
        if (studentData) {
            // Update allowed fields if provided
            if (req.body.name) studentData.name = req.body.name;
            if (req.body.contact) studentData.contact = req.body.contact;
            if (req.body.address) studentData.address = req.body.address;
            if (req.body.qualification) studentData.qualification = req.body.qualification;
            if (req.body.gender) studentData.gender = req.body.gender;
            if (req.body.dob) studentData.gender = req.body.dob;
            if (req.file) studentData.profile = "students/" + req.file.filename;

            studentData.save().then((updatedStudent) => {
                // Now update the User table
                User.findOne({ studentId: req.body._id }).then((userData) => {
                    if (userData) {
                        if (req.body.name) userData.name = req.body.name;
                        // If you want to update more fields, do it here

                        userData.save().then(() => {
                            res.send({
                                status: 200,
                                success: true,
                                message: "Record Updated",
                                data: updatedStudent
                            });
                        }).catch((err) => {
                            res.send({
                                success: false,
                                status: 400,
                                message: err
                            });
                        });
                    } else {
                        // User record might not exist, still return student update
                        res.send({
                            status: 200,
                            success: true,
                            message: "Student record updated, user record not found.",
                            data: updatedStudent
                        });
                    }
                }).catch((err) => {
                    res.send({
                        success: false,
                        status: 400,
                        message: err
                    });
                });
            }).catch((err) => {
                res.send({
                    success: false,
                    status: 400,
                    message: err
                });
            });
        } else {
            res.send({
                success: false,
                status: 404,
                message: "Student not found"
            });
        }
    }).catch((err) => {
        res.send({
            success: false,
            status: 400,
            message: err
        });
    });
};


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
        Student.findOne({ _id: req.body._id }).then((studentData) => {
            if (studentData) {
                if (req.body.status) {
                    studentData.status = req.body.status
                }
                studentData.save().then((updatedStudent) => {
                    res.send({
                        status: 200,
                        success: true,
                        message: "Student Status Updated",
                        data: updatedStudent
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
                    message: "Student not found"
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
        Student.findOne({ _id: req.body._id }).then((studentData) => {
            if (studentData) {
                res.send({
                    status: 200,
                    success: true,
                    message: "Student Loaded Successfully",
                    data: studentData
                })
            }
            else {
                res.send({
                    success: false,
                    status: 404,
                    message: "Student not found"
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
    Student.find(req.body).then(async (data) => {
        await Student.countDocuments(req.body).then((total) => {
            res.send({
                status: 200,
                success: true,
                message: "Students Loaded Successfully",
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
    register, update,  softDelete, single, all
}