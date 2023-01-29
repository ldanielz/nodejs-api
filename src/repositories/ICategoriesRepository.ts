import { Category } from '../models/Category'

export interface ICategoriesRepository {
  findByName(name: string): Category
  list(): Category[]
  create(name: string, description: string): void
}
