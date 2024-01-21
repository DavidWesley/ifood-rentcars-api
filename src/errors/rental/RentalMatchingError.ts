import { StatusCodes } from "http-status-codes"

import { BaseError } from "@/errors/BaseError.ts"

export class RentalMatchingError extends BaseError {
    constructor(rentalId: string, customerId: string) {
        const message = `Aluguel com o id:${rentalId} não pertence ao usuário ID: ${customerId}`
        //TODO definir um erro mais especifico
        super(message, StatusCodes.NOT_FOUND, "NOT_FOUND_ERROR")
        this.name = "RentalMatchingError"
    }
}