import { SpecificationsRepository } from './../modules/cars/repositories/SpecificationsRepository'
import { Router } from 'express'
import { CreateSpecificationsService } from '../modules/cars/services/CreateSpecificationService'

const specificationsRoutes = Router()

const specificationsRepository = new SpecificationsRepository()

specificationsRoutes.post('/', (req, res) => {
  const { name, description } = req.body

  const createSpecificationService = new CreateSpecificationsService(
    specificationsRepository,
  )

  createSpecificationService.execute({ name, description })

  return res.status(201).send()
})

export { specificationsRoutes }
