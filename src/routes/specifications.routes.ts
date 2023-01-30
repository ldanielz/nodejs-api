import { Router } from 'express'
import { specificationsController } from '../modules/cars/useCases/createSpecification'
import { listSpecificationsController } from '../modules/cars/useCases/listSpecification'

const specificationsRoutes = Router()

specificationsRoutes.post('/', (req, res) => {
  return specificationsController.handle(req, res)
})

specificationsRoutes.get('/', (req, res) => {
  return listSpecificationsController.handle(req, res)
})
export { specificationsRoutes }
