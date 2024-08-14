import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';

const router = Router();

router.get('/', (_req, res) => {
  return res.status(StatusCodes.IM_A_TEAPOT).send('a');
});

router.post('/post', (req, res) => {
  console.log(req.params);

  return res.status(StatusCodes.IM_A_TEAPOT).json(req.body);
});

export { router };