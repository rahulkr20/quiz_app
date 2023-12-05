import React, { useState } from 'react';

const questions = [
  {
    question: 'Which of the following is a primary function of an Intrusion Detection System (IDS)?',
    options: ['Data encryption', 'Network segmentation','Malware removal','Monitoring and analyzing network traffic'],
    correctAnswer: 'Monitoring and analyzing network traffic',
  },
  {
    question: 'Which type of Intrusion Detection System (IDS) operates by comparing current system activity to a predefined profile of normal behavior?',
    options: ['Signature-based','Anomaly-based','Hybrid-based','Behavior-based'],
    correctAnswer: 'Anomaly-based',
  },
  {
    question: 'What does a Signature-based Intrusion Detection System (IDS) rely on for identifying malicious activities?',  
    options: ['Statistical analysis','User behavior',' Known patterns or signatures','Anomaly detection'],
    correctAnswer: 'Known patterns or signatures',
  },
  {
    question: 'Which of the following is a limitation of Anomaly-based Intrusion Detection Systems (IDS)?',
    options: ['High false positive rate','Slow response to new threats','Inability to detect known attacks',' Dependence on signature updates'],
    correctAnswer: 'High false positive rate',
  },
  {
    question: 'What is the role of a Network-based Intrusion Detection System (NIDS) in a cybersecurity infrastructure?',
    options: [' Protecting endpoints','Monitoring network traffic','Scanning for malware','Encrypting data'],
    correctAnswer: 'Monitoring network traffic',
  },
  {
    question: 'Which type of Intrusion Detection System (IDS) is known for its ability to detect previously unknown threats?',
    options: ['Signature-based','Anomaly-based','Heuristic-based','Behavior-based'],
    correctAnswer: 'Heuristic-based',
  },
  

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
