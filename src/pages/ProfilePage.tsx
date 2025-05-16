import React from 'react';
import { Navigate } from 'react-router-dom';
import { useUser, UserProfile } from '@clerk/clerk-react';

const ProfilePage: React.FC = () => {
  const { isSignedIn, isLoaded } = useUser();

  if (!isLoaded) {
    return <div>Cargando...</div>;
  }

  if (!isSignedIn) {
    return <Navigate to="/sign-in" replace />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <UserProfile
        appearance={{
          elements: {
            rootBox: "mx-auto",
            card: "rounded-xl shadow-md",
          },
        }}
      />
    </div>
  );
};

export default ProfilePage;