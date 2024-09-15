import React, { useState, useEffect } from "react";
import Header from "./Header";
import QuestionBlock from "./QuestionBlock";
import ResultBlock from "./ResultBlock";
import Footer from "./Footer";
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

  // 定義函數
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

// 問題與選項
const questions = {
  blockIntro: {
    id: "blockIntro",
    text: "給任何想要了解自己創意潛力的你。透過輕鬆有趣的問題，測驗將幫助你發掘自己的思考模式、表達方式以及面對問題的態度。無論是否從事創作，這個測驗都能讓你更了解自己，發現潛藏的創意特質。想知道自己的小說家人格嗎？趕快來測一下！",
    options: [
      {
        text: "開始測驗",
        targetBlockId: "block1",
      },
    ],
  },
  block1: {
    id: "block1",
    text: "比起腦中的幻想，我更關注現實世界的人事物？",
    options: [
      {
        text: "是",
        targetBlockId: "block2",
      },
      {
        text: "否",
        targetBlockId: "block3",
      },
    ],
  },
  block2: {
    id: "block2",
    text: "面對難解的社會問題時，我通常會：",
    options: [
      {
        text: "太難解了，還是先關注自己吧",
        targetBlockId: "block5",
      },
      {
        text: "搜尋過去是否發生過類似問題",
        targetBlockId: "block5",
      },
      {
        text: "深入研究問題背後的問題",
        targetBlockId: "block4",
      },
    ],
  },
  block3: {
    id: "block3",
    text: "觀看作品時，我更關注：",
    options: [
      {
        text: "角色的內心",
        targetBlockId: "block8",
      },
      {
        text: "故事的情節",
        targetBlockId: "block4",
      },
    ],
  },
  block4: {
    id: "block4",
    text: "面對一個你無法理解的現象時，你通常會：",
    options: [
      {
        text: "試圖找出背後的原因",
        targetBlockId: "block9",
      },
      {
        text: "欣賞現象的神秘感",
        targetBlockId: "block8",
      },
      {
        text: "試圖回憶類似的事情，並進行比較",
        targetBlockId: "block5",
      },
    ],
  },
  block5: {
    id: "block5",
    text: "當我看到獨特的事件發生時，我習慣先：",
    options: [
      {
        text: "拿相機紀錄",
        targetBlockId: "block6",
      },
      {
        text: "放在心裡回味",
        targetBlockId: "block7",
      },
    ],
  },
  block6: {
    id: "block6",
    text: "如果你有時間旅行的能力，你會？",
    options: [
      {
        text: "回到過去，研究古老的風土人情",
        targetBlockId: "naturalist",
      },
      {
        text: "前往未來，探索科技的進步和人類的演變",
        targetBlockId: "prophet",
      },
    ],
  },
  block7: {
    id: "block7",
    text: "你如何面對過去的傷痛？",
    options: [
      {
        text: "反思這些傷痛的來源，並試圖從中找出意義",
        targetBlockId: "gravedigger",
      },
      {
        text: "深刻感受到傷痛，並用強烈的情感去表達",
        targetBlockId: "emo",
      },
    ],
  },
  block8: {
    id: "block8",
    text: "「如果時間可以停止在最美好的時刻就好了。」",
    options: [
      {
        text: "雖然如此，殘酷有時也是一種美",
        targetBlockId: "block11",
      },
      {
        text: "對",
        targetBlockId: "block10",
      },
    ],
  },
  block9: {
    id: "block9",
    text: "比起測驗結果，我更想知道這個測驗是怎麼設計的。",
    options: [
      {
        text: "是",
        targetBlockId: "magician",
      },
      {
        text: "否",
        targetBlockId: "philosopher",
      },
    ],
  },
  block10: {
    id: "block10",
    text: "我不是真的想停止時間。",
    options: [
      {
        text: "對",
        targetBlockId: "foreverYoung",
      },
      {
        text: "真的有點想停止",
        targetBlockId: "magician",
      },
    ],
  },
  block11: {
    id: "block11",
    text: "當我受作品感動時，常常是因為：",
    options: [
      {
        text: "與角色內心產生共鳴",
        targetBlockId: "block7",
      },
      {
        text: "感受到一種超越人類的美",
        targetBlockId: "shaman",
      },
    ],
  },
};

