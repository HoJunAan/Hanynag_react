import express from "express";
import morgan from "morgan";
import "./db";
import ReviewForm from "./models/ReviewForm";

const app = express();
const PORT = 4000;

const logger = morgan("dev");
app.use(logger);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const handleListening = () => {
  console.log(`Server listening on port http://localhost:${PORT} 🚀`);
};

app.get("/review", async (req, res) => {
  const data = ReviewForm.find();
  console.log(data);
  return res.send();
});

app.post("/review/form", async (req, res) => {
  const {
    body: { title, main, category, secret },
  } = req;
  try {
    await ReviewForm.create({
      title,
      main,
      category,
      secret,
    });
  } catch (error) {
    console.log("db save fail");
    return res.status(400).send();
  }
  return res.status(200).send();
});

app.listen(PORT, handleListening);
