import { Entity } from "../../Entities/Entity";
import { User } from "../../Entities/User";

export interface IRepository<T extends Entity>
{
    findByEmail(email: string): Promise<T>
    save(entity: T): Promise<void>
    listUsers(): Promise<Array<User>>
}