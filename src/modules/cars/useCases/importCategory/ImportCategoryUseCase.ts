import fs from 'fs'
import { parse } from 'csv-parse'
import { Express } from 'express'

export class ImportCategoryUseCase {
  execute(file: Express.Multer.File): void {
    const stream = fs.createReadStream(file.path)

    const parseFile = parse()

    stream.pipe(parseFile)

    parseFile.on('data', async (row: any) => {
      console.log(row)
    })
  }
}
