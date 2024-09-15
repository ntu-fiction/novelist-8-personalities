import React from "react";

const QuestionBlock = ({ question, jumpToBlock, showResult, animate }) => {
  const handleOptionClick = (option) => {
    if (option.targetBlockId && option.targetBlockId.startsWith("block")) {
      jumpToBlock(option.targetBlockId);
    } else {
      showResult(option.targetBlockId);
    }
  };

  return (
    <div
      id={question.id}
      className={`question-block ${animate ? "fade-in-up" : ""}`}
    >
      <p>{question.text}</p>
      <ul>
        {question.options.map((option, index) => (
          <li key={index}>
            <button className="btn" onClick={() => handleOptionClick(option)}>
              {option.text}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuestionBlock;
