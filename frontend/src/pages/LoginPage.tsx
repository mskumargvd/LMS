import React from 'react';
import LoginForm from '../features/auth/LoginForm';
const LoginPage: React.FC = () => {
  return (
    <div className="login-page">
      <h2>Please log in</h2>
      <LoginForm />
    </div>
  );
};
export default LoginPage;