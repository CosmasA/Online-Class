import bodyParser from "body-parser";
import express from "express";
import getRoutes from "./routes/getRoutes.js";

const port = 3000;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// get routes
app.use(getRoutes);
app.listen(port, () => {
  console.log(`listening for request on http://localhost:${port}`);
});
