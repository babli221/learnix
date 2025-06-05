const Class = require("./classModel");

const add = async (req, res) => {
  let validation = "";
  if (!req.body.name) {
    validation += "name is required";
  }
  if (!req.body.teacherId) {
    validation += " teacherId is required";
  }
  if (!req.body.description) {
    validation += " description is required";
  }
  if (!req.body.classLink) {
    validation += " classLink is required";
  }
  if (!!validation) {
    res.send({
      status: 400,
      success: false,
      message: validation,
    });
  } else {
    let total = await Class.countDocuments();
    let newClass = new Class();
    newClass.autoId = total + 1;
    newClass.name = req.body.name;
    newClass.teacherId = req.body.teacherId;
    newClass.description = req.body.description;
    newClass.classLink = req.body.classLink;

    newClass
      .save()
      .then((savedClass) => {
        res.send({
          status: 200,
          success: true,
          message: "Class Added Successfully",
          data: savedClass,
        });
      })
      .catch((err) => {
        res.send({
          success: false,
          status: 400,
          message: err,
        });
      });
  }
};

const single = (req, res) => {
  let validation = "";
  if (!req.body._id) {
    validation += "_id is required";
  }

  if (!!validation) {
    res.send({
      status: 400,
      success: false,
      message: validation,
    });
  } else {
    Class.findOne({ _id: req.body._id })
      .populate("teacherId")
      .then((classData) => {
        if (classData) {
          res.send({
            status: 200,
            success: true,
            message: "Class Loaded Successfully",
            data: classData,
          });
        } else {
          res.send({
            success: false,
            status: 404,
            message: "Class not found",
          });
        }
      })
      .catch((err) => {
        res.send({
          success: false,
          status: 400,
          message: err,
        });
      });
  }
};

const all = async (req, res) => {
  Class.find(req.body)
    .populate("teacherId")
    .then(async (data) => {
      await Class.countDocuments(req.body)
        .then((total) => {
          res.send({
            status: 200,
            success: true,
            message: "Class Loaded Successfully",
            total: total,
            data: data,
          });
        })
        .catch((err) => {
          res.send({
            success: false,
            status: 400,
            message: err,
          });
        });
    })
    .catch((err) => {
      res.send({
        success: false,
        status: 400,
        message: err,
      });
    });
};

const update = (req, res) => {
  console.log(req.body);

  validation = "";
  if (!req.body._id) {
    validation += "_id is required";
  }
  if (!!validation) {
    res.send({
      status: 400,
      success: false,
      message: validation,
    });
  } else {
    Class.findOne({ _id: req.body._id })
      .then((classData) => {
        if (classData) {
          if (req.body.name) {
            classData.name = req.body.name;
          }
          if (req.body.teacherId) {
            classData.teacherId = req.body.teacherId;
          }
          if (req.body.description) {
            classData.description = req.body.description;
          }
          if (req.body.classLink) {
            classData.classLink = req.body.classLink;
          }
          classData
            .save()
            .then((updatedClass) => {
              res.send({
                status: 200,
                success: true,
                message: "Class Updated Successfully",
                data: updatedClass,
              });
            })
            .catch((err) => {
              res.send({
                success: false,
                status: 400,
                message: err,
              });
            });
        } else {
          res.send({
            success: false,
            status: 404,
            message: "Class not found",
          });
        }
      })
      .catch((err) => {
        res.send({
          success: false,
          status: 400,
          message: err,
        });
      });
  }
};


const softDelete = (req, res) => {
  let validation = "";
  if (!req.body._id) {
    validation += "_id is required ";
  }

  if (!req.body.status) {
    validation += "status is required ";
  }
  if (!!validation) {
    res.send({
      status: 400,
      success: false,
      message: validation,
    });
  } else {
    Class.findOne({ _id: req.body._id })
      .then((classData) => {
        if (classData) {
          if (req.body.status) {
            classData.status = req.body.status;
          }
          classData
            .save()
            .then((updatedClass) => {
              res.send({
                status: 200,
                success: true,
                message: "Class Status Updated",
                data: updatedClass,
              });
            })
            .catch((err) => {
              res.send({
                success: false,
                status: 400,
                message: err,
              });
            });
        } else {
          res.send({
            success: false,
            status: 404,
            message: "Class not found",
          });
        }
      })
      .catch((err) => {
        res.send({
          success: false,
          status: 400,
          message: err,
        });
      });
  }
};

module.exports = {
  add,
  single,
  all,
  update,
  softDelete,
};
