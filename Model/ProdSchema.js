import mongoose, { Schema } from "mongoose";

const prodSchema = new mongoose.Schema({
    userName:String,
    userMobile:Number,
    userAge:Number,
    userAddress:String
})

const newUser = mongoose.model("newUsers",prodSchema,"NewTable")

export default newUser