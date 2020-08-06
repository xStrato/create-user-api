import { User } from "../Entities/User";
import { IRepository } from "./Contracts/IRepository";

export class UserRepository implements IRepository<User>
{
    findByEmail(email: string): Promise<User> {
        throw new Error("Method not implemented.");
    }
    save(prop: User): Promise<void> {
        throw new Error("Method not implemented.");
    }
}