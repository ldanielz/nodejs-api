import { Router } from 'express'
import { specificationsController } from '../modules/cars/useCases/createSpecification'

const specificationsRoutes = Router()

specificationsRoutes.post('/', (req, res) => {
  return specificationsController.handle(req, res)
})

export { specificationsRoutes }
