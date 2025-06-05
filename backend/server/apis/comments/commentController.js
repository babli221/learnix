const Comment = require("./commentModel")

const add = async (req, res) => {
    let validation = "";
    if (!req.body.announcementId) {
        validation += "announcementId is required";
    }
    if (!req.body.comment) {
        validation += " comment is required";
    }
    if (!!validation) {
        res.send({
            status: 400,
            success: false,
            message: validation,
        });
    } else {
        let total = await Comment.countDocuments();
        let newComment = new Comment();
        newComment.autoId = total + 1;
        newComment.comment = req.body.comment;
        newComment.announcementId = req.body.announcementId;
        newComment.teacherId = req.body.teacherId;
        newComment.studentId = req.body.studentId;

        newComment.save()
            .then((savedComment) => {
                res.send({
                    status: 200,
                    success: true,
                    message: "Comment Added Successfully",
                    data: savedComment,
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
        Comment.findOne({ _id: req.body._id })
            .then((commentData) => {
                if (commentData) {
                    if (req.body.comment) {
                        commentData.comment = req.body.comment;
                    }
                    commentData
                        .save()
                        .then((updatedComment) => {
                            res.send({
                                status: 200,
                                success: true,
                                message: "Comment Updated Successfully",
                                data: updatedComment,
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
                        message: "comment not found",
                    });
                }
            })
            .catch((err) => {
                res.send({
                    success: false,
                    status: 400,
                    message: err.message,
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
        Comment.findOne({ _id: req.body._id })
            .then((CommentData) => {
                if (CommentData) {
                    if (req.body.status) {
                        CommentData.status = req.body.status;
                    }
                    CommentData
                        .save()
                        .then((updatedComment) => {
                            res.send({
                                status: 200,
                                success: true,
                                message: "Comment Status Updated",
                                data: updatedComment,
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
                        message: "Comment not found",
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
        Comment.findOne({ _id: req.body._id })
            .populate("studentId")
            .populate("announcementId").populate('teacherId')
            .then((CommentData) => {
                if (CommentData) {
                    res.send({
                        status: 200,
                        success: true,
                        message: "Comment Loaded Successfully",
                        data: CommentData,
                    });
                } else {
                    res.send({
                        success: false,
                        status: 404,
                        message: "Comment not found",
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
    Comment.find(req.body)
        .populate("studentId")
        .populate("announcementId").populate('teacherId')
        .then(async (data) => {
            await Comment.countDocuments(req.body)
                .then((total) => {
                    res.send({
                        status: 200,
                        success: true,
                        message: "Comment Loaded Successfully",
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