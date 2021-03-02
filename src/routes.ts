import { Router } from 'express';
import personController from './controllers/personController';


const routes = Router();

routes.post('/persons', personController.create)

export default routes;