import express from "express";
import morgan from "morgan";
import "./db";
import requestForm from "./models/requestForm";

const app = express();
const PORT = 4000;

const logger = morgan("dev");
app.use(logger);
app.use(express.static("client/build"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const handleListening = () => {
  console.log(`Server listening on port http://localhost:${PORT} 🚀`);
};

app.post("/edu_request", async (req, res) => {
  const {
    name,
    email,
    institution,
    contact,
    date,
    time,
    place,
    personnel,
    type,
    eduName,
  } = req.body;
  console.log(req.body);
  try {
    await requestForm.save({
      name,
      email,
      institution,
      contact,
      date,
      time,
      place,
      personnel,
      type,
      eduName,
    });
  } catch (error) {
    console.log(error);
  }
  return;
});

app.listen(PORT, handleListening);
