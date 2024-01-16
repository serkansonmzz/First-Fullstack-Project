import { Router } from "express";
import posts from "../data/post.js";

const router = Router();

router.get("/posts", (req, res) => {
  if (!posts) {
    res.status(404).send("No posts found");
  }
  res.send(posts);
});

export default router;
