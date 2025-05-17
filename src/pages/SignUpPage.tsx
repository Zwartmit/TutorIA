import React from 'react';
import { Navigate } from 'react-router-dom';
import { SignUp, useUser } from '@clerk/clerk-react';
import { motion } from 'framer-motion';

const SignUpPage: React.FC = () => {
  const { isSignedIn } = useUser();

  if (isSignedIn) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-300 via-gray to-gray-300 flex flex-col">      
      <div className="flex-grow flex items-center justify-center py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md"
        >
          <div>
            <div className="px-4 py-6">
              <SignUp
                path="/sign-up"
                routing="path"
                signInUrl="/sign-in"
                appearance={{
                  elements: {
                    rootBox: "mx-auto",
                    card: "",
                    headerTitle: "text-2xl font-bold text-center text-gray-900 mb-2",
                    headerSubtitle: "text-center text-gray-600 mb-6",
                    formButtonPrimary: "bg-primary-600 hover:bg-primary-700",
                    formFieldLabel: "text-gray-700 font-medium",
                    formFieldInput: "border-gray-300 focus:border-primary-500 focus:ring-primary-500",
                    footerActionText: "text-gray-600",
                    footerActionLink: "text-primary-600 hover:text-primary-700",
                  },
                }}
              />
            </div>
          </div>
        </motion.div>
      </div>

      <div className="container-custom py-6">
        <div className="text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} TutorIA. Todos los derechos reservados.
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;