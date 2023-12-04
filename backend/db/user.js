import mongoose from "mongoose";
const userschema=new mongoose.Schema({
    name: String,
    email: String,
    password: String
});
const User = mongoose.model('users', userschema);
export default User;