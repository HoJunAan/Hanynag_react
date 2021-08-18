import express from "express";
import morgan from "morgan";

const app = express();
const PORT = 4000;

const logger = morgan("dev");
app.use(logger);
app.use(express.static("client/build"));

const handleListening = () => {
  console.log(`Server listening on port http://localhost:${PORT} 🚀`);
};

app.get("/", (req, res) => {
  res.send("hiiiiiiiiiiiiiiiii");
});

app.listen(PORT, handleListening);
