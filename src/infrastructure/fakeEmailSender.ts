import { emailSender } from "../domain/emailSender";

export class fakeEmailSender implements emailSender {
  async send(email: string, text: string): Promise<void> {
    console.log(`Email sent to ${email}, with text ${text}`);
  }
}
