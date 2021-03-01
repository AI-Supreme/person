import { Request, Response, Router } from 'express';

const routes = Router();

routes.get('/', (request: Request, response: Response) => {
  response.json({message: 'Boss Boa you are going so well'})
})

export default routes;