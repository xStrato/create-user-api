import { Router } from "express";
import { handler, controller } from "./Index";

const router = Router()

router.post('/users', (request, response) => {
    console.log(response)
    // response.send("Tests")
    return controller.execute(request, response)
})

router.get('/', (req, res) => res.json({name: "Hello World"}))

export { router }