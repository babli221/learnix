const mongoose = require("mongoose");

const assignmentsSchema = new mongoose.Schema({
  autoId: { type: Number, default: 0 },
  classId: { type: mongoose.Schema.Types.ObjectId, ref: "class", required: true },
  teacherId: { type: mongoose.Schema.Types.ObjectId, ref: "teacher", required: true },
  title: { type: String, required: true, trim: true },
  description: { type: String, trim: true },
  file: { type: String, default: "noimage.png" },
  marks: { type: Number, min: 0 },
  dueDate: { type: Date, required: true },
  status: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("assignment", assignmentsSchema);
