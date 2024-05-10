import { Request, Response } from "express";

import { Welcome } from "../application/welcome";

export class userController {
  constructor(private readonly welcome: Welcome) {}
  async run(req: Request, res: Response) {
    const userId = req.params.id;
    await this.welcome.run(userId);
    res.status(200).send();
  }
}
