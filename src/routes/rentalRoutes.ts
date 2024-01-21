import { Router } from "express"

import { rentalController } from "@/controllers/rentalController.ts"
import { ValidateBodyFromSchemaMiddleware } from "@/middlewares/ValidateBodyFromSchemaMiddleware.ts"
import { createRentalBodySchema } from "@/schemas/rentalSchemas.ts"

const rentalRouter = Router({
    caseSensitive: true,
    strict: true,
})

rentalRouter.get("/", rentalController.listRentals)
rentalRouter.put("/", rentalController.finishRental)

rentalRouter.post(
    "/",
    ValidateBodyFromSchemaMiddleware.handle(createRentalBodySchema, "Erro de validação na criação do aluguel"),
    rentalController.createRental
)

export { rentalRouter }
