import { Category } from '../models/Category'
import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from './ICategoriesRepository'

class PostgresCategoriesRepository implements ICategoriesRepository {
  findByName(name: string): Category {
    console.log('PostgresCategoriesRepository:findByName', name)
    return null
  }

  list(): Category[] {
    console.log('PostgresCategoriesRepository:list')
    return null
  }

  create({ name, description }: ICreateCategoryDTO): void {
    console.log('PostgresCategoriesRepository:create', name, description)
  }
}

export { PostgresCategoriesRepository }
