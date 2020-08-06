import { Entity } from "../../Entities/Entity";

export interface IRepository<T extends Entity>
{
    findByEmail(email: string): Promise<T>
    save(entity: T): Promise<void>
}