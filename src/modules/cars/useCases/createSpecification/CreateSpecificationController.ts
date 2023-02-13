import { container } from 'tsyringe'
import { Request, Response } from 'express'
import { CreateSpecificationUseCase } from './CreateSpecificationUseCase'

export class CreateSpecificationController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { name, description } = req.body

    const createSpecificationUseCase = container.resolve(
      CreateSpecificationUseCase,
    )

    createSpecificationUseCase.execute({ name, description })

    return res.status(201).send()
  }
}
