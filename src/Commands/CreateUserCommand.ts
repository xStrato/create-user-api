import { ICommand } from "./Contracts/ICommand";

export class CreateUserCommand implements ICommand
{
    constructor(
        public name: string,
        public email: string,
        public password: string
    ){}
    validate(): void {
        throw new Error("Method not implemented.");
    }
}