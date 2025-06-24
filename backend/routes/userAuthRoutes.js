import express from 'express';
import { userAuth } from '../model/userAuthModel.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';

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

userAuthRouter.get('/addToCart',verifyToken,(req,res)=>{
try {
  console.log(req.body)
  res.status(200).send({'message':'added to cart'})
} catch (error) {
     console.error("Error creating user:", error);
    return res.status(500).json({
      message: "Server error occurred.",
    });
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