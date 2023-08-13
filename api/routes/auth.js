const router=require("express").Router();
const User=require("../models/Users");
const bcrypt = require('bcrypt');


//register
router.post("/register",async (req,res)=>{
   

    try{
        const salt=await bcrypt.genSalt(10);
        const hashedPassword=await bcrypt.hash(req.body.password,salt);

        const newuser=await new User({
            username:req.body.username,
            email:req.body.email,
            password:hashedPassword
    
        });

        const user=await newuser.save();
        res.status(200).send(user);
    }catch(err){
        console.log(err);
    }
   
    
});

router.post("/login",async (req,res)=>{
    
    try{
        const user=await User.findOne({email:req.body.email});
        // !user && res.status(404).json("user not found");

        // const validPassword=await bcrypt.compare(req.body.password,user.password);
        // !validPassword && res.status(400).json("wrong password");

        if (!user) {
            return res.status(404).json("User not found");
        }

        const validPassword = await bcrypt.compare(req.body.password, user.password);
        
        if (!validPassword) {
            return res.status(400).json("Wrong password");
        }

        res.status(200).json(user)
    }catch(err){
        res.status(500).json(err);
       
    }
    
    
})
module.exports =router;