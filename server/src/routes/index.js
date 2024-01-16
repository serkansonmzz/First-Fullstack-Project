import { Router } from "express";
import userRouter from "./usersRouter.js";
import postRouter from "./postRouter.js";
const router = Router();

router.use(userRouter);
router.use(postRouter);

export default router;
