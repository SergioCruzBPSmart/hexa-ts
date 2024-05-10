import { User } from "./user";

export interface userRepository {
  getById(userId: string): Promise<User | null>;
}
