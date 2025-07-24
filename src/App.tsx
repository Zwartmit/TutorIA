import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Layouts
import MainLayout from './layouts/MainLayout';

// Pages
import HomePage from './pages/HomePage';
import AIExplanationPage from './pages/AIExplanationPage';
import AIToolsPage from './pages/AIToolsPage';
import GuidesPage from './pages/GuidesPage';
import ExamplesPage from './pages/ExamplesPage';
import AssessmentPage from './pages/AssessmentPage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import ProfilePage from './pages/ProfilePage';
import NotFoundPage from './pages/NotFoundPage';
import TermsPage from './pages/TermsPage';
import PrivacyPage from './pages/PrivacyPage';
import CookiesPage from './pages/CookiesPage';
import ForumPage from './pages/ForumPage';
import PostPage from './pages/PostPage';

// Guides
import GuideVeo3 from './pages/guides/guideVeo3';

// Components
import ProtectedRoute from './components/auth/ProtectedRoute';

function App() {
  return (
    <AnimatePresence mode="wait">
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="ia" element={<AIExplanationPage />} />
          <Route path="herramientas" element={
              <ProtectedRoute>
                <AIToolsPage />
              </ProtectedRoute>
            } />
          <Route path="guias" element={
              <ProtectedRoute>
                <GuidesPage />
              </ProtectedRoute>
            }
          />
          <Route path="tests" element={
              <ProtectedRoute>
                <AssessmentPage />
              </ProtectedRoute>
            }
          />
          <Route path="perfil" element={
              <ProtectedRoute>
                <ProfilePage />
              </ProtectedRoute>
            }
          />
          <Route path="guias/veo3" element={
              <ProtectedRoute>
                <GuideVeo3 />
              </ProtectedRoute>
            }
          />
          <Route path="tyc" element={<TermsPage />} />
          <Route path="privacidad" element={<PrivacyPage />} />
          <Route path="cookies" element={<CookiesPage />} />
          <Route path="/foro" element={
            <ProtectedRoute>
              <ForumPage />
            </ProtectedRoute>
          } />
          <Route path="/foro/:id" element={
            <ProtectedRoute>
              <PostPage />
            </ProtectedRoute>
          } />
          <Route path="ejemplos" element={<ExamplesPage />} />
        </Route>
        <Route path="/sign-in/*" element={<SignInPage />} />
        <Route path="/sign-up/*" element={<SignUpPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;