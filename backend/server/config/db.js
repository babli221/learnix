const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/insightRoom").then(() => {
    console.log("db connected")
}).catch((err) => {
    console.log("error in db ", err);
})
