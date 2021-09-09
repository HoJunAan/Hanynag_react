import mongoose from "mongoose";

const reviewFormSchema = new mongoose.Schema({
  title: { type: String },
  main: { type: String },
  category: { type: String },
  secret: { type: Boolean },
});

const reviewForm = mongoose.model("reviewData", reviewFormSchema);

export default reviewForm;
