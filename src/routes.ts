import { Router } from 'express';
import personController from './controllers/personController';


const routes = Router();

routes.post('/persons', personController.create)
routes.post('/persons/get', personController.index)

export default routes;