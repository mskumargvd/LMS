import React from 'react';
import CourseList from '../features/courses/CourseList';
const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <h1>Welcome to the Learning Management System</h1>
      <CourseList />
    </div>
  );
};
export default HomePage;