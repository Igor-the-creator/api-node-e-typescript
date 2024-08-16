import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';
import { CidadesController } from './../controllers';

const router = Router();

router.get('/', (_req, res) => {
  return res.status(StatusCodes.IM_A_TEAPOT).send('a');
});

router.post('/cidades', CidadesController.create);

export { router };