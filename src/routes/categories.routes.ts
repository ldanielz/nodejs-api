import { Request, Response, Router } from 'express'
import { CategoriesRepository } from '../modules/cars/repositories/CategoriesRepository'
import { CreateCategoryService } from '../modules/cars/services/CreateCategoryService'

const categoriesRoutes = Router()

const categoriesRepository = new CategoriesRepository()

categoriesRoutes.post('/', (req: Request, res: Response) => {
  const { name, description } = req.body

  const createCategoryService = new CreateCategoryService(categoriesRepository)
  try {
    createCategoryService.execute({ name, description })
  } catch (error) {
    res.status(400).json(error.message)
  }

  res.status(201).send()
})

categoriesRoutes.get('/', (req: Request, res: Response) => {
  const all = categoriesRepository.list()

  return res.status(200).json(all)
})

export { categoriesRoutes }
