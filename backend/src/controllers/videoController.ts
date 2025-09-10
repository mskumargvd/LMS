import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

const userHasAccessToVideo = async (userId: string, videoId: string): Promise<boolean> => {
  return true;
};

export const getVideoAccessToken = async (req: Request, res: Response) => {
  const videoId = req.params.id;
  const user = (req as any).user;
  if (!user) return res.status(401).json({ message: 'Unauthorized' });
  const hasAccess = await userHasAccessToVideo(user.id, videoId);
  if (!hasAccess) return res.status(403).json({ message: 'Access denied' });
  const token = jwt.sign(
    { userId: user.id, videoId },
    process.env.JWT_SECRET || 'secret',
    { expiresIn: '1h' }
  );
  const googleDrivePreviewUrl = `https://drive.google.com/file/d/${videoId}/preview?access_token=${token}`;
  res.json({ url: googleDrivePreviewUrl, token });
};