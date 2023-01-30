import { Specification } from '../../models/Specification'
import {
  ICreateSpecificationDTO,
  ISpecificationsRepository,
} from '../ISpecificationRepository'

export class SpecificationsRepository implements ISpecificationsRepository {
  private specifications: Specification[]

  constructor() {
    this.specifications = []
  }

  create({ name, description }: ICreateSpecificationDTO): void {
    console.log(name, description)
    const spec = new Specification()

    Object.assign(spec, {
      name,
      description,
      createdAt: new Date(),
    })

    this.specifications.push(spec)
  }

  findByName(name: string): Specification {
    const specification = this.specifications.find((spec) => spec.name === name)
    return specification
  }
}
