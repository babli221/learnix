const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json()); 

const port = 6000;
const db = require("./server/config/db");
const seed = require("./server/config/seed");


app.use(express.urlencoded({ extended: true }));



app.use(express.static("./server/public/"));



app.get("/", (req, res) => {
  res.send("welcome to my server");
});




const adminRoutes = require("./server/routes/adminRoutes");

app.use("/admin", adminRoutes);

const studentsRoutes = require("./server/routes/studentsRoutes");

app.use("/student", studentsRoutes);

const teachersRoutes = require("./server/routes/teachersRoutes");

app.use("/teacher", teachersRoutes);




app.listen(port, (err) => {
  if (err) {
    console.log("error in server", err);
  } else {
    console.log("Server is running at port", port);
  }
});
