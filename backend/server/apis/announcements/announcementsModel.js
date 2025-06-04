const mongoose = require("mongoose");

const announcementsSchema = new mongoose.Schema({
  autoId: { type: Number, default: 0 },
  title: { type: String, required: true },
  classId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "class",
    required: true,
  },
  teacherId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "teacher",
    required: true,
  },

  file: { type: String, default: "File not available" },
  description: { type: String, default: "No-description" },
  status: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("announcement", announcementsSchema);
