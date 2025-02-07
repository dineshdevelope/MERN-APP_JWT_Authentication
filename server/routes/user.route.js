import express from "express";
import {
  deleteUser,
  loginUser,
  logoutUser,
  registerUser,
  updateUser,
} from "../controllers/user.controller.js";
import verifyToken from "../utils/verifyToken.js";

const userRouter = express.Router();

userRouter.post("/register", registerUser);

userRouter.post("/login", loginUser);

userRouter.post("/logout", logoutUser);

userRouter.put("/update", verifyToken, updateUser);

userRouter.delete("/delete", verifyToken, deleteUser);

export default userRouter;
