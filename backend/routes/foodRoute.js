import express from 'express';
import { addFood ,listFood} from '../controllers/foodController.js';
import multer from "multer";


const foodRouter = express.Router();

//Image Stroge Engine

const storage = multer.diskStorage({
    destination:"upload",
    filename: (req,file,cb)=>{
        return cb(null,`${Data.now()}${file.originalname}`)
    }
})

const upload = multer({storage:storage})

foodRouter.post("/add",upload.single("image"),addFood)
foodRouter.get("/list",listFood)




export default foodRouter;