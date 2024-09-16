import React from "react";

const ResultBlock = ({ result, resetQuiz, animate }) => {
  const handleResetClick = (event) => {
    resetQuiz();

    // 移除按鈕焦點
    const button = event.target;
    button.blur();
  };

  return (
    <div
      id={result.id}
      className={`question-block ${animate ? "fade-in-up" : ""}`}
    >
      <img src={result.image} alt={result.title} />

      <h5 className="result-title">測驗結果</h5>
      <p className="result-text">{result.title}</p>
      <p className="represent">{result.represent}</p>
      <p>{result.description}</p>
      <button
        className="btn"
        onClick={(event) => {
          setTimeout(() => {
            handleResetClick(event);
          }, 100);
        }}
      >
        再測一次
      </button>
    </div>
  );
};

export default ResultBlock;
