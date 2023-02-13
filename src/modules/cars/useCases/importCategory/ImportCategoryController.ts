import { container } from 'tsyringe'
/* eslint-disable no-useless-constructor */
import { Request, Response } from 'express'
import { ImportCategoryUseCase } from './ImportCategoryUseCase'

export class ImportCategoryController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { file } = req

    const importCategoryUseCase = container.resolve(ImportCategoryUseCase)

    importCategoryUseCase.execute(file)

    return res.status(201).send()
  }
}
