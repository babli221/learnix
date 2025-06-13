const Announcement = require("./announcementsModel")

const add = async (req, res) => {

    let validation = "";
    if (!req.body.title) {
        validation += "title is required";
    }
    if (!req.body.classId) {
        validation += "classId is required";
    }
    if (!req.body.teacherId) {
        validation += "teacherId is required";
    }
    if (!!validation) {
        res.send({
            status: 400,
            success: false,
            message: validation,
        });
    } else {
        let total = await Announcement.countDocuments();
        let newAnnouncement = new Announcement();
        newAnnouncement.autoId = total + 1;
        newAnnouncement.classId = req.body.classId;
        newAnnouncement.teacherId = req.body.teacherId;
        newAnnouncement.title = req.body.title;
        newAnnouncement.description = req.body.description;
        if (req.file) {

            newAnnouncement.file = "announcements/" + req.file.filename;
        }
        newAnnouncement
            .save()
            .then((savedAnnouncement) => {
                res.send({
                    status: 200,
                    success: true,
                    message: "Announcement Added Successfully",
                    data: savedAnnouncement,
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
    if (!!validation) {
        res.send({
            status: 400,
            success: false,
            message: validation,
        });
    } else {
        Announcement.findOne({ _id: req.body._id })
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
                    if (req.file) {
                        assigmentData.file = "announcements/" + req.file.filename;
                    }
                    assigmentData
                        .save()
                        .then((updatedClass) => {
                            res.send({
                                status: 200,
                                success: true,
                                message: "Announcement Updated Successfully",
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
        Announcement.findOne({ _id: req.body._id })
            .then((AnnouncementData) => {
                if (AnnouncementData) {
                    if (req.body.status) {
                        AnnouncementData.status = req.body.status;
                    }
                    AnnouncementData
                        .save()
                        .then((updatedAnnouncement) => {
                            res.send({
                                status: 200,
                                success: true,
                                message: "Announcement Status Updated",
                                data: updatedAnnouncement,
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
                        message: "Announcement not found",
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
        Announcement.findOne({ _id: req.body._id })
            .populate("teacherId")
            .populate("classId")
            .then((AnnouncementData) => {
                if (AnnouncementData) {
                    res.send({
                        status: 200,
                        success: true,
                        message: "Announcement Loaded Successfully",
                        data: AnnouncementData,
                    });
                } else {
                    res.send({
                        success: false,
                        status: 404,
                        message: "Announcement not found",
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

    Announcement.find(req.body)
        .populate("teacherId")
        .populate("classId")
        .then(async (data) => {
            await Announcement.countDocuments(req.body)
                .then((total) => {
                    res.send({
                        status: 200,
                        success: true,
                        message: "Announcement Loaded Successfully",
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