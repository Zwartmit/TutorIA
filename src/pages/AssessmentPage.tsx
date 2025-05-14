import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Award, Check, X, RefreshCw, ChevronRight } from 'lucide-react';
import { PiExam } from 'react-icons/pi';

interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

const questions: Question[] = [
  {
    id: 1,
    text: '¿Qué es la Inteligencia Artificial?',
    options: [
      'Un programa de computadora que puede pensar como un humano',
      'La capacidad de las máquinas para simular el comportamiento humano',
      'Un conjunto de algoritmos que permite a las máquinas aprender de datos y mejorar con la experiencia',
      'Un robot con apariencia humana'
    ],
    correctAnswer: 2,
    explanation: 'La IA es un conjunto de algoritmos y técnicas que permiten a las máquinas aprender de datos y mejorar su rendimiento con la experiencia, sin ser explícitamente programadas para cada tarea.'
  },
  {
    id: 2,
    text: '¿Cuál de las siguientes NO es un ejemplo de IA débil o especializada?',
    options: [
      'Un asistente virtual como Siri o Alexa',
      'Un sistema de recomendación de películas en Netflix',
      'Una IA que puede resolver cualquier problema intelectual humano',
      'Un programa de ajedrez que puede vencer a campeones mundiales'
    ],
    correctAnswer: 2,
    explanation: 'Una IA que puede resolver cualquier problema intelectual humano sería un ejemplo de IA fuerte o general (AGI), que aún no existe. Los otros ejemplos son IA débil o especializada, diseñada para tareas específicas.'
  },
  {
    id: 3,
    text: '¿Qué es el aprendizaje automático (machine learning)?',
    options: [
      'La capacidad de una máquina para aprender sin ser explícitamente programada',
      'Un proceso por el cual las computadoras aprenden a programarse a sí mismas',
      'La automatización de tareas repetitivas mediante scripts',
      'El estudio de cómo los humanos aprenden nuevas habilidades'
    ],
    correctAnswer: 0,
    explanation: 'El aprendizaje automático es una rama de la IA que permite a las máquinas aprender patrones a partir de datos sin ser explícitamente programadas para cada tarea específica.'
  },
  {
    id: 4,
    text: '¿Qué es una red neuronal artificial?',
    options: [
      'Un programa que imita exactamente el funcionamiento del cerebro humano',
      'Un modelo matemático inspirado en las redes neuronales biológicas',
      'Una red de computadoras conectadas entre sí',
      'Un sistema que solo puede resolver problemas matemáticos'
    ],
    correctAnswer: 1,
    explanation: 'Una red neuronal artificial es un modelo matemático inspirado en la estructura y funcionamiento de las redes neuronales biológicas, pero no es una réplica exacta del cerebro humano.'
  },
  {
    id: 5,
    text: '¿Qué es el procesamiento del lenguaje natural (NLP)?',
    options: [
      'La capacidad de una computadora para entender y generar lenguaje humano',
      'Un sistema de traducción automática',
      'Un programa que convierte voz en texto',
      'Un método para enseñar idiomas'
    ],
    correctAnswer: 0,
    explanation: 'El NLP es una rama de la IA que se centra en la interacción entre las computadoras y el lenguaje humano, incluyendo el análisis, comprensión y generación de lenguaje natural.'
  },
  {
    id: 6,
    text: '¿Qué es el aprendizaje profundo (deep learning)?',
    options: [
      'Un tipo de memoria de computadora muy profunda',
      'Un subconjunto del machine learning basado en redes neuronales con múltiples capas',
      'Un método para almacenar datos en la nube',
      'Un sistema de backup de información'
    ],
    correctAnswer: 1,
    explanation: 'El deep learning es un subconjunto del machine learning que utiliza redes neuronales artificiales con múltiples capas (profundas) para aprender representaciones jerárquicas de los datos.'
  },
  {
    id: 7,
    text: '¿Qué es el aprendizaje supervisado?',
    options: [
      'Aprendizaje que requiere un supervisor humano en todo momento',
      'Aprendizaje donde el modelo se entrena con datos etiquetados',
      'Aprendizaje donde la máquina supervisa su propio progreso',
      'Aprendizaje que solo ocurre bajo supervisión en tiempo real'
    ],
    correctAnswer: 1,
    explanation: 'El aprendizaje supervisado es un tipo de machine learning donde el modelo se entrena con datos etiquetados, es decir, ejemplos donde conocemos la respuesta correcta.'
  },
  {
    id: 8,
    text: '¿Qué es un conjunto de datos de entrenamiento?',
    options: [
      'Datos usados para entrenar atletas',
      'Datos utilizados para entrenar un modelo de machine learning',
      'Un conjunto de ejercicios de programación',
      'Una base de datos de entrenadores personales'
    ],
    correctAnswer: 1,
    explanation: 'Un conjunto de datos de entrenamiento es una colección de ejemplos que se utilizan para entrenar un modelo de machine learning, permitiéndole aprender patrones y relaciones en los datos.'
  }
];

