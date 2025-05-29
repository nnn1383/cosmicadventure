import React, { useState } from "react";
import HomePage from "./components/HomePage";
import "./index.css";

function App() {
  const [page, setPage] = useState("start");

  const startQuiz = () => setPage("quiz");

  return (
    <div className="quiz-container">
      {page === "start" && <HomePage onStart={startQuiz} />}
      {page === "quiz" && (
        <div className="quiz-page">
          <h2>This is the Quiz Page! There will be updates coming to this page soon.</h2>
        </div>
      )}
    </div>
  );
}

export default App;
