export interface emailSender {
  send(email: string, text: string): Promise<void>;
}
