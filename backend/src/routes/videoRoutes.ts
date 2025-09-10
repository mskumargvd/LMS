import express from 'express';
import { videoAccessMiddleware } from '../middlewares/videoAccessMiddleware';
import { getVideoAccessToken } from '../controllers/videoController';

const router = express.Router();

router.get('/:id/access-token', getVideoAccessToken);

export default router;