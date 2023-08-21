import questionsAndAnswers from "./QuestionsAndAnswers";
import { useState } from "react";
import "./App.css";

function App() {
  const getRandomChoice = () => Math.floor(Math.random() * questionsAndAnswers.length);

  let initialChoice = getRandomChoice();
  const [showAnswer, setShowAnswer] = useState(false);
  const [question, setQuestion] = useState(questionsAndAnswers[initialChoice].question);
  const [answer, setAnswer] = useState(questionsAndAnswers[initialChoice].answer);

  const handleClick = (event) => {
    if (event.target.value === "show-answer") {
      setShowAnswer(true);
    } else if (event.target.value === "next-question") {
      let newChoice = getRandomChoice();
      setQuestion(questionsAndAnswers[newChoice].question);
      setAnswer(questionsAndAnswers[newChoice].answer);
      setShowAnswer(false);
    }
  };

  return (
    <div>
      <p>{question}</p>
      {showAnswer && <p>{answer}</p>} 
      <button onClick={handleClick} value="show-answer">
        Show Answer
      </button>
      <button onClick={handleClick} value="next-question">
        Next Question
      </button>
    </div>
  );
}

export default App;
