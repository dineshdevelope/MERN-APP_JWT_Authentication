import { Schema, model } from "mongoose";

const schema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      default:
        "https://cdn2.iconfinder.com/data/icons/user-interface-and-experiences/42/user-profile-avator-line-512.png",
    },
  },
  {
    timestamps: true,
  }
);

const UserModel = model("User", schema);

export default UserModel;
