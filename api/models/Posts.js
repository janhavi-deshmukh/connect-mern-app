const mongoose=require("mongoose");

const PostSchema=new mongoose.Schema({

    userId:{
        type:String,
        required:true
    },
    likes:{
        type:Array,
        default:[]
    },
    // timeline:{
    //     type:Array,
    //     default:[]
    // },
    caption:{
       type:String,
       max:500
    },
    img:{
        type:String,
    }
},
{timestamps:true});

module.exports=mongoose.model("Post",PostSchema);