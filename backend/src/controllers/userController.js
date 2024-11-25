import userModel from "../models/userModel.js"
import bcryptjs from 'bcryptjs'
import { errorHandler } from "../utils/error.js"
import jwt from "jsonwebtoken"



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
const sign_in = async (req,res ,next)=>{
    
    
    try{
        const {email,password} = req.body
        const validUser = await userModel.findOne({email})//find user by their emails
        if(!validUser){
            return next(errorHandler(404,'user not found'))//custom error
        }
        const validPassword = bcryptjs.compareSync(password,validUser.password)
        const token = jwt.sign({id:validUser._id},process.env.JWT_SECRET)//creating token 
        res.cockies('token',token,{httpOnly:true})

        if(!validPassword){
            return next(errorHandler(401,'Wrong credentials'))
        }
       
    
    }catch(err){
       next(err)
    }
}
//create product

export default sign_up