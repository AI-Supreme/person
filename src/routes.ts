import { Router } from 'express';
import personController from './controllers/personController';


const routes = Router();

routes.post('/person/get', personController.index)
routes.post('/person/one', personController.getByEmail)
routes.post('/person', personController.create)
routes.put('/person', personController.update)
routes.delete('/person', personController.delete)

export default routes;