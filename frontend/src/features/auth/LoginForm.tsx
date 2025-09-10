import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { loginUser } from './authSlice';
const LoginForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const { loading, error } = useAppSelector((state) => state.auth);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(loginUser({ email, password }));
  };
  return (
    <form onSubmit={handleSubmit} className="login-form">
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      </label>
      <button type="submit" disabled={loading}>{loading ? 'Logging in...' : 'Log In'}</button>
      {error && <p className="error">{error}</p>}
    </form>
  );
};
export default LoginForm;