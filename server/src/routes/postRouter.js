import { Router } from "express";
import postController from "../controllers/postController.js";

const router = Router();

router.get("/posts",postController.getAllPosts);

export default router;
