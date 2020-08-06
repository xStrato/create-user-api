import { IController } from "./Contracts/IController";
import { Handler } from "../Handlers/Handler";
import { Response, Request} from "express";
import { CreateUserCommand } from "../Commands/CreateUserCommand";
import { IControllerResult } from "./Contracts/IControllerResult";
import { ControllerResult } from "./ControllerResult";
import { User } from "../Entities/User";

export class Controller implements IController
{
    constructor(private handler: Handler){}
    
    public async execute(request: Request, response: Response): Promise<Response>
    {
        const command = new CreateUserCommand("xStrato", "email@hotmail.com", "1234")

        try
        {
            await this.handler.handle(command)
            // return new ControllerResult(response.status(201).send(), this.handler.result)
            return response.status(201).send()
        }catch (error)
        {
            // return new ControllerResult(response.status(400).json({ message: error.message || 'Unexpected error' }), this.handler.result)
            return response.status(400).json({ message: error.message || 'Unexpected error' });
        }
    }
}