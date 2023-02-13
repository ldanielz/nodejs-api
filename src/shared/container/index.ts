import { ISpecificationsRepository } from './../../modules/cars/repositories/ISpecificationRepository'
import { container } from 'tsyringe'
import { CategoriesRepository } from '../../modules/cars/repositories/implementations/CategoriesRepository'
import { ICategoriesRepository } from './../../modules/cars/repositories/ICategoriesRepository'
import { SpecificationsRepository } from '../../modules/cars/repositories/implementations/SpecificationsRepository'

container.registerSingleton<ICategoriesRepository>(
  'CategoriesRepository',
  CategoriesRepository,
)

container.registerSingleton<ISpecificationsRepository>(
  'SpecificationRepository',
  SpecificationsRepository,
)
