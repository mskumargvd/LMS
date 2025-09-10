import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { fetchCourses } from './coursesSlice';
const CourseList: React.FC = () => {
  const dispatch = useAppDispatch();
  const { courses, loading, error } = useAppSelector((state) => state.courses);
  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]);
  if (loading) return <p>Loading courses...</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <div className="course-list">
      {courses.map((course) => (
        <div key={course.id} className="course-item">
          <h3>{course.title}</h3>
          <p>{course.description}</p>
        </div>
      ))}
    </div>
  );
};
export default CourseList;