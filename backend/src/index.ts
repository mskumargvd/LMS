import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';
import { connectDB } from './config/db';
import authRoutes from './routes/authRoutes';
import courseRoutes from './routes/courseRoutes';
import videoRoutes from './routes/videoRoutes';
import { authMiddleware } from './middlewares/authMiddleware';

dotenv.config();
const app: Application = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());
connectDB();
app.use('/api/auth', authRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/videos', authMiddleware, videoRoutes);
app.get('/', (_req: Request, res: Response) => {
  res.send('LMS Backend is running');
});
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});