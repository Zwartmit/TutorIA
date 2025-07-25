import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Award, Check, X, RefreshCw, ChevronRight, Brain, BrainCircuit } from 'lucide-react';
import { PiExam } from 'react-icons/pi';
import Swal from 'sweetalert2';

interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

type TestType = 'basic' | 'advanced';

const basicQuestions: Question[] = [
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
    text: '¿Cuál de las siguientes NO es un ejemplo de IA estrecha?',
    options: [
      'Un asistente virtual como Siri o Alexa',
      'Un sistema de recomendación de películas en Netflix',
      'Una IA que puede resolver cualquier problema intelectual humano',
      'Un programa de ajedrez que puede vencer a campeones mundiales'
    ],
    correctAnswer: 2,
    explanation: 'Una IA que puede resolver cualquier problema intelectual humano sería un ejemplo de IA fuerte o general (AGI), que aún no existe. Los otros ejemplos son IA estrecha o especializada, diseñada para tareas específicas.'
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
  },
  {
    id: 9,
    text: '¿Qué es la visión por computadora?',
    options: [
      'Ver películas en la computadora',
      'Área de la IA que permite a las máquinas interpretar imágenes y videos',
      'Un monitor de alta resolución',
      'Un programa para editar fotos'
    ],
    correctAnswer: 1,
    explanation: 'La visión por computadora es un campo de la IA que permite a las máquinas interpretar y comprender el contenido visual del mundo que las rodea.'
  },
  {
    id: 10,
    text: '¿Qué es un algoritmo en el contexto de la IA?',
    options: [
      'Un programa de computadora',
      'Un conjunto de reglas o instrucciones para resolver un problema',
      'Un tipo de base de datos',
      'Un lenguaje de programación'
    ],
    correctAnswer: 1,
    explanation: 'En IA, un algoritmo es un conjunto de reglas o instrucciones que los sistemas siguen para resolver un problema o realizar una tarea específica.'
  }
];

