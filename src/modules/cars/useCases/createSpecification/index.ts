import { CreateSpecificationController } from './CreateSpecificationController'
import { SpecificationsRepository } from '../../repositories/implementations/SpecificationsRepository'
import { CreateSpecificationUseCase } from './CreateSpecificationUseCase'

const specificationsRepository = new SpecificationsRepository()
const specificationUseCase = new CreateSpecificationUseCase(
  specificationsRepository,
)
const specificationsController = new CreateSpecificationController(
  specificationUseCase,
)

export { specificationsController }
