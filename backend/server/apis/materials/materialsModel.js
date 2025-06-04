const mongoose = require("mongoose");

const materialsSchema = new mongoose.Schema({
  autoId: { type: Number, default: 0 },
  teacherId: { type: mongoose.Schema.Types.ObjectId, default: null, ref: 'teacher' },
  classId: { type: mongoose.Schema.Types.ObjectId, default: null, ref: 'class' },
  title: { type: String, required: true },
  description: { type: String, required: true },
  file: { type: String, default: "No-Image.png" },
  status: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Material", materialsSchema);
