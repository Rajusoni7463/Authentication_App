import userModel from "../models/userModel.js"
import bcryptjs from 'bcryptjs'


//business Logic 
const sign_up = async (req,res ,next)=>{
    
    
    try{
        const {username,email,password} = req.body
        const hashPassword = bcryptjs.hashSync(password,10)
        const newUser = new userModel({username,email,password:hashPassword})
        await newUser.save();
        if(!newUser){
            res.json({
                success:false,
                message:"something went wrong"
            })
        }
        res.json({
            success:true,
            message:"user created successfuly"
        })

        

    }catch(err){
       next(err)
    }
}
//create product

export default sign_up