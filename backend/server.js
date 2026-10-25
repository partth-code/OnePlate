import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"


//app config
const app = express()
const port = 4000

//middleware
app.use(express.json())
app.use(cors())

//db connection
connectDB();

app.get("/",(req,res)=>{
    res.set("API Working")
})


app.listen(port,()=>{
    console.log(`Server Started on http://localhost:${port}`)
})


//mongodb+srv://thehidddenworld_db_user:sSbN1VjrTyVG4aaa@oneplate.efbz6ne.mongodb.net/