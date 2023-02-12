import { ICategoriesRepository } from '../../repositories/ICategoriesRepository'
import fs from 'fs'
import { parse } from 'csv-parse'
import { Express } from 'express'

interface IImportCategory {
  name: string
  description: string
}

export class ImportCategoryUseCase {
  // eslint-disable-next-line no-useless-constructor
  constructor(private categoriesRepository: ICategoriesRepository) {}

  loadCategories(file: Express.Multer.File): Promise<IImportCategory[]> {
    return new Promise((resolve, reject) => {
      const stream = fs.createReadStream(file.path)

      const categories: IImportCategory[] = []

      const parseFile = parse()

      stream.pipe(parseFile)

      parseFile
        .on('data', async (row) => {
          const [name, description] = row

          categories.push({ name, description })
        })
        .on('end', () => {
          fs.promises.unlink(file.path)
          resolve(categories)
        })
        .on('error', (err) => {
          reject(err)
        })
    })
  }

  async execute(file: Express.Multer.File): Promise<void> {
    const categories = await this.loadCategories(file)

    categories.map(async (category) => {
      const { name, description } = category
      const existsCategory = this.categoriesRepository.findByName(name)

      if (!existsCategory) {
        this.categoriesRepository.create({ name, description })
      }
    })
  }
}
