import { IControllerResult } from "./Contracts/IControllerResult";
import { Response } from "express";
import { ICommandResult } from "../Commands/Contracts/ICommandResult";

export class ControllerResult implements IControllerResult
{
    constructor(
        public response: Response,
        public commandResult: ICommandResult,
    ){}
}