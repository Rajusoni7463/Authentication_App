import express from "express"
import connectDB from "./src/Db/dbconnect.js"
import userRoute from "./src/routes/userRoute.js"
const app = express()
import dotenv from "dotenv"

dotenv.config();
app.use(express.json())
connectDB()
app.use('/api',userRoute)

app.listen(3000,()=>{
    console.log("server is listening on port 3000")
})