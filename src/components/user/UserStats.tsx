import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, CheckCircle, X } from 'lucide-react';

interface UserStatsProps {
  isOpen: boolean;
  onClose: () => void;
}

const UserStats: React.FC<UserStatsProps> = ({ isOpen, onClose }) => {
  // Mock data - In a real app, this would come from your backend
  const stats = {
    guidesCompleted: 2,
    totalGuides: 8,
    assessmentsPassed: 1,
    totalAssessments: 3,
    averageScore: 85,
    lastActivity: '2024-03-15T10:30:00Z',
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-white rounded-xl shadow-xl w-full max-w-md m-4"
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Estadísticas</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <X size={24} />
            </button>
          </div>

          <div className="space-y-6">
            <div className="bg-primary-50 p-4 rounded-3xl">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center">
                  <BookOpen size={20} className="text-primary-600 mr-2" />
                  <h3 className="font-semibold text-gray-900">Guías</h3>
                </div>
                <span className="text-primary-600 font-semibold">
                  {stats.guidesCompleted}/{stats.totalGuides}
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-primary-600 h-2.5 rounded-full"
                  style={{
                    width: `${(stats.guidesCompleted / stats.totalGuides) * 100}%`,
                  }}
                ></div>
              </div>
            </div>

            <div className="bg-secondary-50 p-4 rounded-3xl">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center">
                  <Award size={20} className="text-secondary-600 mr-2" />
                  <h3 className="font-semibold text-gray-900">Evaluaciones</h3>
                </div>
                <span className="text-secondary-600 font-semibold">
                  {stats.assessmentsPassed}/{stats.totalAssessments}
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-secondary-600 h-2.5 rounded-full"
                  style={{
                    width: `${(stats.assessmentsPassed / stats.totalAssessments) * 100}%`,
                  }}
                ></div>
              </div>
            </div>

            <div className="bg-accent-50 p-4 rounded-3xl">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center">
                  <CheckCircle size={20} className="text-accent-600 mr-2" />
                  <h3 className="font-semibold text-gray-900">Puntuación media</h3>
                </div>
                <span className="text-accent-600 font-semibold">
                  {stats.averageScore}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-accent-600 h-2.5 rounded-full"
                  style={{ width: `${stats.averageScore}%` }}
                ></div>
              </div>
            </div>

            <div className="text-sm text-gray-500 mt-4">
              Última actividad:{' '}
              {new Date(stats.lastActivity).toLocaleDateString('es-ES', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
              })}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default UserStats;