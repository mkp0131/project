// 1. 3개의 박스를 넣을 수 있는 박스를 생성(생성자 함수)
// 2. 한개의 움직이는 박스를 생성
// 2.1 한개의 움직이는 박스는 드레그시 움직이도록 설정
// 2.2 포지션 absolute로 움직이도록 설정
// 2.3 움직이는 좌표 = 페이지 기준에서 마우스 클릭한 곳의 좌표 - 박스기준에서의 마우스 클릭한 좌표 (박스를 클릭한곳 기준으로 움직이게 하기위해)

// 들어가야될 box 자리에 대한 정보를 가져옴.
const outlineBoxList = document.querySelectorAll(
  ".js-outline-box-list .outline-box"
);

const outlineBoxInfo = [];

for (let i = 0; i < outlineBoxList.length; i++) {
  const item = outlineBoxList[i].getBoundingClientRect();
  outlineBoxInfo.push({
    topStart: item.top,
    topEnd: item.top + item.height,
    leftStart: item.left,
    leftEnd: item.left + item.width,
  });
}

// 움직이는 박스 생성
function makeMoveBox(info) {
  let box = document.createElement("div");
  box.style.position = "absolute";
  box.style.left = info.left;
  box.style.top = info.top;
  box.style.width = info.width;
  box.style.height = info.height;
  box.style.background = info.background;
  box.style.border = "3px solid black";
  box.style.borderRadius = "4px";
  box.style.overflow = "hidden";
  box.innerHTML = info.name;
  document.body.appendChild(box);

  let movePositionX, movePositionY, gapX, gapY;

  const dragBoxHandler = () => {
    movePositionX = event.clientX - gapX;
    movePositionY = event.clientY - gapY;

    box.style.left = movePositionX + "px";
    box.style.top = movePositionY + "px";
    for (let i = 0; i < outlineBoxInfo.length; i++) {
      const item = outlineBoxInfo[i];
      if (
        item.topStart < movePositionY &&
        item.topEnd > movePositionY &&
        item.leftStart < movePositionX &&
        item.leftEnd > movePositionX
      ) {
        movePositionX = item.leftStart;
        movePositionY = item.topStart;
      }
    }
  };

  // 마우스를 클릭하면 이벤트 시작
  box.addEventListener("mousedown", function () {
    gapX = event.clientX - event.target.offsetLeft;
    gapY = event.clientY - event.target.offsetTop;
    box.addEventListener("mousemove", dragBoxHandler);
  });
  box.addEventListener("mouseup", () => {
    box.style.left = movePositionX + "px";
    box.style.top = movePositionY + "px";
    box.removeEventListener("mousemove", dragBoxHandler);
  });
}

makeMoveBox({
  name: "mkp",
  left: "300px",
  top: "300px",
  width: "100px",
  height: "100px",
  background: "red",
});
makeMoveBox({
  name: "kan",
  left: "310px",
  top: "310px",
  width: "100px",
  height: "100px",
  background: "green",
});
