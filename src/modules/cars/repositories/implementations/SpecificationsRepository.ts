import { Specification } from '../../entities/Specification'
import {
  ICreateSpecificationDTO,
  ISpecificationsRepository,
} from '../ISpecificationRepository'

export class SpecificationsRepository implements ISpecificationsRepository {
  private specifications: Specification[]

  // eslint-disable-next-line no-use-before-define
  private static INSTANCE: SpecificationsRepository

  constructor() {
    this.specifications = []
  }

  public static getInstance(): SpecificationsRepository {
    if (!SpecificationsRepository.INSTANCE) {
      SpecificationsRepository.INSTANCE = new SpecificationsRepository()
    }
    return SpecificationsRepository.INSTANCE
  }

  create({ name, description }: ICreateSpecificationDTO): void {
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

  list(): Specification[] {
    return this.specifications
  }
}
