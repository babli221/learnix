const Assignment = require("./assignmentsModel");

const add = async (req, res) => {
    let validation = "";
    if (!req.body?.title) {
        validation += "title is required ";
    }
    if (!req.body?.classId) {
        validation += "classId is required ";
    }
    if (!req.body?.teacherId) {
        validation += "teacherId is required ";
    }
    if (!!validation) {
        res.send({
            status: 400,
            success: false,
            message: validation,
        });
    } else {
        let total = await Assignment.countDocuments();
        let newAssignment = new Assignment();
        newAssignment.autoId = total + 1;
        newAssignment.classId = req.body.classId;
        newAssignment.teacherId = req.body.teacherId;
        newAssignment.title = req.body.title;
        newAssignment.description = req.body.description;
        newAssignment.marks = req.body.marks;
        newAssignment.dueDate = req.body.dueDate;
        if (req.file) {
            newAssignment.file = "assignments/" + req.file.filename;
        }
        newAssignment
            .save()
            .then((savedAssignment) => {
                res.send({
                    status: 200,
                    success: true,
                    message: "Assignment Added Successfully",
                    data: savedAssignment,
                });
            })
            .catch((err) => {
                res.send({
                    success: false,
                    status: 400,
                    message: err,
                });
            });
    }
};

const update = (req, res) => {
    let validation = "";
    if (!req.body._id) {
        validation += "_id is required";
    }
    if (!!validation) {
        res.send({
            status: 400,
            success: false,
            message: validation,
        });
    } else {
        Assignment.findOne({ _id: req.body._id })
            .then((assigmentData) => {
                if (assigmentData) {
                    if (req.body.classId) {
                        assigmentData.classId = req.body.classId;
                    }
                    if (req.body.teacherId) {
                        assigmentData.teacherId = req.body.teacherId;
                    }
                    if (req.body.title) {
                        assigmentData.title = req.body.title;
                    }
                    if (req.body.description) {
                        assigmentData.description = req.body.description;
                    }
                    if (req.body.marks) {
                        assigmentData.marks = req.body.marks;
                    }
                    if (req.body.dueDate) {
                        assigmentData.dueDate = req.body.dueDate;
                    }
                    if (req.file) {
                        assigmentData.file = "assignments/" + req.file.filename;
                    }
                    assigmentData
                        .save()
                        .then((updatedClass) => {
                            res.send({
                                status: 200,
                                success: true,
                                message: "Assignment Updated Successfully",
                                data: updatedClass,
                            });
                        })
                        .catch((err) => {
                            res.send({
                                success: false,
                                status: 400,
                                message: err,
                            });
                        });
                } else {
                    res.send({
                        success: false,
                        status: 404,
                        message: "Class not found",
                    });
                }
            })
            .catch((err) => {
                res.send({
                    success: false,
                    status: 400,
                    message: err,
                });
            });
    }
};

const softDelete = (req, res) => {
    let validation = "";
    if (!req.body._id) {
        validation += " _id is required ";
    }
    if (!req.body.status) {
        validation += " status is required ";
    }
    if (!!validation) {
        res.send({
            status: 400,
            success: false,
            message: validation,
        });
    } else {
        Assignment.findOne({ _id: req.body._id })
            .then((assignmentData) => {
                if (assignmentData) {
                    if (req.body.status) {
                        assignmentData.status = req.body.status;
                    }
                    assignmentData
                        .save()
                        .then((updatedAssignment) => {
                            res.send({
                                status: 200,
                                success: true,
                                message: "Assignment Status Updated",
                                data: updatedAssignment,
                            });
                        })
                        .catch((err) => {
                            res.send({
                                success: false,
                                status: 400,
                                message: err,
                            });
                        });
                } else {
                    res.send({
                        success: false,
                        status: 404,
                        message: "Assignment not found",
                    });
                }
            })
            .catch((err) => {
                res.send({
                    success: false,
                    status: 400,
                    message: err,
                });
            });
    }
};

const single = (req, res) => {
    let validation = "";
    if (!req.body._id) {
        validation += "_id is required";
    }

    if (!!validation) {
        res.send({
            status: 400,
            success: false,
            message: validation,
        });
    } else {
        Assignment.findOne({ _id: req.body._id })
            .populate("teacherId")
            .populate("classId")
            .then((assignmentData) => {
                if (assignmentData) {
                    res.send({
                        status: 200,
                        success: true,
                        message: "Assignment Loaded Successfully",
                        data: assignmentData,
                    });
                } else {
                    res.send({
                        success: false,
                        status: 404,
                        message: "Assignment not found",
                    });
                }
            })
            .catch((err) => {
                res.send({
                    success: false,
                    status: 400,
                    message: err,
                });
            });
    }
};

const all = async (req, res) => {
      req.body.status = "true"

    Assignment.find(req.body)
        .populate("teacherId")
        .populate("classId")
        .then(async (data) => {
            await Assignment.countDocuments(req.body)
                .then((total) => {
                    res.send({
                        status: 200,
                        success: true,
                        message: "Assignment Loaded Successfully",
                        total: total,
                        data: data,
                    });
                })
                .catch((err) => {
                    res.send({
                        success: false,
                        status: 400,
                        message: err,
                    });
                });
        })
        .catch((err) => {
            res.send({
                success: false,
                status: 400,
                message: err,
            });
        });
};

module.exports = {
    add,
    update,
    softDelete,
    single,
    all,
};
