// 중복실행 방지 변수
let exeBlock = false;
const Game = () => {
  if (exeBlock) return;
  exeBlock = true;

  let readyTime = 1;
  const alphabetBox = document.querySelectorAll(".js-alphabet");
  const boxCount = alphabetBox.length;
  const gameTxt = document.querySelector(".js-game-txt");
  gameTxt.innerHTML = `${readyTime}초 남았습니다.`;

  let alphabetCodeIndexArr = [];

  const gameStart = () => {
    let checking = [];
    let right = [];
    let prevValue;
    for (let d = 0; d < boxCount; d++) {
      const itemBox = alphabetBox[d];
      const itemAlphabet = alphabetCodeIndexArr[d];
      itemBox.innerHTML = "";
      itemBox.addEventListener("click", () => {
        if (
          checking.indexOf(d) != -1 ||
          checking.length > 1 ||
          right.indexOf(d) != -1
        ) {
          return;
        }

        console.log("실행", right);
        itemBox.innerHTML = String.fromCharCode(itemAlphabet);
        checking.push(d);

        if (prevValue) {
          if (prevValue[1] == itemAlphabet) {
            // console.log("정답");
            right.push(prevValue[2], d);
            checking = [];
            prevValue = null;
          } else {
            setTimeout(() => {
              itemBox.innerHTML = "";
              prevValue[0].innerHTML = "";
              prevValue = null;
              checking = [];
            }, 1000);
          }
        } else {
          prevValue = [itemBox, itemAlphabet, d];
        }
      });
    }
  };

  const gameSetting = () => {
    // 상자의 갯수만큼 알파벳코드를 생성(2개씩)
    for (let i = 0; i < boxCount; i++) {
      const item = alphabetBox[i];
      const alphabetCodeIndex = (i % (boxCount / 2)) + 65;
      alphabetCodeIndexArr.push(alphabetCodeIndex);
    }
    // 알파벳코드를 섞음.
    alphabetCodeIndexArr = shuffle(alphabetCodeIndexArr);
    // 알바벳코드를 상자에 넣음.
    for (let d = 0; d < boxCount; d++) {
      const itemBox = alphabetBox[d];
      const itemAlphabet = alphabetCodeIndexArr[d];
      itemBox.innerHTML = String.fromCharCode(itemAlphabet);
    }
    gameTxt.style.display = "none";
    setTimeout(() => {
      gameStart();
    }, 1000);
  };

  let readyInterval = setInterval(() => {
    readyTime--;
    gameTxt.innerHTML = `${readyTime}초 남았습니다.`;
  }, 1000);

  setTimeout(() => {
    clearInterval(readyInterval);
    gameTxt.innerHTML = "게임 START";
    setTimeout(() => {
      gameSetting();
    }, 1000);
  }, readyTime * 1000);
};

const shuffle = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    let changeIndex = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[changeIndex]] = [arr[changeIndex], arr[i]];
  }
  return arr;
};
