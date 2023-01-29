import { ISpecificationsRepository } from './../repositories/ISpecificationRepository'

interface IRequest {
  name: string
  description: string
}

export class CreateSpecificationsService {
  constructor(private specificationsRepository: ISpecificationsRepository) {
    console.log('CreateSpecificationsService ctor')
  }

  execute({ name, description }: IRequest): void {
    const specificationAlreadyExists =
      this.specificationsRepository.findByName(name)

    if (specificationAlreadyExists) {
      throw new Error('Specification with name ' + name + ' already exists')
    }

    this.specificationsRepository.create({
      name,
      description,
    })
  }
}
