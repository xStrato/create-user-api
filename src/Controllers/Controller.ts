import { IController } from "./Contracts/IController";
import { Handler } from "../Handlers/Handler";
import { Response, Request} from "express";
import { CreateUserCommand } from "../Commands/CreateUserCommand";
import { User } from "../Entities/User";

export class Controller implements IController
{
    constructor(private handler: Handler){}
    
    public async create(request: Request, response: Response): Promise<Response>
    {
        try
        {
            const command = new CreateUserCommand(request.body.name, request.body.email, request.body.password)

            await this.handler.handle(command)

            return response.status(201).send({
                response: 201,
                result: {
                    date: new Date(),
                    command: this.handler.result
                }
            })
        }catch (error)
        {
            return response.status(400).json({ 
                response: 400,
                message: error.message || 'Unexpected error',
                date: new Date()
            });
        }
    }

    public async listUsers(request: Request, response: Response): Promise<Response>
    {
        try
        {
            const users = await this.handler.repository.listUsers()
            return response.status(200).send({
                response: 200,
                date: new Date(),
                users: users
            });
        } catch (error)
        {
            return response.status(400).json({ 
                response: 400,
                message: error.message || 'Unexpected error',
                date: new Date()
            });
        }
    }
}