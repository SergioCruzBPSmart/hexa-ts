import { User } from "../domain/user";
import { userRepository } from "../domain/userRepository";

const users: User[] = [
  {
    id: "1",
    email: "andres.hello@gmail.com",
  },
  {
    id: "2",
    email: "pepe.hello@gmail.com",
  },
];

export class inMemoryUser implements userRepository {
  async getById(userId: string): Promise<User | null> {
    const user = users.find((user) => user.id === userId);
    if (!user) {
      return null;
    }
    return new User(user.id, user.email);
  }
}
