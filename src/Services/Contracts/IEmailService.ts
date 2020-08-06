import { IEmailMessageService } from "./IEmailMessageService";

export interface IEmailService
{
    send(message: IEmailMessageService): Promise<void>
}