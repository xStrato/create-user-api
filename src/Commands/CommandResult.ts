import { ICommandResult } from "./Contracts/ICommandResult";
import { ICommand } from "./Contracts/ICommand";

export class CommandResult implements ICommandResult
{
    constructor(
        private sucess: boolean, 
        private message: string,
        private data: ICommand
        ){}
}