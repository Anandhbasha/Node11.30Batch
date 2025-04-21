import mongoose  from "mongoose";

const prodSchema = new mongoose.Schema({
    userName:String,
    userMobile:Number,
    ccc:Number,
    userAddress:String
})

const newUser = mongoose.model("newUsers",prodSchema,"NewTable")

export default newUser