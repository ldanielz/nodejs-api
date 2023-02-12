import { ICategoriesRepository } from '../../repositories/ICategoriesRepository'

import { inject, injectable } from 'tsyringe'

interface ICreateCategoryUseCase {
  name: string
  description: string
}
@injectable()
export class CreateCategoryUseCase {
  // eslint-disable-next-line no-useless-constructor
  constructor(
    @inject('CategoriesRepository')
    private categoriesRepository: ICategoriesRepository,
  ) {}

  async execute({ name, description }: ICreateCategoryUseCase): Promise<void> {
    const categoryAlreadyExists = this.categoriesRepository.findByName(name)

    if (categoryAlreadyExists) {
      throw new Error('A category with that name already exists')
    }

    this.categoriesRepository.create({ name, description })
  }
}
