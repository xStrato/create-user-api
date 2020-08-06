import { Response } from "express";
import { ICommandResult } from "../../Commands/Contracts/ICommandResult";

export interface IControllerResult
{
    response: Response
    commandResult: ICommandResult
}