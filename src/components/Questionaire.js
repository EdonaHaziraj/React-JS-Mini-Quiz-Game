import React, { useEffect, useState } from "react";

const Questionaire = ({
  showAnswers,
  handleAnswer,
  handleNextQuestion,
  data: { question, correct_answer, incorrect_answers },
}) => {
  const [shuffledAnswers, setShuffledAnswers] = useState([]);

  useEffect(() => {
    setShuffledAnswers(
      [correct_answer, ...incorrect_answers].sort(() => Math.random() - 0.5)
    );
  }, [correct_answer, incorrect_answers]);

  return (
    <div className="flex flex-col">
      <div className="bg-white text-purple-800 p-10 rounded shadow-md">
        <h2
          className="text-2xl "
          dangerouslySetInnerHTML={{ __html: question }}
        />
      </div>

      <div className="grid grid-cols-2 gap-6 mt-6">
        {shuffledAnswers.map((answer) => {
          const textColor = showAnswers
            ? answer === correct_answer
              ? "text-green-500"
              : "text-red-500"
            : "text-purple-700";

          return (
            <button
              className={`bg-white ${textColor} p-4 font-semibold rounded shadow`}
              onClick={() => handleAnswer(answer)}
              dangerouslySetInnerHTML={{ __html: answer }}
            />
          );
        })}
      </div>

      {showAnswers && (
        <button
          onClick={handleNextQuestion}
          className={`bg-purple-700 text-white p-4 font-semibold rounded shadow mt-6`}
        >
          Next Question
        </button>
      )}
    </div>
  );
};

export default Questionaire;
