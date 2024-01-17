import express from "express";
import cors from "cors";
import routes from "./routes/index.js";

const app = express();
app.use(cors());

app.use(routes);

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
