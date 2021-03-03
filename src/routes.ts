import { Router } from 'express';
import personController from './controllers/personController';


const routes = Router();

routes.post('/person', personController.create)
routes.post('/person/get', personController.index)

export default routes;