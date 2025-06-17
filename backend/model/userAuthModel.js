import mongoose from "mongoose";

const userAuthSchema = mongoose.Schema(
    {
        email:{
            type:String,
            required:true,
            unique:true
        },
         password:{
            type:String,
            required:true
        },
         firstName:{
            type:String,
            required:true
        },
          lastName:{
            type:String,
            required:true
        }
    }
);

export const userAuth = mongoose.model('userAuth',userAuthSchema);
