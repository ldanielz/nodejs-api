import { container } from 'tsyringe'
import { CategoriesRepository } from '../../modules/cars/repositories/implementations/CategoriesRepository'
import { ICategoriesRepository } from './../../modules/cars/repositories/ICategoriesRepository'

container.registerSingleton<ICategoriesRepository>(
  'CategoriesRepository',
  CategoriesRepository,
)
