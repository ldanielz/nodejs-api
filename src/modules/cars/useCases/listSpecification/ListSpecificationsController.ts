import { Request, Response } from 'express'
import { ListSpecificationsUseCase } from './ListSpecificationsUseCase'

export class ListSpecificationsController {
  constructor(private listSpecificationsUseCase: ListSpecificationsUseCase) {
    console.log('constructor listCategoriesUseCase')
  }

  handle(req: Request, res: Response): Response {
    const all = this.listSpecificationsUseCase.execute(req)

    return res.status(200).json(all)
  }
}
