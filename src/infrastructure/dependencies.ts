import { Welcome } from "../application/welcome";
import { fakeEmailSender } from "./fakeEmailSender";
import { inMemoryUser } from "./inMemoryUser";
import { userController } from "./userController";

const FakeEmailSender = new fakeEmailSender();
const InMemoryUser = new inMemoryUser();
export const welcome = new Welcome(InMemoryUser, FakeEmailSender);
export const UserController = new userController(welcome);
