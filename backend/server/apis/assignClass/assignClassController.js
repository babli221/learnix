const Assign = require("./assignClassModel")

const add = async (req, res) => {

    let validation = "";
   
    if (!req.body.classId) {
        validation += " classId is required";
    }
    if (!req.body.studentId) {
        validation += " studentId is required";
    }
    if (!!validation) {
        res.send({
            status: 400,
            success: false,
            message: validation,
        });
    } else {
        let total = await Assign.countDocuments();
        let newAssign = new Assign();
        newAssign.autoId = total + 1;
        newAssign.classId = req.body.classId;
        newAssign.studentId = req.body.studentId;
        if (req.file) {

            newAssign.file = "assign/" + req.file.filename;
        }
        newAssign
            .save()
            .then((savedAssign) => {
                res.send({
                    status: 200,
                    success: true,
                    message: "Assign Added Successfully",
                    data: savedAssign,
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
    validation = "";
    if (!req.body._id) {
        validation += "_id is required";
    }

    if (!req.body.classId) {
        validation += " classId is required";
    }

    if (!req.body.studentId) {
        validation += " studentId is required";
    }

    if (!!validation) {
        res.send({
            status: 400,
            success: false,
            message: validation,
        });
    } else {
        Assign.findOne({ _id: req.body._id })
            .then((assignData) => {
                if (assignData) {
                    if (req.body.classId) {
                        assignData.classId = req.body.classId;
                    }
                    if (req.body.teacherId) {
                        assignData.teacherId = req.body.teacherId;
                    }
                    if (req.body.studentId) {
                        assignData.studentId = req.body.studentId;
                    }
                    
                    if (req.file) {
                        assignData.file = "assign/" + req.file.filename;
                    }
                    assignData
                        .save()
                        .then((updatedClass) => {
                            res.send({
                                status: 200,
                                success: true,
                                message: "Assign Updated Successfully",
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
        Assign.findOne({ _id: req.body._id })
            .then((AssignData) => {
                if (AssignData) {
                    if (req.body.status) {
                        AssignData.status = req.body.status;
                    }
                    AssignData
                        .save()
                        .then((updatedAssign) => {
                            res.send({
                                status: 200,
                                success: true,
                                message: "Assign Status Updated",
                                data: updatedAssign,
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
                        message: "Assign not found",
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
        Assign.findOne({ _id: req.body._id })
            .populate("teacherId")
            .populate("classId")
            .populate("studentId")
            .then((AnnouncementData) => {
                if (AnnouncementData) {
                    res.send({
                        status: 200,
                        success: true,
                        message: "Assign Loaded Successfully",
                        data: AnnouncementData,
                    });
                } else {
                    res.send({
                        success: false,
                        status: 404,
                        message: "Assign not found",
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
    Announcement.find(req.body)
        .populate("teacherId")
        .populate("classId")
        .populate("studentId")
        .then(async (data) => {
            await Assign.countDocuments(req.body)
                .then((total) => {
                    res.send({
                        status: 200,
                        success: true,
                        message: "Assign Loaded Successfully",
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
    add, update, softDelete, single, all
}