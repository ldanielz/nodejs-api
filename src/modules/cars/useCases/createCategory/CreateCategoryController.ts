import { Request, Response } from 'express'
import { CreateCategoryUseCase } from './CreateCategoryUseCase'

export class CreateCategoryController {
  // eslint-disable-next-line no-useless-constructor
  constructor(private createCategoryUseCase: CreateCategoryUseCase) {}

  handle(req: Request, res: Response): Response {
    const { name, description } = req.body

    try {
      this.createCategoryUseCase.execute({ name, description })
    } catch (error) {
      return res.status(400).json(error.message)
    }

    return res.status(201).send()
  }
}
