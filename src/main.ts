import "./load-env-vars";

import bodyParser from "body-parser";
import express from "express";

import { config } from "./config";
import { healthRouter } from "./health/healthRouter";
import { userRouter } from "./infrastructure/userRouter";

function bootstrap() {
  const app = express();

  app.use(bodyParser.json());
  app.use("/health", healthRouter);
  app.use("/users", userRouter);

  const { port } = config.server;

  app.listen(port, () => {
    console.log(`[APP] - Starting application on port ${port}`);
  });
}

bootstrap();
