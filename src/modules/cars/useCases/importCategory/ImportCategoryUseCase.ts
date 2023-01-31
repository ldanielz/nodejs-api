import { ICategoriesRepository } from './../../repositories/ICategoriesRepository'
import fs from 'fs'
import { parse } from 'csv-parse'
import { Express } from 'express'

interface IImportCategory {
  name: string
  description: string
}

export class ImportCategoryUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {
    console.log(categoriesRepository)
  }

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
          resolve(categories)
        })
        .on('error', (err) => {
          reject(err)
        })
    })
  }

  async execute(file: Express.Multer.File): Promise<void> {
    const categories = await this.loadCategories(file)

    console.log(categories)
  }
}
