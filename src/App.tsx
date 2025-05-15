import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useUser } from '@clerk/clerk-react';

// Layouts
import MainLayout from './layouts/MainLayout';

// Pages
import HomePage from './pages/HomePage';
import AIExplanationPage from './pages/AIExplanationPage';
import AIToolsPage from './pages/AIToolsPage';
import GuidesPage from './pages/GuidesPage';
import AssessmentPage from './pages/AssessmentPage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import ProfilePage from './pages/ProfilePage';
import NotFoundPage from './pages/NotFoundPage';
import TermsPage from './pages/TermsPage';
import PrivacyPage from './pages/PrivacyPage';
import CookiesPage from './pages/CookiesPage';

// Components
import ProtectedRoute from './components/auth/ProtectedRoute';
import ProfileForm from './components/auth/ProfileForm';

function App() {
  const { isSignedIn, user } = useUser();

  // Check if the user needs to complete their profile
  const needsProfile = isSignedIn && (!user?.firstName || !user?.lastName);

  if (needsProfile) {
    return <ProfileForm />;
  }

  return (
    <AnimatePresence mode="wait">
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="explanation" element={<AIExplanationPage />} />
          <Route path="tools" element={<AIToolsPage />} />
          <Route
            path="guides"
            element={
              <ProtectedRoute>
                <GuidesPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="assessment"
            element={
              <ProtectedRoute>
                <AssessmentPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="profile"
            element={
              <ProtectedRoute>
                <ProfilePage />
              </ProtectedRoute>
            }
          />
          <Route path="terms" element={<TermsPage />} />
          <Route path="privacy" element={<PrivacyPage />} />
          <Route path="cookies" element={<CookiesPage />} />
        </Route>
        <Route path="/sign-in/*" element={<SignInPage />} />
        <Route path="/sign-up/*" element={<SignUpPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;