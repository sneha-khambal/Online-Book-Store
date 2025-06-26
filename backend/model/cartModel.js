import mongoose, { Model } from "mongoose";


const cartSchema = new mongoose.Schema(
    {
        bookCover:{
            type:String,
            required:false
        },
        title:{
            type:String,
            required:true
        },
        price:{
             type:Number,
            required:true
        },
        count:{
             type:Number,
            required:true
        },
        total:{
             type:Number,
            required:true
        }

    }
)

export const cartModel= mongoose.model('cartModel',cartSchema)