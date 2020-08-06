import { ICommand } from "../../Commands/Contracts/ICommand";

export interface IHandler<T extends ICommand>
{
    handle(command: T): Promise<void>
}