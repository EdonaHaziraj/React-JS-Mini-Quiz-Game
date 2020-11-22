import React, { useState, useEffect } from "react";
import { Questionaire } from "./components";

const API_URL =
  "https://opentdb.com/api.php?amount=50&category=12&difficulty=easy&type=multiple";

function Home() {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [gameEnded, setGameEnded] = useState(false);
  const [showAnswers, setShowAnswers] = useState(false);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setQuestions(data.results);
      });
  }, []);

  const handleAnswer = (answer) => {
    if (!showAnswers) {
      if (answer === questions[currentIndex].correct_answer) {
        setScore(score + 1);
      }
    }
    setShowAnswers(true);
  };

  const handleNextQuestion = () => {
    setCurrentIndex(currentIndex + 1);
    setShowAnswers(false);
  };

  return questions.length > 0 ? (
    <div className="container">
      {currentIndex >= questions.length ? (
        <h1 className="text-3xl text-white font-bold">
          Game ended. Your score is: {score}
        </h1>
      ) : (
        <Questionaire
          data={questions[currentIndex]}
          showAnswers={showAnswers}
          handleAnswer={handleAnswer}
          handleNextQuestion={handleNextQuestion}
        />
      )}
    </div>
  ) : (
    <h1 className="text-2xl">Loading...</h1>
  );
}
export default Home;
