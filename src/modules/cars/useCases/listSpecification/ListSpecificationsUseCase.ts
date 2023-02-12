import { Request } from 'express'
import { Specification } from '../../entities/Specification'
import { ISpecificationsRepository } from '../../repositories/ISpecificationRepository'

export class ListSpecificationsUseCase {
  // eslint-disable-next-line no-useless-constructor
  constructor(private specificationsRepository: ISpecificationsRepository) {}

  execute(req: Request): Specification {
    const specifications = this.specificationsRepository.findByName(
      req.body.name,
    )

    return specifications
  }
}