const advancedQuestions: Question[] = [
  {
    id: 1,
    text: '¿Qué es el aprendizaje por refuerzo?',
    options: [
      'Un tipo de aprendizaje donde el modelo aprende a base de recompensas y castigos',
      'Un método para reforzar la seguridad en sistemas de IA',
      'Una técnica para mejorar la velocidad de entrenamiento de modelos',
      'Un enfoque para validar modelos de machine learning'
    ],
    correctAnswer: 0,
    explanation: 'El aprendizaje por refuerzo es un tipo de aprendizaje automático donde un agente aprende a tomar decisiones mediante la interacción con un entorno, recibiendo recompensas o castigos por sus acciones.'
  },
  {
    id: 2,
    text: '¿Qué es el sesgo algorítmico?',
    options: [
      'Un error de programación en los algoritmos',
      'La tendencia de un sistema a tomar decisiones injustas debido a datos de entrenamiento sesgados',
      'Un tipo de algoritmo más rápido que otros',
      'Un método para reducir el sobreajuste en modelos de IA'
    ],
    correctAnswer: 1,
    explanation: 'El sesgo algorítmico ocurre cuando un sistema de IA toma decisiones injustas o discriminatorias debido a datos de entrenamiento que contienen prejuicios humanos.'
  },
  {
    id: 3,
    text: '¿Qué es el aprendizaje no supervisado?',
    options: [
      'Cuando el modelo no tiene supervisión humana',
      'Cuando el modelo encuentra patrones en datos sin etiquetar',
      'Cuando el modelo aprende sin usar datos',
      'Cuando el modelo se entrena en tiempo real'
    ],
    correctAnswer: 1,
    explanation: 'El aprendizaje no supervisado es un tipo de machine learning donde el modelo encuentra patrones y relaciones en datos sin etiquetar, sin supervisión explícita.'
  },
  {
    id: 4,
    text: '¿Qué es el procesamiento de lenguaje natural (NLP) en tiempo real?',
    options: [
      'Un sistema que traduce idiomas instantáneamente',
      'La capacidad de procesar y generar lenguaje humano con mínima latencia',
      'Un tipo de chatbot avanzado',
      'Un modelo de lenguaje con actualizaciones en tiempo real'
    ],
    correctAnswer: 1,
    explanation: 'El NLP en tiempo real se refiere a sistemas que pueden procesar y generar lenguaje humano con una latencia mínima, permitiendo interacciones fluidas y naturales.'
  },
  {
    id: 5,
    text: '¿Qué es el aprendizaje por transferencia en IA?',
    options: [
      'Transferir archivos entre modelos',
      'Usar conocimientos aprendidos en una tarea para mejorar el rendimiento en otra',
      'Cambiar de un modelo a otro durante el entrenamiento',
      'Un método de respaldo de modelos'
    ],
    correctAnswer: 1,
    explanation: 'El aprendizaje por transferencia es una técnica donde un modelo desarrollado para una tarea se reutiliza como punto de partida para un modelo en una segunda tarea relacionada.'
  },
  {
    id: 6,
    text: '¿Qué es el aprendizaje federado?',
    options: [
      'Un método para entrenar modelos en múltiples dispositivos descentralizados',
      'Un tipo de red neuronal federal',
      'Un algoritmo de cifrado de datos',
      'Un protocolo de comunicación entre modelos de IA'
    ],
    correctAnswer: 0,
    explanation: 'El aprendizaje federado es un enfoque de machine learning que permite entrenar modelos en múltiples dispositivos o servidores descentralizados que contienen datos locales, sin necesidad de intercambiar los datos.'
  },
  {
    id: 7,
    text: '¿Qué es la explicabilidad en IA?',
    options: [
      'La capacidad de un modelo para explicar sus decisiones en términos comprensibles',
      'Un documento técnico sobre un modelo de IA',
      'Un método para depurar código de IA',
      'La documentación de un sistema de IA'
    ],
    correctAnswer: 0,
    explanation: 'La explicabilidad en IA se refiere a la capacidad de un sistema de IA para explicar sus decisiones, predicciones o recomendaciones de manera que sean comprensibles para los seres humanos.'
  },
  {
    id: 8,
    text: '¿Qué es la generación de lenguaje natural?',
    options: [
      'Un traductor automático',
      'La capacidad de un sistema para producir texto que parezca escrito por humanos',
      'Un corrector gramatical avanzado',
      'Un sistema de reconocimiento de voz'
    ],
    correctAnswer: 1,
    explanation: 'La generación de lenguaje natural es una rama del procesamiento del lenguaje natural que se centra en producir texto que sea indistinguible del escrito por humanos.'
  },
  {
    id: 9,
    text: '¿Qué es el aprendizaje multimodal?',
    options: [
      'Usar múltiples métodos de enseñanza',
      'Entrenar modelos que pueden procesar y relacionar información de múltiples fuentes (texto, imagen, audio, etc.)',
      'Un modelo que funciona en varios idiomas',
      'Un sistema que combina diferentes algoritmos de aprendizaje'
    ],
    correctAnswer: 1,
    explanation: 'El aprendizaje multimodal implica entrenar modelos que pueden procesar y relacionar información de múltiples modalidades, como texto, imágenes, audio y video, para realizar tareas más complejas.'
  },
  {
    id: 10,
    text: '¿Qué es el aprendizaje por pocos ejemplos (few-shot learning)?',
    options: [
      'Aprender con un conjunto de datos pequeño',
      'Un modelo que puede aprender nuevas tareas con muy pocos ejemplos',
      'Un método para filtrar datos de entrenamiento',
      'Una técnica de compresión de modelos'
    ],
    correctAnswer: 1,
    explanation: 'El aprendizaje por pocos ejemplos es una técnica de machine learning donde un modelo puede aprender a realizar nuevas tareas con muy pocos ejemplos de entrenamiento, imitando la capacidad humana de aprendizaje rápido.'
  }
];

enum QuizState {
  NOT_STARTED,
  IN_PROGRESS,
  COMPLETED
}

const PASSING_SCORE = 75; // Se requiere el 75% para aprobar

