import express from "express"
import connectDB from "./src/Db/dbconnect.js"
const app = express()
import dotenv from "dotenv"
dotenv.config();

connectDB()

app.listen(3000,()=>{
    console.log("server is listening on port 3000")
})