import { ListCategoriesUseCase } from './ListCAtegoriesUseCase'
import { Request, Response } from 'express'

export class ListCategoriesController {
  constructor(private listCategoriesUseCase: ListCategoriesUseCase) {
    console.log('constructor listCategoriesUseCase')
  }

  handle(req: Request, res: Response): Response {
    const all = this.listCategoriesUseCase.execute()

    return res.status(200).json(all)
  }
}
