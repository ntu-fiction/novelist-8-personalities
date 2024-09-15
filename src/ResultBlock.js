import React from "react";

const ResultBlock = ({ result, resetQuiz, animate }) => {
  return (
    <div
      id={result.id}
      className={`question-block ${animate ? "fade-in-up" : ""}`}
    >
      <img src={result.image} alt={result.title} />
      <div className="card-body">
        <h5 className="card-title">測驗結果</h5>
        <p className="card-text">{result.title}</p>
        <p className="represent">{result.represent}</p>
        <p>{result.description}</p>
        <button className="btn" onClick={resetQuiz}>
          再測一次
        </button>
      </div>
    </div>
  );
};

export default ResultBlock;
