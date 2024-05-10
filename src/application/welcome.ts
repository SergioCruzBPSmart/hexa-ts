import { emailSender } from "../domain/emailSender";
import { userRepository } from "../domain/userRepository";

export class Welcome {
  constructor(
    private readonly UserRepository: userRepository,
    private readonly EmailSender: emailSender
  ) {}

  async run(userId: string) {
    const user = await this.UserRepository.getById(userId);
    if (!user) {
      throw new Error(`User id not found ${userId}`);
    }
    await this.EmailSender.send(user.email, "Welcome to application");
  }
}
