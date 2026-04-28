import dotenv from "dotenv";
import express from "express"
import mongoose from "mongoose";
import authRoute from "./routes/auth.js"
import usersRoute from "./routes/users.js"
import hotelsRoute from "./routes/hotels.js"
import roomsRoute from "./routes/rooms.js"
import cookieParser from "cookie-parser";
import cors from "cors"

const app = express();
dotenv.config()

const connect = async ()=>{
    try {
        await mongoose.connect( process.env.MONGO);
        console.log('connected to mongoDB.')
    } catch (error) {
        throw error
    }  
}

mongoose.connection.on("disconnected", ()=>{
    console.log('mongoDB disconnected!')
})

mongoose.connection.on("connected", ()=>{
    console.log('mongoDB connected!')
})

mongoose.connection.on("error", (err) => {
    console.log("MongoDB error:", err);
  });

//middlewares
app.use(cors({
    origin: "https://booking-app-gamma-pied.vercel.app",
    credentials: true  // สำคัญมากสำหรับ cookie ค่ะ
}))
app.use(cookieParser())
app.use(express.json())
app.use('/api/auth',authRoute)
app.use('/api/users',usersRoute)
app.use('/api/hotels',hotelsRoute)
app.use('/api/rooms',roomsRoute)

app.use((err ,req ,res ,next) => {
   const errorStatus = err.status || 500
   const errorMessage = err.message || "Someting went wrong!"
   return res.status( errorStatus ).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack
   })
})


app.listen(8800,()=>{
    connect()
    console.log('connected to backend.')
})
