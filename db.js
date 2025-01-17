import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export function databaseConnection(){
    
    try{
        mongoose.connect(process.env.MONGO_URL);
        console.log("Mongodb is connected")
    }
    catch(error){
        console.log("Mongodb connection error",error) 
    }
}