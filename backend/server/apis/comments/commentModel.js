const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  autoId: { type: Number, default: 0 },
  comment: { type: String, required: true },

  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "student"
  },

  announcementId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "announcement"
  },

  teacherId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "teacher"
  },

  status: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("comment", commentSchema);
