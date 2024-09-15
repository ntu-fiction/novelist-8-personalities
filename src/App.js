import React, { useState, useEffect } from "react";
import Header from "./Header";
import QuestionBlock from "./QuestionBlock";
import ResultBlock from "./ResultBlock";
import Footer from "./Footer";
import questions from "./data/questions";
import results from "./data/results";
import "./styles/App.css";

function App() {
  const [currentBlock, setCurrentBlock] = useState("blockIntro");
  const [result, setResult] = useState(null);
  const [animate, setAnimate] = useState(false);

  // 頁面載入時設置動畫
  useEffect(() => {
    setAnimate(true);
  }, []);

  // 動畫結束後重置動畫狀態
  useEffect(() => {
    if (animate) {
      const timer = setTimeout(() => setAnimate(false), 650); // 動畫持續時間
      return () => clearTimeout(timer);
    }
  }, [animate]);

  const jumpToBlock = (targetBlockId) => {
    setAnimate(true);
    setCurrentBlock(targetBlockId);
  };

  const showResult = (resultId) => {
    setAnimate(true);
    setResult(results[resultId]);
    setCurrentBlock(resultId);
  };

  const resetQuiz = () => {
    setAnimate(true);
    setCurrentBlock("blockIntro");
    setResult(null);
  };

  // 網頁主要內容
  return (
    <div className="container">
      <Header />

      {currentBlock && currentBlock.startsWith("block") && (
        <QuestionBlock
          question={questions[currentBlock]}
          jumpToBlock={jumpToBlock}
          showResult={showResult}
          animate={animate}
        />
      )}

      {result && (
        <ResultBlock result={result} resetQuiz={resetQuiz} animate={animate} />
      )}

      <Footer />
    </div>
  );
}

export default App;
