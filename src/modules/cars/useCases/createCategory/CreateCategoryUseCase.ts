import { ICategoriesRepository } from '../../repositories/ICategoriesRepository'

interface ICreateCategoryUseCase {
  name: string
  description: string
}

export class CreateCategoryUseCase {
  // eslint-disable-next-line no-useless-constructor
  constructor(private categoriesRepository: ICategoriesRepository) {}

  execute({ name, description }: ICreateCategoryUseCase): void {
    const categoryAlreadyExists = this.categoriesRepository.findByName(name)

    if (categoryAlreadyExists) {
      throw new Error('A category with that name already exists')
    }

    this.categoriesRepository.create({ name, description })
  }
}
