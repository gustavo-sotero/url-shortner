import { Router } from 'express';
import { shortenRouter } from './api/shorten';

shortenRouter;
const router = Router();

router.use(shortenRouter);

export { router };
