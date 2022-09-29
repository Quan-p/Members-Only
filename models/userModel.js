const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: { type: String, required: true, maxlength: 25 },
    password: { type: String, required: true, minLength: 1, maxLength: 50 },
    member: { type: Boolean, default: false },
    admin: { type: Boolean, default: false },
    avatar: { type: String , required: true, enum: ["Test0", "Test1", "Test2", "Test3"], default: "Test0" }
})

module.exports = mongoose.model("User", UserSchema);