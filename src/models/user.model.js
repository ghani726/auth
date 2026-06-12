const mongoose = require("mongoose")    



const userSchema = new mongoose.Schema({
    username: String,
    email: {
        type: String,
        unique: true,
    },
    password: String,
    posts: Array,
})

const UserModel = mongoose.model("User", userSchema)

module.exports = UserModel