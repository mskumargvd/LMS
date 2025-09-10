import { useAppSelector, useAppDispatch } from '../store/hooks';
import { logout } from '../features/auth/authSlice';
export const useAuth = () => {
  const dispatch = useAppDispatch();
  const auth = useAppSelector((state) => state.auth);
  const logoutUser = () => {
    dispatch(logout());
  };
  return { auth, logoutUser };
};