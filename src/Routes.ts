import { Router } from "express";
import { handler, controller } from "./Index";

const router = Router()

router.post('/users', (request, response) => {
    return controller.create(request, response)
})

router.get('/users/list', (req, res) => {
    return controller.listUsers(req, res)
})

export { router }