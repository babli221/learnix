const Material = require("./materialsModel");

const add = async (req, res) => {

  console.log(req.body)

  let validation = "";
  if (!req.body.teacherId) {
    validation += "teacherId is required";
  }
  if (!req.body.classId) {
    validation += " classId is required";
  }

  if (!req.body.title) {
    validation += " title is required";
  }

  if (!req.body.description) {
    validation += " description is required";
  }
  if (!req.file) {
    validation += " Material File is required";
  }
 

  if (!!validation) {
    res.send({
      status: 400,
      success: false,
      message: validation,
    });
  } 
  
  
  else {
    let total = await Material.countDocuments();
    let newMaterial = new Material();
    newMaterial.autoId = total + 1;
    newMaterial.teacherId = req.body.teacherId;
    newMaterial.classId = req.body.classId;
    newMaterial.title = req.body.title;
    newMaterial.description = req.body.description;
    
    newMaterial.file = "materials/" + req.file.filename;

    newMaterial
      .save()
      .then((savedMaterial) => {
        res.send({
          status: 200,
          success: true,
          message: "Material Added Successfully",
          data: savedMaterial,
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
    Material.findOne({ _id: req.body._id })
      .populate("teacherId")
      .populate("classId")
      .then((materialData) => {
        if (materialData) {
          res.send({
            status: 200,
            success: true,
            message: "Material Loaded Successfully",
            data: materialData,
          });
        } else {
          res.send({
            success: false,
            status: 404,
            message: "Material not found",
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
  req.body.status = "true"
  Material.find(req.body)
    .populate("teacherId")
    .populate("classId")
    .then(async (data) => {
      await Material.countDocuments(req.body)
        .then((total) => {
          res.send({
            status: 200,
            success: true,
            message: "Material Loaded Successfully",
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
    Material.findOne({ _id: req.body._id })
      .then((materialData) => {
        if (materialData) {
          if (req.body.teacherId) {
            materialData.teacherId = req.body.teacherId;
          }
          if (req.body.classId) {
            materialData.classId = req.body.classId;
          }
          if (req.body.title) {
            materialData.title = req.body.title;
          }
          if (req.body.description) {
            materialData.description = req.body.description;
          }

          if (req.file) {
            materialData.file = "materials/" + req.file.filename;
          }

          materialData
            .save()
            .then((updatedMaterial) => {
              res.send({
                status: 200,
                success: true,
                message: "Material Updated Successfully",
                data: updatedMaterial,
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
            message: "Material not found",
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
    validation += " _id is required ";
  }
  if (!req.body.status) {
    validation += " status is required ";
  }
  if (!!validation) {
    res.send({
      status: 400,
      success: false,
      message: validation,
    });
  } else {
    Material.findOne({ _id: req.body._id })
      .then((materialData) => {
        if (materialData) {
          if (req.body.status) {
            materialData.status = req.body.status;
          }
          materialData
            .save()
            .then((updatedMaterial) => {
              res.send({
                status: 200,
                success: true,
                message: "Material Status Updated",
                data: updatedMaterial,
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
            message: "Material not found",
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
