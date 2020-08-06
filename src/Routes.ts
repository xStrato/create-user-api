import { Router } from "express";
import { handler, controller } from "./Index";

const router = Router()

router.post('/users', (request, response) => {
    return controller.execute(request, response)
})

router.get('/users/list', (req, res) => res.json({name: "Hello World"}))

export { router }