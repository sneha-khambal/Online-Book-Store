import express from 'express';
import { userAuth } from '../model/userAuthModel.js';
const userAuthRouter = express.Router();



userAuthRouter.post("/accountCreation", async (req, res) => {
  try {
    const { email, password, firstName, lastName } = req.body;

    if (email && password && firstName && lastName) {
      console.log(req.body);

      const dublicateEntry = await userAuth.findOne({
        email: email.toLowerCase(),
      });
      if (dublicateEntry) {
        console.log("entry present");
        return res.status(400).send({
          data: "user already present with same email.",
        });
      }
      const user = new userAuth();
      user.email = email.toLowerCase();
      user.password = password;
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

export default userAuthRouter;