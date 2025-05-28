import mongoose, { Mongoose } from "mongoose";

const urlSchema = new mongoose.Schema({
    full_url :{
        type:String,
        required:true
    },
    short_url:{
        type:String,
        required:true,
        index:true,
        unique:true
    },
    clicks:{
        type:Number,
        required:true,
        default:0
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    }
});

const shortUrl = mongoose.model("shortUrl",urlSchema);

export default shortUrl;