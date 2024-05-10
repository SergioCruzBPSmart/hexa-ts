import express from "express";

import { healthController } from "./healthController";

const healthRouter = express.Router();
const HealthController = new healthController();

healthRouter.get("/", HealthController.run.bind(HealthController));

export { healthRouter };
