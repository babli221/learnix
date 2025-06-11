const Teacher = require("./teachersModel");
const User = require("../user/userModel");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const register = (req, res) => {
    console.log(req.body);

    let validation = "";
    if (!req.body.name) validation += "name is required ";
    if (!req.body.email) validation += "email is required ";
    if (!req.body.password) validation += "password is required ";

    if (!!validation) {
        res.send({
            status: 400,
            success: false,
            message: validation
        });
    } else {
        User.findOne({ email: req.body.email }).then(async (userData) => {
            if (userData) {
                res.send({
                    success: false,
                    status: 400,
                    
                    message: "Email Already Exists"
                });
            } else {
                User.countDocuments().then((totalUsers) => {
                    let newUser = new User();
                    newUser.autoId = totalUsers + 1;
                    newUser.name = req.body.name;
                    newUser.email = req.body.email;
                    newUser.password = bcrypt.hashSync(req.body.password, saltRounds);
                    newUser.userType = 2;
                    newUser.save().then((savedUser) => {
                        Teacher.countDocuments().then((totalTeachers) => {
                            let newTeacher = new Teacher();
                            newTeacher.autoId = totalTeachers + 1;
                            newTeacher.name = req.body.name;
                            newTeacher.email = req.body.email;
                            newTeacher.userId = savedUser._id;
                            newTeacher.save().then((savedTeacher) => {
                                newUser.teacherId = savedTeacher._id;
                                newUser.save().then(() => {
                                    res.send({
                                        success: true,
                                        status: 201,
                                        message: "Teacher Registered Successfully",
                                        data: savedUser
                                    });
                                }).catch((err) => {
                                    res.send({ success: false, status: 400, message: err });
                                });
                            }).catch((err) => {
                                res.send({ success: false, status: 400, message: err });
                            });
                        }).catch((err) => {
                            res.send({ success: false, status: 400, message: err });
                        });
                    }).catch((err) => {
                        res.send({ success: false, status: 400, message: err });
                    });
                }).catch((err) => {
                    res.send({ success: false, status: 400, message: err });
                });
            }
        }).catch((err) => {
            res.send({ success: false, status: 400, message: err });
        });
    }
};

const add = (req, res) => {
    let validation = "";
    if (!req.body.name) validation += "Name is required. ";
    if (!req.body.email) validation += "Email is required. ";
    if (!req.body.contact) validation += "Contact is required. ";
    if (!req.body.address) validation += "Address is required. ";
    if (!req.body.qualification) validation += "Qualification is required. ";
    if (!req.body.password) validation += "Password is required. ";
    if (!req.file) validation += "Profile Image is required. ";

    if (validation) {
        return res.send({
            status: 400,
            success: false,
            message: validation.trim()
        });
    }

    Teacher.findOne({ email: req.body.email }).then((teacherData) => {
        if (teacherData) {
            return res.send({
                success: false,
                status: 400,
                message: "Teacher with this email already exists."
            });
        } else {
            User.findOne({ email: req.body.email }).then((userData) => {
                if (userData) {
                    return res.send({
                        success: false,
                        status: 400,
                        message: "User with this email already exists."
                    });
                } else {
                    bcrypt.hash(req.body.password, saltRounds).then((hashedPassword) => {
                        Teacher.countDocuments().then((total) => {
                            let newTeacher = new Teacher();
                            newTeacher.autoId = total + 1;
                            newTeacher.name = req.body.name;
                            newTeacher.email = req.body.email;
                            newTeacher.contact = req.body.contact;
                            newTeacher.address = req.body.address;
                            newTeacher.qualification = req.body.qualification;
                            newTeacher.profile = "teacherImages/" + req.file.filename; // ✅ fixed

                            newTeacher.save().then((savedTeacher) => {
                                let newUser = new User();
                                newUser.name = req.body.name;
                                newUser.email = req.body.email;
                                newUser.password = hashedPassword;
                                newUser.userType = 2;
                                newUser.teacherId = savedTeacher._id;
                                newUser.status = true;

                                newUser.save().then((savedUser) => {
                                    savedTeacher.userId = savedUser._id;
                                    savedTeacher.save().then((finalTeacher) => {
                                        res.send({
                                            status: 200,
                                            success: true,
                                            message: "Teacher created successfully.",
                                            data: {
                                                teacher: finalTeacher,
                                                user: savedUser
                                            }
                                        });
                                    }).catch((err) => {
                                        res.send({ success: false, status: 400, message: err.message || err });
                                    });
                                }).catch((err) => {
                                    res.send({ success: false, status: 400, message: err.message || err });
                                });
                            }).catch((err) => {
                                res.send({ success: false, status: 400, message: err.message || err });
                            });
                        }).catch((err) => {
                            res.send({ success: false, status: 400, message: err.message || err });
                        });
                    }).catch((err) => {
                        res.send({ success: false, status: 400, message: err.message || err });
                    });
                }
            }).catch((err) => {
                res.send({ success: false, status: 400, message: err.message || err });
            });
        }
    }).catch((err) => {
        res.send({ success: false, status: 400, message: err.message || err });
    });
};

