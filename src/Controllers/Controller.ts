import { IController } from "./Contracts/IController";
import { Handler } from "../Handlers/Handler";
import { Response, Request} from "express";
import { CreateUserCommand } from "../Commands/CreateUserCommand";
import { IControllerResult } from "./Contracts/IControllerResult";
import { ControllerResult } from "./ControllerResult";

export class Controller implements IController
{
    constructor(private handler: Handler){}
    
    public async execute(request: Request, response: Response): Promise<IControllerResult>
    {
        const command = new CreateUserCommand("xStrato", "email@hotmail.com", "1234")

        try
        {
            await this.handler.handle(command)
            return new ControllerResult(response.status(201).send(), this.handler.result)
        }catch (error)
        {
            return new ControllerResult(
                response.status(400).json({ message: error.message || 'Unexpected error' }), 
                this.handler.result)
        }
    }
}