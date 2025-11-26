import express from "express";
import { addFood,listFood,removeFood } from "../controllers/foodController.js";
import multer from "multer"//to store images
const foodRouter=express.Router();
//image storage function
const Storage=multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{
        return cb(null,`${Date.now()}${file.originalname}`)//create unique name for each upload
    }
})
const upload=multer({storage:Storage})
foodRouter.post("/add",upload.single("image"),addFood)
foodRouter.get('/list',listFood)
foodRouter.post("/remove",removeFood)
export default foodRouter;