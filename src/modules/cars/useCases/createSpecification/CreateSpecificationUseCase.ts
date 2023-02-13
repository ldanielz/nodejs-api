import { inject, injectable } from 'tsyringe'
import { ISpecificationsRepository } from '../../repositories/ISpecificationRepository'

interface IRequest {
  name: string
  description: string
}

@injectable()
export class CreateSpecificationUseCase {
  // eslint-disable-next-line no-useless-constructor
  constructor(
    @inject('SpecificationRepository')
    private specificationsRepository: ISpecificationsRepository,
  ) {}

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
