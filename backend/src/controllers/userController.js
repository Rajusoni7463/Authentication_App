import userModel from "../models/userModel.js"


//business Logic 
const sign_up = async (req,res)=>{
    console.log("this is post requst",req.body)
    
    try{
        const {username,email,password} = req.body
        const newUser = new userModel({username,email,password})
        await newUser.save();

        

    }catch(err){
        res.status(500).json({
            success:false,
            message:"interval server errror"
        })
    }
}
//create product

export default sign_up