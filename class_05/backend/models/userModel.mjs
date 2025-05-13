import mongoose from "mongoose";

const schema = mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const userModel = mongoose.model('Users', schema);

export default userModel