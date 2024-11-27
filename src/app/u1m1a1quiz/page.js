'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const questions = [
  {
    question: "'Hello, world!' is a specialized program used specifically for Python",
    options: ["True", "False"],
    correct: "False"
  },
  {
    question: "How do you know if your code is correct and there are no errors?",
    options: ["Run the code", "Read the code", "Write the code", "View the code"],
    correct: "Run the code"
  },
  {    
    question: "Which version of Python does this course cover?",
    options: ["Python 2", "Python 3", "Python 4", "Python 5"],
    correct: "Python 3"
  },  
  {    
    question: "Which is a valid Python code comment?",
    options: [
      "# use comments to describe the function of code.",
      "comments make code easier to update.",
      "'comment comments can provide use instructions for other developers.",
      "/comment warnings can be placed in comments."
    ],
    correct: "# use comments to describe the function of code."
  }
];

export default function Quiz() {
  const [isQuizStarted, setIsQuizStarted] = useState(false); // State to track quiz start
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]); // Store selected answers for each question
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const [accessCode, setAccessCode] = useState(""); // State to store access code input
  const [isAccessCodeValid, setIsAccessCodeValid] = useState(true); // State to track access code validity
  const correctAccessCode = "ruby"; // Correct access code

  // Timer state
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes (300 seconds) for the whole quiz
  const [timerActive, setTimerActive] = useState(false);

  // Handle access code change
  const handleAccessCodeChange = (e) => {
    setAccessCode(e.target.value);
  };

  const handleAccessCodeSubmit = () => {
    if (accessCode === correctAccessCode) {
      setIsAccessCodeValid(true);
      setIsQuizStarted(true); // Show quiz screen once access code is correct
    } else {
      setIsAccessCodeValid(false); // Display error if the access code is wrong
    }
  };

  const handleAnswerSelection = (questionIndex, answer) => {
    if (quizFinished) return; // Prevent answering after quiz is finished
    const updatedAnswers = [...selectedAnswers];
    updatedAnswers[questionIndex] = answer;
    setSelectedAnswers(updatedAnswers);
  };

  const handleSubmitQuiz = () => {
    setQuizFinished(true); // Mark quiz as finished
    setTimerActive(false); // Stop the timer
  };

  // Timer logic
  useEffect(() => {
    if (timerActive && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1); // Decrease time by 1 every second
      }, 1000);

      // Clear the interval when timer reaches zero
      return () => clearInterval(timer);
    } else if (timeLeft === 0) {
      setQuizFinished(true); // Finish quiz when timer runs out
      setTimerActive(false); // Stop the timer
    }
  }, [timerActive, timeLeft]);

  // Start the timer when the quiz starts
  useEffect(() => {
    if (isQuizStarted) {
      setTimerActive(true); // Start the timer when the quiz starts
    }
  }, [isQuizStarted]);

  // Calculate the score
  useEffect(() => {
    if (quizFinished) {
      let scoreCount = 0;
      questions.forEach((question, index) => {
        if (selectedAnswers[index] === question.correct) {
          scoreCount++;
        }
      });
      setScore(scoreCount); // Set the final score
    }
  }, [quizFinished, selectedAnswers]);

  return (
    <div style={{ textAlign: 'center', padding: '20px', maxWidth: '600px', margin: 'auto' }}>
   <nav>
      <Link href="/" passHref>
        <a aria-current="page">Home</a>
      </Link>
      <Link href="/python" passHref>
        <a>Modules</a>
      </Link>
    </nav>

      {!isQuizStarted ? (
        // Access Code Page
        <div>
          <h1>Enter Access Code to Start Quiz</h1>
          <input
            type="text"
            value={accessCode}
            onChange={handleAccessCodeChange}
            placeholder="Enter Access Code"
            style={{
              padding: '10px',
              fontSize: '16px',
              marginBottom: '10px',
              width: '200px',
              textAlign: 'center',
            }}
          />
          <button
            onClick={handleAccessCodeSubmit}
            style={{
              padding: '10px 20px',
              fontSize: '16px',
              backgroundColor: '#4CAF50',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Submit
          </button>

          {!isAccessCodeValid && (
            <p style={{ color: 'red', marginTop: '10px' }}>
              Incorrect Access Code. Please try again.
            </p>
          )}
        </div>
      ) : (
        // Quiz Page
        <div>
          <h1>Unit 1 Module 1 Activity 1 Quiz</h1>

          {/* Timer display */}
          <div>
            <h2>Time Left: {Math.floor(timeLeft / 60)}:{timeLeft % 60 < 10 ? '0' : ''}{timeLeft % 60} minutes</h2>
          </div>

          {/* Questions and Options */}
          {!quizFinished ? (
            <div>
              {questions.map((question, index) => (
                <div key={index} style={{ marginBottom: '20px' }}>
                  <h2>{question.question}</h2>
                  <div>
                    {question.options.map((option, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleAnswerSelection(index, option)}
                        style={{
                          backgroundColor: selectedAnswers[index] === option ? 'lightblue' : '',
                          margin: '5px',
                          padding: '10px',
                          cursor: 'pointer',
                          border: '0px solid #ccc'
                        }}
                        disabled={quizFinished} // Disable options after quiz ends
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              ))}

              {/* Submit Button */}
              <div>
                <button
                  onClick={handleSubmitQuiz}
                  style={{
                    margin: '20px',
                    padding: '10px',
                    cursor: 'pointer',
                    border: '0px solid #ccc',
                    backgroundColor: '#4CAF50',
                    color: 'white',
                    borderRadius: '5px',
                  }}
                >
                  Submit
                </button>
              </div>
            </div>
          ) : (
            <div>
              <h2>Quiz Finished!</h2>
              <p>Your Score: {score} / {questions.length}</p>
              <p>{((score / questions.length) * 100).toFixed(2)}%</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
