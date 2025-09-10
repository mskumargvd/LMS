import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export const videoAccessMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const token = req.query.access_token as string;
  if (!token) return res.status(401).json({ message: 'Access token missing' });
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'secret') as any;
    const referrer = req.headers.referer || '';
    if (!referrer.includes(process.env.LMS_FRONTEND_URL || '')) {
      return res.status(403).json({ message: 'Forbidden referrer' });
    }
    (req as any).user = { id: decoded.userId };
    (req as any).videoId = decoded.videoId;
    next();
  } catch {
    return res.status(401).json({ message: 'Invalid or expired token' });
  }
};