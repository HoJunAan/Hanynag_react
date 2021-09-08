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

app.post("/review/form", async (req, res) => {
  const {
    body: { title, main },
  } = req;
  console.log(main);
  try {
    await ReviewForm.create({
      title,
      main,
    });
  } catch (error) {
    console.log(error);
  }
  return res.redirect("/review/form");
});

app.listen(PORT, handleListening);
