import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://thehidddenworld_db_user:sSbN1VjrTyVG4aaa@oneplate.efbz6ne.mongodb.net/one-plate').then(()=>console.log("DB Conneced"));
}