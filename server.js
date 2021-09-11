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
  const data = await ReviewForm.find();
  return res.json(data);
});
app.get(`/review/:id`, async (req, res) => {
  const {
    params: { id },
  } = req;
  const reviewDetail = await ReviewForm.findById(id);
  if (!reviewDetail) {
    return res.send(false);
  } else {
    return res.json(reviewDetail);
  }
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
