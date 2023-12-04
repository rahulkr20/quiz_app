import React, { useState } from 'react';

const questions = [
  {
    question: 'Who is the prime minister of INDIA?',
    options: ['Narendra Modi', 'Jawaharlal Nehru', 'Manmohan Singh', 'APJ Abdul kalam'],
    correctAnswer: 'Narendra Modi',
  },
  {
    question: 'If you freeze water, what do you get?',
    options: ['Water Vapour', 'Ice', 'Fire', 'None of these'],
    correctAnswer: 'Ice',
  },
  {
    question: ' How many planets are in our solar system?',
    options: ['Nine', 'Five', 'Six', 'Eight'],
    correctAnswer: 'Eight',
  },
  

  // Add more questions and options
];

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswerClick = (selectedOption) => {
    if (selectedOption === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div>
    {showResult ? (
      <div className="text-center">
        <h2 className="text-2xl font-bold">Quiz Results</h2>
        <p className="text-lg mt-4">Your score: {score} out of {questions.length}</p>
      </div>
    ) : (
      <div>
        <h2 className="text-2xl font-bold">{questions[currentQuestion].question}</h2>
        <div className="mt-4">
          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              className="bg-gray-200 hover:bg-gray-300 rounded p-2 m-2"
              onClick={() => handleAnswerClick(option)}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    )}
  </div>
);
}

export default Quiz;