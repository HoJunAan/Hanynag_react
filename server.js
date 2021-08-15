import express from "express";
import morgan from "morgan";

const app = express();
const PORT = 4000;

const logger = morgan("dev");
app.use(logger);
app.use(express.static("client/build"));

app.get("/", (req, res) => console.log(res));

const handleListening = () => {
  console.log(`Server listening on port http://localhost:${PORT} 🚀`);
};

app.listen(PORT, handleListening);
