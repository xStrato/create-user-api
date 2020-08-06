import { IHandler } from "./Contracts/IHandler";
import { CreateUserCommand } from "../Commands/CreateUserCommand";
import { ICommandResult } from "../Commands/Contracts/ICommandResult";
import { IRepository } from "../Repositories/Contracts/IRepository";
import { User } from "../Entities/User";
import { CommandResult } from "../Commands/CommandResult";
import { IEmailService } from "../Services/Contracts/IEmailService";
import { UpdateUserCommand } from "../Commands/UpdateUserCommand";

export class Handler implements IHandler<CreateUserCommand>, IHandler<UpdateUserCommand>
{
    public result: ICommandResult

    constructor(
    private readonly repository: IRepository<User>,
    private readonly emailService: IEmailService
    ){}

    async handle(command: CreateUserCommand): Promise<void> {
        const userAlreadyExists = await this.repository.findByEmail(command.email)

        if(userAlreadyExists)
        {
            throw new Error("User already exists.")
            // this.result = new CommandResult(false, "User already exists.", command)
            return;
        }
        const user = new User(command)
        await this.repository.save(user)

        await this.emailService.send({
            to: { name: command.name, email: command.email },
            from: { name: "App Team", email: "app@team.com"},
            subject: "You're welcome in our App!",
            body: `<h3>Sign in right now!</h3>
                    <p>Follow your sign in information:</p>
                    <p>Username: ${command.name}</p>
                    <p>Email: ${command.email}</p>
                    <p>Password: ${command.password}</p>
                    `
        })
        
        this.result = new CommandResult(true, "User successfully created.", command)
    }
}