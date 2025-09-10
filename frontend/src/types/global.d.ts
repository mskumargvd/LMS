export interface User {
  id: string;
  name: string;
  email: string;
  avatarUrl?: string;
  role: 'student' | 'instructor' | 'admin';
  createdAt: string;
  updatedAt: string;
}
export interface Course {
  id: string;
  title: string;
  description: string;
  instructorId: string;
  category: string;
  price: number;
  published: boolean;
  rating: number;
  createdAt: string;
  updatedAt: string;
}
export interface Lesson {
  id: string;
  courseId: string;
  title: string;
  contentUrl: string;
  duration: number;
  order: number;
  createdAt: string;
  updatedAt: string;
}
export interface AuthResponse {
  accessToken: string;
  refreshToken: string;
  user: User;
}
export interface ApiResponse<T> {
  data: T;
  message?: string;
  error?: string;
}