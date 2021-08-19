import mongoose from "mongoose";

const requestSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String },
  institution: { type: String },
  contact: { type: String },
  date: { type: String },
  time: { type: String },
  place: { type: String },
  personnel: { type: String },
  type: { type: String },
  eduName: { type: String },
});

const RequestForm = mongoose.model("form", requestSchema);

export default RequestForm;
