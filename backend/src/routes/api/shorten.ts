import { Router } from 'express';
import { createShortUrl, getShortUrl } from '../../controllers/api/shorten';

const router = Router();

router.post('/api/shorten', createShortUrl);
router.get('/api/shorten/:shortUrl', getShortUrl);

export { router as shortenRouter };
