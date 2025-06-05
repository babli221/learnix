const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    autoId: { type: Number, default: 0 },
    name: { type: String, default: "" },
    email: { type: String, default: "" },
    teacherId: { type: mongoose.Schema.Types.ObjectId, ref: 'teachers' },
    userType: { type: Number, default: 3 }, //admin-1 & teachers-2 & students-3 
    studentsId: { type: mongoose.Schema.Types.ObjectId, ref: 'students' },
    password: { type: String, default: "" },
    status: { type: Boolean, default: true },
    createdAt: { type: Date, default: Date.now() },
})

module.exports = new mongoose.model("user", userSchema)