const AssessmentPage: React.FC = () => {
  const [testType, setTestType] = useState<TestType | null>(null);
  const [quizState, setQuizState] = useState<QuizState>(QuizState.NOT_STARTED);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState(0);
  
  const questions = testType === 'basic' ? basicQuestions : advancedQuestions;

  const handleStartQuiz = (type: TestType) => {
    setTestType(type);
    setQuizState(QuizState.IN_PROGRESS);
    setCurrentQuestion(0);
    setSelectedAnswers(Array(type === 'basic' ? basicQuestions.length : advancedQuestions.length).fill(-1));
    setShowFeedback(false);
    setScore(0);
  };
  
  const handleSelectTest = (type: TestType) => {
    setTestType(type);
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

  const handleCancelQuiz = async () => {
    const result = await Swal.fire({
      text: '¿Deseas cancelar el test? Perderás todo tu progreso',
      showCancelButton: true,
      confirmButtonText: 'Sí, cancelar',
      cancelButtonText: 'No, continuar',
      customClass: {
        confirmButton: 'btn-red text-sm',
        cancelButton: 'btn-primary text-sm',
        popup: 'rounded-3xl p-6 bg-[#EFF3F8]',
      }
    });

    if (result.isConfirmed) {
      setQuizState(QuizState.NOT_STARTED);
      setCurrentQuestion(0);
      setSelectedAnswers(Array(questions.length).fill(-1));
      setShowFeedback(false);
      setScore(0);
    }
  };

  const handleRestartQuiz = () => {
    if (testType) {
      handleStartQuiz(testType);
    }
  };

  const calculatePercentageScore = () => {
    const totalQuestions = testType === 'basic' ? basicQuestions.length : advancedQuestions.length;
    return Math.round((score / totalQuestions) * 100);
  };

  const hasPassed = () => {
    return calculatePercentageScore() >= PASSING_SCORE;
  };

  const renderProgressBar = () => {
    const totalQuestions = testType === 'basic' ? basicQuestions.length : advancedQuestions.length;
    return (
      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-6">
        <div 
          className="bg-primary-600 h-2.5 rounded-full transition-all duration-300" 
          style={{ width: `${((currentQuestion + 1) / totalQuestions) * 100}%` }}
        ></div>
      </div>
    );
  };

  const isAnswerSelected = selectedAnswers[currentQuestion] !== undefined && selectedAnswers[currentQuestion] !== -1;
  const isCorrectAnswer = selectedAnswers[currentQuestion] === questions[currentQuestion]?.correctAnswer;
  
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  }, []);
    
  return (
    <div className="pt-9 md:pt-2 bg-gradient-to-b from-[#141414] to-[#050505]">
      {/* Hero Section */}
      <section className="pt-16 md:pt-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex flex-col items-center">
                <PiExam size={42} className="text-primary-600 mb-2" />
                <h1 className="text-3xl md:text-4xl font-bold text-[#EFF3F8] mb-6">Tests de conocimientos</h1>
              </div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-[#EFF3F8]"
              >
                Pon a prueba lo que has aprendido sobre la{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600 animated-gradient font-bold">
                    inteligencia artificial
                  </span>
              </motion.p>
          </div>
        </div>
      </section>

      {/* Sección de evaluación */}
      <section className="section pt-8 pb-14">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            {quizState === QuizState.NOT_STARTED && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="bg-[#EFF3F8] rounded-3xl shadow-md overflow-hidden"
              >
                <div className="p-8">
                  <div className="text-center mb-8">
                    <Award size={48} className="mx-auto mb-4 text-primary-600" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div 
                      onClick={() => handleSelectTest('basic')}
                      className={`p-6 rounded-3xl border-2 cursor-pointer transition-all ${testType === 'basic' ? 'border-primary-600 bg-primary-50' : 'border-gray-200 hover:border-primary-400'}`}
                    >
                      <div className="flex items-center mb-4 justify-center">
                        <div className={`p-3 rounded-full ${testType === 'basic' ? 'bg-primary-100 text-primary-600' : 'bg-gray-100 text-gray-600'} mr-3`}>
                          <Brain size={24} />
                        </div>
                        <h3 className="text-xl font-semibold">Conceptos básicos</h3>
                      </div>
                      <p className="text-gray-700 mb-4 text-center">Ideal para principiantes que están comenzando a aprender sobre IA</p>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li className="flex items-start">
                          <span className="text-primary-600 mr-2">•</span>
                          {basicQuestions.length} preguntas
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary-600 mr-2">•</span>
                          Nivel: Principiante
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary-600 mr-2">•</span>
                          Conceptos fundamentales
                        </li>
                      </ul>
                    </div>
                    
                    <div 
                      onClick={() => handleSelectTest('advanced')}
                      className={`p-6 rounded-3xl border-2 cursor-pointer transition-all ${testType === 'advanced' ? 'border-secondary-600 bg-secondary-50' : 'border-gray-200 hover:border-secondary-400'}`}
                    >
                      <div className="flex items-center mb-4 justify-center">
                        <div className={`p-3 rounded-full ${testType === 'advanced' ? 'bg-secondary-100 text-secondary-600' : 'bg-gray-100 text-gray-600'} mr-3`}>
                          <BrainCircuit size={24} />
                        </div>
                        <h3 className="text-xl font-semibold">Conceptos avanzados</h3>
                      </div>
                      <p className="text-gray-700 mb-4 text-center">Para aquellos con conocimientos previos que buscan profundizar en IA</p>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li className="flex items-start">
                          <span className="text-secondary-600 mr-2">•</span>
                          {advancedQuestions.length} preguntas
                        </li>
                        <li className="flex items-start">
                          <span className="text-secondary-600 mr-2">•</span>
                          Nivel: Avanzado
                        </li>
                        <li className="flex items-start">
                          <span className="text-secondary-600 mr-2">•</span>
                          Temas especializados
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-[#EFF3F8] p-6 rounded-3xl mb-8">
                    <h3 className="font-semibold text-lg mb-3">Antes de comenzar:</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-primary-600 mr-2">•</span>
                        El test dura aproximadamente 10-15 minutos.
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
                        Necesitas un 75% de respuestas correctas para aprobar.
                      </li>
                    </ul>
                  </div>

                  <button 
                    onClick={() => testType && handleStartQuiz(testType)} 
                    disabled={!testType}
                    className={`btn-primary w-full ${!testType ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    {testType === 'basic' ? 'Comenzar test de Conceptos básicos' : 
                     testType === 'advanced' ? 'Comenzar test de Conceptos avanzados' : 
                     'Selecciona un tipo de test'}
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
                className="bg-[#EFF3F8] rounded-3xl shadow-md overflow-hidden"
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
                            : 'border-gray-300 hover:bg-[#EFF3F8]'
                        }`}
                        disabled={showFeedback}
                      >
                        <div className="flex items-start">
                          <div className={`w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-0.5 ${
                            selectedAnswers[currentQuestion] === index
                              ? showFeedback
                                ? isCorrectAnswer
                                  ? 'bg-green-500 text-[#EFF3F8]'
                                  : 'bg-red-500 text-[#EFF3F8]'
                                : 'bg-primary-500 text-[#EFF3F8]'
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

                  <div className="flex justify-between">
                    <button
                      onClick={handleCancelQuiz}
                      className="px-4 py-2 text-sm font-medium text-red-600 hover:text-red-800 transition-colors"
                    >
                      Cancelar
                    </button>
                    <div className="flex space-x-3">
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
                </div>
              </motion.div>
            )}

            {quizState === QuizState.COMPLETED && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="bg-[#EFF3F8] rounded-3xl shadow-md overflow-hidden mb-10"
              >
                <div className="p-8">
                  <div className="text-center mb-8">
                    <Award size={64} className="mx-auto mb-4 text-primary-600" />
                    <h2 className="text-3xl font-bold mb-4">¡Test completado!</h2>
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
                            ¡Felicidades! Has superado el test.
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
                              ? 'bg-green-500 text-[#EFF3F8]'
                              : 'bg-red-500 text-[#EFF3F8]'
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

                  <div className="flex flex-col sm:flex-row gap-8">
                    <button
                      onClick={handleRestartQuiz}
                      className="btn-outline flex-1 flex items-center justify-center"
                    >
                      <RefreshCw size={16} className="mr-2" /> Intentar de nuevo
                    </button>
                    <a href="/tests" className="btn-primary flex-1 flex items-center justify-center">
                      Volver a tests
                    </a>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AssessmentPage;