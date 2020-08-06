import { Response, Request } from "express";
import { User } from "../../Entities/User";

export interface IController
{
    // new(handler: Handler): this
    create(request: Request, response: Response): Promise<Response>
    listUsers(request: Request, response: Response): Promise<Response>
}