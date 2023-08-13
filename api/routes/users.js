const router=require("express").Router();
const User=require("../models/Users");
const bcrypt = require('bcrypt');


//update 
router.put("/:id",async (req,res)=>{
    
    if(req.body.userId===req.params.id||req.user.isAdmin){
       if(req.body.password){
          try{
            const salt=await bcrypt.genSalt(10);
            req.body.password=await bcrypt.hash(req.body.password,salt);
          }catch(err){
            return res.status(500).json(err);
          }
       }

       try{
        const user=await User.findByIdAndUpdate(req.params.id,{
            $set:req.body
        });
        res.status(200).json("updated");
       }catch(err){
        return res.status(500).json(err);
      }

    }else{
      return res.status(403).json("can only update your account");
    }
})

//delete
router.delete("/:id",async (req,res)=>{
    
    if(req.body.userId===req.params.id||req.body.isAdmin){
       
        try{
            const user=await User.findByIdAndDelete(req.params.id);
            res.status(200).json("deleted successfully");
           }catch(err){
            return res.status(500).json(err);
          }   

    }else{
      return res.status(403).json("can only delete your account");
    }
})

//get a user

router.get("/",async (req,res)=>{
    const userId=req.query.userId;
    const username=req.query.username;
    try{
        const user=userId
        ? await User.findById(userId)
        : await User.findOne({username:username});

        const {password,updatedAt,...others}=user._doc;
        res.status(200).json(others);
    }catch(err){
        res.status(500).json(err);
    }
})

//follow a user
router.put("/:id/follow",async (req,res)=>{
    if(req.body.userId!=req.params.id){
        
        try{

        const toFollowUser=await User.findById(req.params.id);
        const requestingUser=await User.findById(req.body.userId);

        if(!toFollowUser.followers.includes(requestingUser._id)){
            await toFollowUser.updateOne({$push:{followers:requestingUser._id}});
            await requestingUser.updateOne({$push:{followings:toFollowUser._id}});
            res.status(200).json("following!");
        }else{
            res.status(400).json("You are already following");
        }
        }catch(err){
            res.status(500).json(err);
        }
        

    }else{
        res.status(400).json("You cannot follow yourself");
    }
})

//unfollow a user
router.put("/:id/unfollow",async (req,res)=>{
    if(req.body.userId!=req.params.id){
        
        try{

        const toUnfollowUser=await User.findById(req.params.id);
        const requestingUser=await User.findById(req.body.userId);

        if(toUnfollowUser.followers.includes(requestingUser._id)){
            await toUnfollowUser.updateOne({$pull:{followers:requestingUser._id}});
            await requestingUser.updateOne({$pull:{followings:toUnfollowUser._id}});
            res.status(200).json("unfollowing!");
        }else{
            res.status(400).json("You are already following");
        }
        }catch(err){
            res.status(500).json(err);
        }
        

    }else{
        res.status(400).json("You cannot follow yourself");
    }
})


module.exports =router;