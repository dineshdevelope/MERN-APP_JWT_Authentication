import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import generateToken from "../utils/generateToken.js";
export const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      return res.status(400).json({ message: "All Fields Required" });
    }
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User Already Exits" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });
    await newUser.save();
    res.status(201).json({ message: "New User Registered" });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: error.message });
  }
};
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(400)
        .json({ message: "User Email not found Register First" });
    }
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(400).json({ message: "Password Not Match" });
    }
    const token = generateToken(res, user._id);
    res.status(200).json({
      token,
      _id: user._id,
      username: user.username,
      email: user.email,
      image: user.image,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: error.message });
  }
};
export const logoutUser = (req, res) => {
  res.clearCookie("jwt");
  res.status(200).json({ message: "User Logout Sucessfull" });
};
export const updateUser = async (req, res) => {
  try {
    //console.log(req.user);
    const user = await User.findById(req.user._id);
    if (user) {
      user.username = req.body.username || user.username;
      user.email = req.body.email || user.email;
      user.image = req.body.image || user.image;
    }
    if (req.body.password) {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      user.password = hashedPassword;
    }

    const updatedUser = await user.save();
    if (updateUser) {
      res.status(200).json({
        _id: updatedUser._id,
        username: updatedUser.username,
        email: updatedUser.email,
        image: updatedUser.image,
      });
    } else {
      res.status(400).json({ message: "Unable to Update" });
    }
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: error.message });
  }
};
export const deleteUser = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    if (user) {
      res.clearCookie("jwt");
      await User.deleteOne({ _id: user._id });
      return res.status(200).json({ message: "User Deleted" });
    } else {
      return res.status(400).json({ message: "Unable to Delete User" });
    }
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: error.message });
  }
};
