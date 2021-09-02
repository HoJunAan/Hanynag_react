import express from "express";
import morgan from "morgan";
import "./db";
import bcrypt from "bcrypt";
import User from "./models/User";

const app = express();
const PORT = 4000;

const logger = morgan("dev");
app.use(logger);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const handleListening = () => {
  console.log(`Server listening on port http://localhost:${PORT} 🚀`);
};

app.post("/login", async (req, res) => {
  console.log(req.body);
  return res.redirect("/login");
});
app.post("/join", async (req, res) => {
  console.log(req.body);
  const {
    body: { name, password1, password2, username, email, phome },
  } = req;
  console.log(body);
  return res.redirect("/join");
});

app.listen(PORT, handleListening);
