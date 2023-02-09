import { Request, Response } from 'express'
import { ListSpecificationsUseCase } from './ListSpecificationsUseCase'

export class ListSpecificationsController {
  // eslint-disable-next-line no-useless-constructor
  constructor(private listSpecificationsUseCase: ListSpecificationsUseCase) {}

  handle(req: Request, res: Response): Response {
    const all = this.listSpecificationsUseCase.execute(req)

    return res.status(200).json(all)
  }
}
