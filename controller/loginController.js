const userModel = require("../models/userModel")
module.exports.openLoginPage = (req, res) => {
    return res.render("./login/login.ejs")
}

module.exports.openRegistrationPage = (req, res) => {
    return res.render("./login/registration.ejs")
}

module.exports.registration = async(req, res) => {
    const {username, email, password, confirmPassword} = req.body

    try {
        const userExists = await userModel.findOne({email: email})
        if(userExists) {
            console.log("user already exists");
            return res.redirect("/register")
        }

        if(password !== confirmPassword) {
            console.log("passwords do not match");
            return res.redirect("/register")
        }

        await userModel.create({
            username: username,
            email: email,
            password: password
        })
    console.log("user created")
    return res.redirect("/login")
    } catch (error) {
        console.log(error.message)
    }
}

module.exports.login = async(req, res) => {
    
}
