import { Router } from "express";
import postController from "../controllers/postController.js";

const router = Router();

router.get("/posts", postController.getAllPosts);
router.get("/posts/:id", postController.getPostById);
router.post("/posts", postController.createPost);
router.put("/posts/:id", postController.updatePost);
router.delete("/posts/:id", postController.deletePost);

export default router;