// 結果
const results = {
  naturalist: {
    id: "naturalist",
    image: "images/naturalist.jpeg",
    title: "博物學家",
    represent: "代表作家：吳明益、恩内斯托・薩巴托",
    description:
      "與其說書寫癖或收集癖，對你而言「描述事物」本身可能就能帶來快感，越多事物，越多快感。你追求一種十九世紀博物學家的琳瑯滿目，物理學家認為簡潔就是美，你認為繁複就是美。你喜愛維基百科，但更愛那些英文版維基百科也沒寫的東西。從一個條目連到另一個網頁時，如果有人問你文學是什麼？可能你會回答：關聯性。",
  },
  prophet: {
    id: "prophet",
    image: "images/prophet.jpeg",
    title: "預言家",
    represent: "代表作家：歐威爾、薩拉馬戈、赫胥黎",
    description:
      "未來不是對現在的預言，而是對現在的指涉。不過如果恰巧可以，你也不介意預測未來。哲學家的做法對你來說太生硬了：讀者是劇情的高敏患者，對未來卻標準寬鬆。未來是你的黑幕，你的道具盒，與魔術師的區別在於：你真的有想表達些什麼。",
  },
  gravedigger: {
    id: "gravedigger",
    image: "images/gravedigger.jpeg",
    title: "掘墓人",
    represent: "代表作家：普魯斯特、安妮・艾諾、石黑一雄",
    description:
      "朋友揪你看復仇者聯盟時你還在關心蝙蝠俠的童年創傷。小時候最喜歡聽長輩講家族故事、對童年時期的事情印象深刻，忘不了前任的事。你如果有寫日記，必定十分精彩，但並非內容，而是你記憶事情的方式，充滿魔力。",
  },
  emo: {
    id: "emo",
    image: "images/emo.jpeg",
    title: "依某系",
    represent: "代表作家：太宰治、邱妙津",
    description:
      "別人在經營類型、發掘內容，就你在 E。你的 EMO 自成一格，E 出新意。世界在你心底繁衍出另個世界，每種情緒、每種感受都有新的名字，像一株新的花草。別人說你憂鬱，你卻說心是宇宙的倒影。",
  },
  magician: {
    id: "magician",
    image: "images/magician.jpeg",
    title: "魔術師",
    represent: "代表作家：波赫士、卡爾維諾、姜峯楠",
    description:
      "簡單來說，你喜歡有趣的東西。你喜歡魔術，也喜歡魔術道具，不過更讓你著迷的是魔術手法。你不會停留在有趣的表面，而是不停深入，直至找到有趣的原因與核心。你喜歡感動，但不一定追求感動；喜歡道理，但不愛講道理。一切都是道具，做做效果。著迷對你就是最大的稱讚。",
  },
  philosopher: {
    id: "philosopher",
    image: "images/philosopher.jpeg",
    title: "哲學家",
    represent: "代表作家：米蘭・昆德拉、勒瑰恩",
    description:
      "對真正的哲學家來說，你只是個寫小說的；對其他小說家而言，你又太愛講道理了。不，你才不熱愛講道理，更不熱愛爭辯——你展示它們，藉由世界與故事。",
  },
  foreverYoung: {
    id: "foreverYoung",
    image: "images/foreverYoung.jpeg",
    title: "永恆少年",
    represent: "代表作家：村上春樹、歐森・史考特・卡德",
    description:
      "你喜歡新海誠的電影，或許也曾幻想遠在海王星的女朋友。宇宙對你從不是需要考進NASA才能接觸的存在，清潔阿姨可能是世界的守護者，貓也可能是外星人。宇宙是個巨大的舞台，日常與世界實現對接，如果末日是問題，愛情就是解答。",
  },
  shaman: {
    id: "shaman",
    image: "images/shaman.jpeg",
    title: "薩滿",
    represent: "代表作家：卡夫卡、馬奎斯、納博科夫",
    description:
      "對於靈感從何而來這種問題，你從來不知道怎麼回答。但靈感對你又是最親近的，最貼切的動詞是「獲得」，如天上落下的羽毛，不是用頭腦，而是用手，用身體去接。",
  },
};

export default App;
