import mongoose from "mongoose";
export const connectDB=async ()=>{
    try{
    await mongoose.connect('mongodb+srv://VaishnaviDB:VaishnaviDB@cluster0.vjrpgnj.mongodb.net/Flavor_Route').then(
   ()=> console.log('DB Connected'))
}catch(error){
    console.log(`error:${error}`)
}}