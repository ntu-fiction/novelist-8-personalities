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

export default questions;
