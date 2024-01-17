import { Router } from "express";
import userController from "./../controllers/userController.js";
const router = Router();

router.get("/users", userController.getAllUsers);

router.get("/user/:id", userController.getUser);

export default router;
