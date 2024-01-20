import app from "./index.js";
import "./database/database.js";

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
