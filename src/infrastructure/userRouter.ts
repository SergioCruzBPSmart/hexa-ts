import express from "express";

import { UserController } from "./dependencies";

const userRouter = express.Router();

userRouter.post("/:id/welcome", UserController.run.bind(UserController));

export { userRouter };
