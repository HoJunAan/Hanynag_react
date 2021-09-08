import mongoose from "mongoose";

const reviewFormSchema = new mongoose.Schema({
  title: { type: String, required: true },
  main: { type: String, required: true },
});

const reviewForm = mongoose.model("form", reviewFormSchema);

export default reviewForm;
