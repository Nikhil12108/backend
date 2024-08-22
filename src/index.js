import dotenv from "dotenv"
import connectDB from "./db/index.js"

dotenv.config({
    path: './env'
})
connectDB();



/*
this is the first approach to connect with DATABASE
import express from "express"
// always use try catch or promises and async await when communication with database
import express from "express"
const app = express();
( async() => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error) => {
            console.log("error", error);
        })
        app.listen(process.env.PORT, () => {
            console.log(`app is listening on port: ${process.env.PORT}`);
        })
    } catch(error) {
        console.error("Error: ", error);
        throw error
    }
})()
*/