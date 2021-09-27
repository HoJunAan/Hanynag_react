import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  id: { type: String },
  password: { type: String },
});

const User = mongoose.model("User", userSchema);
export default User;
