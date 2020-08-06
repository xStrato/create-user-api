import { FakeRepository } from "./Repositories/FakeRepository";
import { MailtrapEmailService } from "./Services/MailtrapEmailService";
import { Handler } from "./Handlers/Handler";
import { Controller } from "./Controllers/Controller";

const fakeRepository = new FakeRepository()
const mailtrap = new MailtrapEmailService()

const handler = new Handler(fakeRepository, mailtrap)
const controller = new Controller(handler)

export { handler, controller }