enum QuizState {
  NOT_STARTED,
  IN_PROGRESS,
  COMPLETED
}

const PASSING_SCORE = 80; // Se requiere el 80% para aprobar

const AssessmentPage: React.FC = () => {
  const [quizState, setQuizState] = useState<QuizState>(QuizState.NOT_STARTED);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>(Array(questions.length).fill(-1));
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState(0);

  const handleStartQuiz = () => {
    setQuizState(QuizState.IN_PROGRESS);
    setCurrentQuestion(0);
    setSelectedAnswers(Array(questions.length).fill(-1));
    setShowFeedback(false);
    setScore(0);
  };

  const handleAnswerSelect = (optionIndex: number) => {
    if (showFeedback) return;

    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[currentQuestion] = optionIndex;
    setSelectedAnswers(newSelectedAnswers);
  };

  const handleCheckAnswer = () => {
    setShowFeedback(true);
    
    if (selectedAnswers[currentQuestion] === questions[currentQuestion].correctAnswer) {
      setScore(prev => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    setShowFeedback(false);
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setQuizState(QuizState.COMPLETED);
    }
  };

  const handleRestartQuiz = () => {
    handleStartQuiz();
  };

  const calculatePercentageScore = () => {
    return Math.round((score / questions.length) * 100);
  };

  const hasPassed = () => {
    return calculatePercentageScore() >= PASSING_SCORE;
  };

  const renderProgressBar = () => {
    return (
      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-6">
        <div 
          className="bg-primary-600 h-2.5 rounded-full transition-all duration-300" 
          style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
        ></div>
      </div>
    );
  };

  const isAnswerSelected = selectedAnswers[currentQuestion] !== -1;
  const isCorrectAnswer = selectedAnswers[currentQuestion] === questions[currentQuestion]?.correctAnswer;
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
    
  return (
    <div className="pt-8">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-[#F9FAFB] via-gray to-gray-300">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex flex-col items-center">
                <PiExam size={42} className="text-primary-600 mb-2 transition animate-bounce" />
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Tests de conocimientos</h1>
              </div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Pon a prueba lo que has aprendido sobre inteligencia artificial con nuestras evaluaciones interactivas.
              </motion.p>
          </div>
        </div>
      </section>

      {/* Quiz Section */}
      <section className="section bg-gradient-to-t from-[#F9FAFB] via-gray to-gray-300">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            {quizState === QuizState.NOT_STARTED && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-xl shadow-md overflow-hidden"
              >
                <div className="p-8">
                  <div className="text-center mb-8">
                    <Award size={48} className="mx-auto mb-4 text-primary-600" />
                    <h2 className="text-2xl font-bold mb-4">Evaluación de conceptos básicos de IA</h2>
                    <p className="text-gray-700">
                      Esta evaluación contiene {questions.length} preguntas sobre los conceptos fundamentales
                      de la inteligencia artificial que hemos cubierto en nuestras lecciones.
                    </p>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-3xl mb-8">
                    <h3 className="font-semibold text-lg mb-3">Antes de comenzar:</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-primary-600 mr-2">•</span>
                        La evaluación dura aproximadamente 10-15 minutos.
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary-600 mr-2">•</span>
                        Cada pregunta tiene una única respuesta correcta.
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary-600 mr-2">•</span>
                        No podrás volver a preguntas anteriores.
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary-600 mr-2">•</span>
                        Necesitas un 80% de respuestas correctas para aprobar.
                      </li>
                    </ul>
                  </div>

                  <button onClick={handleStartQuiz} className="btn-primary w-full">
                    Comenzar evaluación
                  </button>
                </div>
              </motion.div>
            )}

            {quizState === QuizState.IN_PROGRESS && (
              <motion.div
                key={currentQuestion}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-xl shadow-md overflow-hidden"
              >
                <div className="p-8">
                  {renderProgressBar()}
                  
                  <div className="flex justify-between items-center text-sm text-gray-600 mb-8">
                    <span>Pregunta {currentQuestion + 1} de {questions.length}</span>
                    <span>{Math.round(((currentQuestion + 1) / questions.length) * 100)}% completado</span>
                  </div>

                  <h2 className="text-2xl font-bold mb-6">{questions[currentQuestion].text}</h2>

                  <div className="space-y-3 mb-8">
                    {questions[currentQuestion].options.map((option, index) => (
                      <button
                        key={index}
                        onClick={() => handleAnswerSelect(index)}
                        className={`w-full text-left p-4 rounded-3xl border transition-colors ${
                          selectedAnswers[currentQuestion] === index
                            ? showFeedback
                              ? isCorrectAnswer
                                ? 'bg-green-100 border-green-500 text-green-800'
                                : 'bg-red-100 border-red-500 text-red-800'
                              : 'bg-primary-100 border-primary-500 text-primary-800'
                            : 'border-gray-300 hover:bg-gray-50'
                        }`}
                        disabled={showFeedback}
                      >
                        <div className="flex items-start">
                          <div className={`w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-0.5 ${
                            selectedAnswers[currentQuestion] === index
                              ? showFeedback
                                ? isCorrectAnswer
                                  ? 'bg-green-500 text-white'
                                  : 'bg-red-500 text-white'
                                : 'bg-primary-500 text-white'
                              : 'bg-gray-200 text-gray-600'
                          }`}>
                            {showFeedback && selectedAnswers[currentQuestion] === index ? (
                              isCorrectAnswer ? <Check size={14} /> : <X size={14} />
                            ) : (
                              <span className="text-sm">{String.fromCharCode(65 + index)}</span>
                            )}
                          </div>
                          <span>{option}</span>
                        </div>
                      </button>
                    ))}
                  </div>

                  {showFeedback && (
                    <div className={`p-4 rounded-3xl mb-6 ${
                      isCorrectAnswer ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {isCorrectAnswer ? (
                        <div className="flex items-start">
                          <Check size={20} className="mr-2 mt-1" />
                          <div>
                            <p>¡Correcto! Bien hecho.</p>
                            <p className="mt-2 text-sm">{questions[currentQuestion].explanation}</p>
                          </div>
                        </div>
                      ) : (
                        <div className="flex items-start">
                          <X size={20} className="mr-2 mt-1" />
                          <div>
                            <p>Incorrecto. La respuesta correcta es:</p>
                            <p className="font-medium mt-1">
                              {questions[currentQuestion].options[questions[currentQuestion].correctAnswer]}
                            </p>
                            <p className="mt-2 text-sm">{questions[currentQuestion].explanation}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  <div className="flex justify-end">
                    {!showFeedback ? (
                      <button
                        onClick={handleCheckAnswer}
                        disabled={!isAnswerSelected}
                        className={`btn-primary ${
                          !isAnswerSelected ? 'opacity-50 cursor-not-allowed' : ''
                        }`}
                      >
                        Comprobar respuesta
                      </button>
                    ) : (
                      <button
                        onClick={handleNextQuestion}
                        className="btn-primary flex items-center"
                      >
                        {currentQuestion === questions.length - 1 ? 'Ver resultados' : 'Siguiente'}
                        <ChevronRight size={16} className="ml-1" />
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            )}

            {quizState === QuizState.COMPLETED && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-xl shadow-md overflow-hidden"
              >
                <div className="p-8">
                  <div className="text-center mb-8">
                    <Award size={64} className="mx-auto mb-4 text-primary-600" />
                    <h2 className="text-3xl font-bold mb-4">¡Evaluación completada!</h2>
                    <p className="text-gray-700 mb-6">
                      Has respondido correctamente {score} de {questions.length} preguntas.
                    </p>
                    
                    <div className="w-48 h-48 mx-auto relative mb-6">
                      <div className="w-full h-full rounded-full bg-gray-100"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-5xl font-bold text-primary-600">
                          {calculatePercentageScore()}%
                        </span>
                      </div>
                      <svg 
                        className="absolute inset-0 transform -rotate-90"
                        viewBox="0 0 100 100"
                      >
                        <circle
                          cx="50"
                          cy="50"
                          r="45"
                          fill="none"
                          stroke="#E2E8F0"
                          strokeWidth="10"
                        />
                        <circle
                          cx="50"
                          cy="50"
                          r="45"
                          fill="none"
                          stroke={hasPassed() ? "#3B82F6" : "#F97316"}
                          strokeWidth="10"
                          strokeDasharray={`${(score / questions.length) * 283} 283`}
                        />
                      </svg>
                    </div>
                    
                    <div className="mb-6">
                      {hasPassed() ? (
                        <div className="text-center">
                          <p className="text-xl font-medium text-primary-600 mb-2">
                            ¡Felicidades! Has superado la evaluación.
                          </p>
                          <p className="text-gray-600">
                            Has demostrado un excelente conocimiento de los conceptos básicos de IA.
                          </p>
                        </div>
                      ) : (
                        <div className="text-center">
                          <p className="text-xl font-medium text-orange-600 mb-2">
                            No has alcanzado la puntuación mínima requerida.
                          </p>
                          <p className="text-gray-600">
                            Necesitas un {PASSING_SCORE}% para aprobar. Repasa el material y vuelve a intentarlo.
                          </p>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="space-y-4 mb-8">
                    {questions.map((question, index) => (
                      <div
                        key={index}
                        className={`p-4 rounded-3xl border ${
                          selectedAnswers[index] === question.correctAnswer
                            ? 'border-green-200 bg-green-50'
                            : 'border-red-200 bg-red-50'
                        }`}
                      >
                        <div className="flex items-start">
                          <div className={`w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-0.5 ${
                            selectedAnswers[index] === question.correctAnswer
                              ? 'bg-green-500 text-white'
                              : 'bg-red-500 text-white'
                          }`}>
                            {selectedAnswers[index] === question.correctAnswer ? (
                              <Check size={14} />
                            ) : (
                              <X size={14} />
                            )}
                          </div>
                          <div>
                            <p className="font-medium mb-1">{question.text}</p>
                            <p className={`text-sm ${
                              selectedAnswers[index] === question.correctAnswer
                                ? 'text-green-800'
                                : 'text-red-800'
                            }`}>
                              {selectedAnswers[index] === question.correctAnswer ? (
                                <span>Respuesta correcta: {question.options[question.correctAnswer]}</span>
                              ) : (
                                <span>
                                  Tu respuesta: {selectedAnswers[index] >= 0 ? question.options[selectedAnswers[index]] : 'No respondida'}<br />
                                  Respuesta correcta: {question.options[question.correctAnswer]}
                                </span>
                              )}
                            </p>
                            <p className="mt-2 text-sm text-gray-700">{question.explanation}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <button
                      onClick={handleRestartQuiz}
                      className="btn-outline flex-1 flex items-center justify-center"
                    >
                      <RefreshCw size={16} className="mr-2" /> Intentar de nuevo
                    </button>
                    <a href="/" className="btn-primary flex-1 flex items-center justify-center">
                      Volver al inicio
                    </a>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Tips Section */}
      {quizState !== QuizState.COMPLETED && (
        <section className="section bg-gray-50">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="p-8">
                  <h3 className="text-xl font-semibold mb-4">Consejos para la evaluación</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <Check size={18} className="text-green-500 mr-2 mt-1" />
                      <span>Lee cada pregunta cuidadosamente antes de responder.</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={18} className="text-green-500 mr-2 mt-1" />
                      <span>Si no estás seguro de una respuesta, intenta eliminar las opciones que sabes que son incorrectas.</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={18} className="text-green-500 mr-2 mt-1" />
                      <span>No te apresures. Tómate tu tiempo para considerar cada opción.</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={18} className="text-green-500 mr-2 mt-1" />
                      <span>Utiliza el conocimiento que has adquirido en las secciones anteriores de este sitio.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default AssessmentPage;