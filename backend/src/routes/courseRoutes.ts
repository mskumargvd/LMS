import express from 'express';
import { getCourses, getCourseById, createCourse } from '../controllers/courseController';
const router = express.Router();
router.get('/', getCourses);
router.get('/:id', getCourseById);
export default router;