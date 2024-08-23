import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
const videoSchema = new mongoose.Schema({
    videoFile: {
        type: String, // cloudnary URL
        required: true
    },
    thumbnail: {
        type:String,
        required: true
    },
    title: {
        type:String,
        required: true
    },
    description: {
        type:String,
        required: true
    },
    duration: {
        type: Number, //cloudnary URL will be here it will give u time duration
        required: true
    },
    thumbnail: {
        type:String,
        required: true
    },
    views: {
        type: Number,
        default : 0
    },
    isPublished: {
        type: Boolean,
        default : true
    },
    owner: {
        type: mongoose.Schema.Type.ObjectId,
        ref: "User"
    }
}, {timestamps:true})

export const Video = mongoose.model("Video", videoSchema)