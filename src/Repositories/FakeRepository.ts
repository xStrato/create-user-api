import { IRepository } from "./Contracts/IRepository";
import { User } from "../Entities/User";

export class FakeRepository implements IRepository<User>
{
    private users: Array<User> = []
    
    public constructor(){}

    public async findByEmail(email: string): Promise<User> 
    {
        return this.users.find(user => user.email === email)
    }

    public async save(entity: User): Promise<void> 
    {
        this.users.push(entity)
    }

    public async listUsers(): Promise<Array<User>> 
    {
        return this.users
    }
}