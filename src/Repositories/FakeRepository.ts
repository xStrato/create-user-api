import { IRepository } from "./Contracts/IRepository";
import { User } from "../Entities/User";

export class FakeRepository implements IRepository<User>
{
    private users: Array<User> = []
    
    public constructor(){}

    async findByEmail(email: string): Promise<User> {
        return this.users.find(user => user.email === email)
    }

    async save(entity: User): Promise<void> {
        this.users.push(entity)
    }
}