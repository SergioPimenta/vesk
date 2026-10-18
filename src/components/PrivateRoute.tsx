import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const PrivateRoute = () => {
  const { user, loading } = useAuth();

  // Aguarda o usuário salvo ser lido antes de decidir redirecionar.
  if (loading) return null;

  // If there's no user logged in, redirect to login page
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // If user is authenticated, render the child routes (Outlet)
  return <Outlet />;
};

export default PrivateRoute;
