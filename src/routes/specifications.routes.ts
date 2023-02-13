import { CreateSpecificationController } from './../modules/cars/useCases/createSpecification/CreateSpecificationController'
import { Router } from 'express'
import { listSpecificationsController } from '../modules/cars/useCases/listSpecification'

const specificationsRoutes = Router()

const createSpecificationController = new CreateSpecificationController()

specificationsRoutes.post('/', createSpecificationController.handle)

specificationsRoutes.get('/', (req, res) => {
  return listSpecificationsController.handle(req, res)
})
export { specificationsRoutes }
