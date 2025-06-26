import express from 'express';
import { userAuth } from '../model/userAuthModel.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
import { cartModel } from '../model/cartModel.js';
import mongoose from 'mongoose';

dotenv.config();



const userAuthRouter = express.Router();




userAuthRouter.get('/',(req,res)=>{
   return res.status(234).send('Node user application running');
   
});
userAuthRouter.post("/accountCreation", async (req, res) => {
  try {
    
    const { email, password, firstName, lastName } = req.body;
    const hashPassword = await bcrypt.hash(password,10)

    if (email && password && firstName && lastName) {
      console.log(req.body);

      const dublicateEntryEmail = await userAuth.findOne({email});
   
      if (dublicateEntryEmail) {
             return res.status(400).json({ error: 'Email already taken' });

      } 
      
      const user = new userAuth();
      user.email = email.toLowerCase();
      user.password = hashPassword;
      user.firstName = firstName;
      user.lastName = lastName;

      await user.save();

      return res.status(200).json({
        message: "user created successfully.",
      });
    } else {
      return res.status(400).json({
        message: "all fields are required",
      });
    }
  } catch (error) {
    console.error("Error creating user:", error);
    return res.status(500).json({
      message: "Server error occurred.",
    });
  }
});

userAuthRouter.post("/signIn",async(req,res)=>{
try {
    const {email,password} = req.body;
 
 const user = await userAuth.findOne({email:email.toLowerCase()});
 if(!user){return res.status(400).send('user not found with Email')};

 const passwordMatch = bcrypt.compare(password,user.password); 
  if(!passwordMatch){return res.status(400).send('Password Incorrect.')};

  const token = jwt.sign({id:user._id},process.env.JWT_SECRET,{ expiresIn: '10m' })
  res.status(200).send({'token created ':token})
} catch (error) {
    console.error("Error creating user:", error);
    return res.status(500).json({
      message: "Server error occurred.",
    });
}

});

userAuthRouter.get('/checkout',verifyToken,(req,res)=>{
try {
  res.status(200).send({'message':'token graunted'})
} catch (error) {
     console.error("Error creating user:", error);
    return res.status(500).json({
      message: "Server error occurred.",
    });
}
});

userAuthRouter.post('/addToCart',async(req,res)=>{
try {
  console.log(req.body)
  const {cover,title,price,count} = req.body;
  const cartData = new cartModel();
  cartData.bookCover = cover;
  cartData.title = title;
  cartData.price = price;
  cartData.count = count;
  cartData.total = count * price;
 
  await cartData.save();
  console.log(cartData)
  res.status(200).send({'message':'book added to Cart successfully.'})
} catch (error) {
     console.error("Error creating user:", error);
    return res.status(500).json({
      message: "Server error occurred.",
    });
}
});

userAuthRouter.get('/getCartData',async(req,res)=>{
try {
  console.log(req.body)
  const cart = await cartModel.find();
  res.status(200).send({'Cart':cart})
} catch (error) {
     console.error("Error creating user:", error);
    return res.status(500).json({
      message: "Server error occurred.",
    });
}
});

userAuthRouter.delete('/deleteBookFromCart/:id', async (req, res) => {
  try {
    console.log(req.body);
    const _id = req.params.id;

    // Validate MongoDB ObjectId
    // if (!mongoose.Types.ObjectId.isValid(_id)) {
    //   return res.status(400).json({ message: 'Invalid ID format.' });
    // }

    const deletedBook = await cartModel.findByIdAndDelete(_id);

    if (!deletedBook) {
      return res.status(404).json({ message: 'No Book found with given ID.' });
    }

    res.status(200).json({ message: 'Book Deleted Successfully.' });

  } catch (error) {
    console.error("Error deleting book from cart:", error);
    res.status(500).send({ message: "Server error occurred." });
  }
});


// Middleware to verify token
function verifyToken(req, res, next) {
  const token = req.headers['authorization']?.split(' ')[1]; // Bearer TOKEN
  if (!token) return res.status(403).json({ error: 'No token provided' });
 
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(401).json({ error: 'Invalid token' });
    req.userId = decoded.id;
    next();
  });
}

export default userAuthRouter;