import { Response, Request } from "express";
import { Handler } from "../../Handlers/Handler";
import { ICommandResult } from "../../Commands/Contracts/ICommandResult";
import { IControllerResult } from "./IControllerResult";
import { Controller } from "../Controller";

export interface IController
{
    // new(handler: Handler): this
    execute(request: Request, response: Response): Promise<IControllerResult>
}