const update = (req, res) => {
    let validation = "";
    if (!req.body._id) validation += "_id is required";
    if (!!validation) {
        res.send({
            status: 400,
            success: false,
            message: validation
        });
    } else {
        Teacher.findOne({ _id: req.body._id }).then((teacherData) => {
            if (teacherData) {
                if (req.body.name) teacherData.name = req.body.name;
                if (req.body.contact) teacherData.contact = req.body.contact;
                if (req.body.address) teacherData.address = req.body.address;
                if (req.body.qualification) teacherData.qualification = req.body.qualification;
                if (req.file) teacherData.profile = "teachers/" + req.file.filename;

                teacherData.save().then((updatedUser) => {
                    User.findOne({ teacherId: req.body._id }).then((userData) => {
                        if (userData) {
                            userData.name = req.body.name;
                            userData.save().then(() => {
                                res.send({
                                    status: 200,
                                    success: true,
                                    message: "Record Updated",
                                    data: updatedUser
                                });
                            });
                        }
                    });
                }).catch((err) => {
                    res.send({ success: false, status: 400, message: err });
                });
            } else {
                res.send({
                    success: false,
                    status: 404,
                    message: "Teacher not found"
                });
            }
        }).catch((err) => {
            res.send({ success: false, status: 400, message: err });
        });
    }
};

const softDelete = (req, res) => {
    let validation = "";
    if (!req.body._id) validation += "_id is required";
    if (req.body.status === "undefined") validation += "status is required";
    if (!!validation) {
        res.send({
            status: 400,
            success: false,
            message: validation
        });
    } else {
        Teacher.findOne({ _id: req.body._id }).then((teacherData) => {
            if (teacherData) {
                if (req.body.status) teacherData.status = req.body.status;
                teacherData.save().then((updatedTeacher) => {
                    res.send({
                        status: 200,
                        success: true,
                        message: "Teacher Status Updated",
                        data: updatedTeacher
                    });
                }).catch((err) => {
                    res.send({ success: false, status: 400, message: err });
                });
            } else {
                res.send({
                    success: false,
                    status: 404,
                    message: "Teacher not found"
                });
            }
        }).catch((err) => {
            res.send({ success: false, status: 400, message: err });
        });
    }
};

const single = (req, res) => {
    let validation = "";
    if (!req.body._id) validation += "_id is required";
    if (!!validation) {
        res.send({
            status: 400,
            success: false,
            message: validation
        });
    } else {
        Teacher.findOne({ _id: req.body._id }).then((teacherData) => {
            if (teacherData) {
                res.send({
                    status: 200,
                    success: true,
                    message: "Teacher Loaded Successfully",
                    data: teacherData
                });
            } else {
                res.send({
                    success: false,
                    status: 404,
                    message: "Teacher not found"
                });
            }
        }).catch((err) => {
            res.send({ success: false, status: 400, message: err });
        });
    }
};

const all = async (req, res) => {
    Teacher.find(req.body).then(async (data) => {
        await Teacher.countDocuments(req.body).then((total) => {
            res.send({
                status: 200,
                success: true,
                message: "Teachers Loaded Successfully",
                total: total,
                data: data
            });
        }).catch((err) => {
            res.send({ success: false, status: 400, message: err });
        });
    }).catch((err) => {
        res.send({ success: false, status: 400, message: err });
    });
};

module.exports = {
    register,
    add,
    update,
    softDelete,
    single,
    all
};
