const router=require("express").Router();
const User=require("../models/Users");
const Post=require("../models/Posts");

//create post

router.post("/",async (req,res)=>{

    const newPost=new Post(req.body);
    try{
        await newPost.save();
        res.status(200).json(newPost);

    }catch(err){
        res.status(500).json(err);
    }
        
})
//update

router.put("/:id",async (req,res)=>{

    const post=await Post.findById(req.params.id);
    try{
        if(post.userId===req.body.userId){
            await post.updateOne({$set:req.body});
            res.status(200).json("updated successfully");
          }else{
              res.status(400).json("can update only your post");
          }
    }catch(err){
       res.status(500).json(err);
    }
    
})
//delete

router.delete("/:id",async (req,res)=>{
   
    const post=await Post.findById(req.params.id);
    try{
        if(post.userId===req.body.userId){
            await post.deleteOne();
            res.status(200).json("deleted successfully");
          }else{
              res.status(400).json("can delete only your post");
          }
    }catch(err){
       res.status(500).json(err);
    }
    
    
})
//get post
router.get("/:id",async (req,res)=>{
    try{
        const post=await Post.findById(req.params.id);
        res.status(200).json(post);

    }catch(err){
        res.status(500).json(err);
    }
})

//like dislike post
router.put("/:id/likes",async (req,res)=>{
    try{
        const post=await Post.findById(req.params.id);
        if(!post.likes.includes(req.body.userId)){
            await post.updateOne({$push:{likes:req.body.userId}});
            res.status(200).json("Post liked!");
        }else{
            await post.updateOne({$pull:{likes:req.body.userId}});
            res.status(200).json("Post disliked!");
        }

    }catch(err){
        res.status(500).json(err);
    }
})

//get timeline
router.get("/timeline/:userId",async (req,res)=>{
    try{
      const currentUser=await User.findById(req.params.userId);
      const userPost=await Post.find({userId:currentUser._id});
      console.log(userPost);
      const followerPosts=await Promise.all(
        currentUser.followings.map((friendId)=>{
           return Post.find({userId:friendId});
          
        })
      );
      res.status(200).json(userPost.concat(...followerPosts));

    }catch(err){
        res.status(500).json(err);
    }
})

//get all post of user for profile page
router.get("/profile/:username",async (req,res)=>{
    try{
      const currentUser=await User.findOne({username:req.params.username});
      const userPost=await Post.find({userId:currentUser._id});
      
      res.status(200).json(userPost);

    }catch(err){
        res.status(500).json(err);
    }
})

module.exports=router;