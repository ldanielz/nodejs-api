import { CategoriesRepository } from '../repositories/CategoriesRepository'

interface ICreateCategoryService {
  name: string
  description: string
}

export class CreateCategoryService {
  constructor(private categoriesRepository: CategoriesRepository) {
    console.log(categoriesRepository)
  }

  execute({ name, description }: ICreateCategoryService): void {
    const categoryAlreadyExists = this.categoriesRepository.findByName(name)

    if (categoryAlreadyExists) {
      throw new Error('A category with that name already exists')
    }

    this.categoriesRepository.create({ name, description })
  }
}
