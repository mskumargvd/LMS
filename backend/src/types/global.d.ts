export interface IUser {
  id: string;
  name: string;
  email: string;
  role: 'student' | 'instructor' | 'admin';
  avatarUrl?: string;
  createdAt: Date;
  updatedAt: Date;
}
export interface ICourse {
  id: string;
  title: string;
  description: string;
  instructorId: string;
  category: string;
  price: number;
  published: boolean;
  rating: number;
  createdAt: Date;
  updatedAt: Date;
}