import { container } from 'tsyringe'
import { ListCategoriesUseCase } from './ListCategoriesUseCase'
import { Request, Response } from 'express'

export class ListCategoriesController {
  handle(req: Request, res: Response): Response {
    const listCategoriesUseCase = container.resolve(ListCategoriesUseCase)

    const all = listCategoriesUseCase.execute()

    return res.status(200).json(all)
  }
}
