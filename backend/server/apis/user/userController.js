
const User = require("./userModel")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const secret = "abcd@123"
const saltRounds = 10;


const login = async (req, res) => {
    let validationError = ""
    if (!req.body.email) {
        validationError += "email is required "
    }
    if (!req.body.password) {
        validationError += " password is required "
    }
    if (!!validationError) {
        res.send({
            success: false,
            status: 422,
            message: "Validation Error" + validationError
        })
    }
    else {
        await User.findOne({ email: req.body.email }).then((userData) => {
            if (!userData) {
                res.send({
                    success: false,
                    status: 404,
                    message: "User Does not exist"
                })
            }
            else {
                if (userData.status == true) {
                    var isMatch = bcrypt.compareSync(req.body.password, userData.password)
                    if (isMatch) {

                        let payload = {
                            _id: userData._id,
                            name: userData.name,
                            userType: userData.userType,
                            email: userData.email,
                        }
                        let token = jwt.sign(payload, secret)
                        res.send({
                            success: true,
                            status: 200,
                            message: "Login Successfully",
                            data: userData,
                            token: token

                        })
                    }
                    else {
                        res.send({
                            success: false,
                            status: 400,
                            message: "Invalid Password"
                        })
                    }
                }
                else {
                    res.send({
                        success: false,
                        status: 400,
                        message: "Your Account is blocked Please contact admin"

                    })
                }
            }
        }).catch((err) => {
            res.send({
                success: false,
                status: 400,
                message: err.message
            })
        })
    }

}




const changePassword = async (req, res) => {
    let validationError = ""
    if (!req.body._id) {
        validationError += "_id  is required "
    }
    if (!req.body.currentPassword) {
        validationError += "Current password  is required "
    }
    if (!req.body.newPassword) {
        validationError += " New password is required "
    }
    if (!!validationError) {
        res.send({
            success: false,
            status: 422,
            message: "Validation Error" + validationError
        })
    }
    else {
        await User.findOne({ _id: req.body._id }).then((userData) => {
            if (!userData) {
                res.send({
                    success: false,
                    status: 404,
                    message: "User Does not exist"
                })
            }
            else {
                var isMatch = bcrypt.compareSync(req.body.currentPassword, userData.password)
                if (isMatch) {
                    userData.password = bcrypt.hashSync(req.body.newPassword, saltRounds)
                    userData.save().then((savedData) => {
                        res.send({
                            success: true,
                            status: 200,
                            message: "Password Changed Successfully",
                            data: savedData
                        })

                    }).catch((err) => {
                        res.send({
                            success: false,
                            status: 400,
                            message: err.message
                        })
                    })

                }
                else {
                    res.send({
                        success: false,
                        status: 400,
                        message: "Your Current Password is incorrect"
                    })

                }
            }
        }).catch((err) => {
            res.send({
                success: false,
                status: 400,
                message: err.message
            })
        })
    }

}





module.exports = {
    login, changePassword
}