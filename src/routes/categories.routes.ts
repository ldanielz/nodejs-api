import { Router, Request, Response } from 'express'
import { CategoriesRepository } from '../repositories/CategoriesRepository'

const categoriesRoutes = Router()

const categoriesRepository = new CategoriesRepository()

categoriesRoutes.post('/', (req: Request, res: Response) => {
  const { name, description } = req.body

  categoriesRepository.create({ name, description })

  res.status(201).send()
})

categoriesRoutes.get('/', (req: Request, res: Response) => {
  const all = categoriesRepository.list()

  return res.status(200).json(all)
})

export { categoriesRoutes }
