const mongoose = require("mongoose");

const assignClassSchema = new mongoose.Schema({
    autoId: { type: Number, default: 0 },
    classId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "class",
        required: true,
    },
    studentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "student",
        required: true,
    },
    status: { type: Boolean, default: true },
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("assignClass", assignClassSchema);
