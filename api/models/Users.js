const mongoose=require("mongoose");

const userSchema=new mongoose.Schema(
    {
    username:{
        type:String,
        required:true,
        min:4,
        max:8,
        unique:true
    },
    email:{
        type:String,
        required:true,
        max:40,
        unique:true
    },
    password:{
        type:String,
        required:true,
        min:7
    },
    profilePicture:{
        type:String,
        default:"",

    },
    coverPicture:{
        type:String,
        default:""
        
    },
    followers:{
        type:Array,
        default:[]
    },
    followings:{
        type:Array,
        default:[]
    },
    isAdmin:{
        type:Boolean,
        default:false
    },
    bio:{
        type:String,
        max:100
    },
    city:{
        type:String,
        max:40
    },
    relationship:{
        type:Number,
        enum:[1,2,3]
    }
   
   }, 
{timestamps:true});

module.exports=mongoose.model("User",userSchema);