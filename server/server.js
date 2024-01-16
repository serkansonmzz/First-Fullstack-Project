import express from "express";
import cors from "cors";
import routes from "./routes/index.js";

const PORT = 8080;

const app = express();

app.use(cors());

app.use(routes);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
