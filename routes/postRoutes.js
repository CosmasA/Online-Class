import express from "express";

const postRoutes = express.Router();

postRoutes.post("/", (req, res) => {
  const { text } = req.body;
  console.log(text);
  res.redirect("/");
});
export default postRoutes;
