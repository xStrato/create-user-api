import { IEmailService } from "./Contracts/IEmailService";
import { IEmailMessageService } from "./Contracts/IEmailMessageService";
import nodemailer from 'nodemailer'
import Mail from "nodemailer/lib/mailer";

export class MailtrapEmailService implements IEmailService
{
    private transporter: Mail

    constructor()
    {
        this.transporter = nodemailer.createTransport({
            host: 'smtp.mailtrap.io',
            port: 2525,
            auth: { user:'', pass: ''}
        })
    }
    async send(message: IEmailMessageService): Promise<void>
    {
        this.transporter.sendMail({
            to: { name: message.to.name, address: message.to.email },
            from: { name: message.from.name, address: message.from.email },
            subject: message.subject,
            html: message.body
        })
    }   
}