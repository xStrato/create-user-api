import { uuid } from "uuidv4"

export abstract class Entity 
{
    public readonly id: string
    constructor()
    {
        this.id = uuid()
    }
}