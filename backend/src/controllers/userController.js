import userModel from "../models/userModel.js"
import bcryptjs from 'bcryptjs'


//business Logic 
const sign_up = async (req,res ,next)=>{
    console.log("this is post requst",req.body)
    
    try{
        const {username,email,password} = req.body
        const hashPassword = bcryptjs.hashSync(password,10)
        const newUser = new userModel({username,email,password:hashPassword})
        await newUser.save();

        

    }catch(err){
       next(err)
    }
}
//create product

export default sign_up