import { IEmailAddressService } from "./IEmailAddressService";

export interface IEmailMessageService
{
    to: IEmailAddressService
    from: IEmailAddressService
    subject: string
    body: string
}