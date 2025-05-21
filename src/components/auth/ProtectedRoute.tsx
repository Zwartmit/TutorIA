import { useUser } from '@clerk/clerk-react';
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { isSignedIn, isLoaded } = useUser();

  if (!isLoaded) {
    return <div>Cargando...</div>;
  }

  if (!isSignedIn) {
    const location = window.location.pathname + window.location.search;
    return <Navigate to={`/sign-in?redirectTo=${encodeURIComponent(location)}`} replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;