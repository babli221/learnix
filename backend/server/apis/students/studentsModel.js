const mongoose = require("mongoose");

const studentsSchema = new mongoose.Schema({
    autoId: { type: Number, default: 0 },
    name: { type: String, default: "" },
    email: { type: String, default: "" },
    userId: { type: mongoose.Schema.Types.ObjectId, default: null, ref: 'user' },
    contact: { type: Number },
    address: { type: String },
    profile: { type: String },
    class: {type: mongoose.Schema.Types.ObjectId, default: null, ref: 'class'},
    qualification: { type: String },
    status: { type: Boolean, default: true },
    createdAt: { type: Date, default: Date.now() },
});

module.exports = new mongoose.model("student", studentsSchema);
