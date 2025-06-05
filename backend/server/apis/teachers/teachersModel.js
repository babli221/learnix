const mongoose = require("mongoose");

const teachersSchema = new mongoose.Schema({
    autoId: { type: Number, default: 0 },
    name: { type: String, default: "" },
    email: { type: String, default: "" },
    contact: { type: Number},
    userId: { type: mongoose.Schema.Types.ObjectId, default: null, ref: 'user' },
    address: { type: String },
    profile: { type: String },
    qualification: { type: String  },
    status: { type: Boolean, default: true },
    createdAt: { type: Date, default: Date.now() },
})

module.exports = new mongoose.model("teacher", teachersSchema)
