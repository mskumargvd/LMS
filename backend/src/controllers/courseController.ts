import { Request, Response } from 'express';
import Course from '../models/Course';
export const getCourses = async (_req: Request, res: Response) => {
  try {
    const courses = await Course.find().populate('instructor', 'name');
    res.json(courses);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
export const getCourseById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const course = await Course.findById(id).populate('instructor', 'name');
    if (!course) return res.status(404).json({ message: 'Course not found' });

    res.json(course);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
export const createCourse = async (req: Request, res: Response) => {
  const { title, description, instructor, category, price, published } = req.body;
  try {
    const newCourse = new Course({ title, description, instructor, category, price, published });
    await newCourse.save();
    res.status(201).json(newCourse);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};