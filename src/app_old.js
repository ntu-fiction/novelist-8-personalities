// 淡入上移動畫
function fadeInAndMoveUp(elementId) {
  const element = document.getElementById(elementId);
  element.style.display = "block";
  element.classList.add("fade-in-up");
}

// 主要程式邏輯：隱藏目前的區塊，顯示下一個區塊
function jumpToBlock(currentBlockId, targetBlockId) {
  const currentBlock = document.getElementById(currentBlockId);
  const targetBlock = document.getElementById(targetBlockId);

  currentBlock.style.display = "none";
  targetBlock.style.display = "block";
  fadeInAndMoveUp(targetBlockId);
}

function startQuiz() {
  jumpToBlock("introBlock", "block1");
}

function showResult(result) {
  const allBlocks = document.querySelectorAll(".question-block");
  allBlocks.forEach((block) => (block.style.display = "none"));

  const resultBlock = document.getElementById(result);
  resultBlock.style.display = "block";
  fadeInAndMoveUp(result);
}

function resetQuiz() {
  const allBlocks = document.querySelectorAll(".question-block");
  allBlocks.forEach((block) => (block.style.display = "none"));

  const firstBlock = document.getElementById("introBlock");
  firstBlock.style.display = "block";
  fadeInAndMoveUp("introBlock");
}

// 等待字型載入完成才顯示網頁內容
document.fonts.ready.then(function () {
  document.body.style.visibility = "visible";
  fadeInAndMoveUp("introBlock");
});
