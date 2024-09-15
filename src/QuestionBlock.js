import React from "react";

const QuestionBlock = ({ question, jumpToBlock, showResult, animate }) => {
  const handleOptionClick = (option, event) => {
    if (option.targetBlockId && option.targetBlockId.startsWith("block")) {
      jumpToBlock(option.targetBlockId);
    } else {
      showResult(option.targetBlockId);
    }

    // 移除按鈕焦點
    const button = event.target;
    button.blur();
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
            <button
              className="btn"
              onClick={(event) => {
                setTimeout(() => handleOptionClick(option, event), 100);
              }}
            >
              {option.text}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuestionBlock;
