import { Request } from 'express'
import { Specification } from '../../models/Specification'
import { ISpecificationsRepository } from '../../repositories/ISpecificationRepository'

export class ListSpecificationsUseCase {
  constructor(private specificationsRepository: ISpecificationsRepository) {
    console.log(specificationsRepository)
  }

  execute(req: Request): Specification {
    const specifications = this.specificationsRepository.findByName(
      req.body.name,
    )

    return specifications
  }
}
