const mongoose = require("mongoose");

const classSchema = new mongoose.Schema({
    autoId: { type: Number, default: 0 },
    name: { type: String, default: "" },
    teacherId: { type: mongoose.Schema.Types.ObjectId, default: null, ref: 'teacher' },
    description: { type: String, default: "No description" },
    classLink: { type: String, default: ""},
    status: { type: Boolean, default: true },
    createdAt: { type: Date, default: Date.now() },
})

module.exports = new mongoose.model("class", classSchema)





