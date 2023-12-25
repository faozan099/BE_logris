const Joi = require("joi")
const User = require("../moduls/users")
const { responseFailed, responseSucces } = require("../utils/response")

const loginRegisterValidateSchema = Joi.object({
    email: Joi.string().email().max(255).required(),
    password: Joi.string().max(255).required()
})

async function register(req, res){
    try {
        const {error, value} = loginRegisterValidateSchema.validate(req.body)

        if(error){
            return responseFailed(400, "Failed to register", res)
        }

        const {email, password} = value
        const existingEmail = await User.findOne({email})
        if(existingEmail){
            return responseFailed(400, "Email existing", res)
        }

        const newUser = new User({
            email: email.toLowerCase(),
            password: password
        })
        await newUser.save()

        responseSucces(200, newUser, "Succes create account", res)
    } catch (error) {
        responseFailed(500, error.message, res)
    }
}

async function login(req, res){
    try {
        const {error, value} = loginRegisterValidateSchema.validate(req.body)

        if(error){
            return responseFailed(400, "Login failed", res)
        }

        const {email, password} = value
        const user = await User.findOne({email, password})

        if(!user){
            return responseFailed(400, "Email or password not found", res)
        }

        responseSucces(200, user, "Success login", res)
    } catch (error) {
        responseFailed(500, error.message, res)
    }
}
module.exports = {
    register,
    login
}