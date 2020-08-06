import { ICommandResult } from "./Contracts/ICommandResult";
import { ICommand } from "./Contracts/ICommand";

export class CommandResult implements ICommandResult
{
    constructor(
        public sucess: boolean, 
        public message: string,
        public data: ICommand
        ){}
}