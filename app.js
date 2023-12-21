const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");
const range = document.getElementById("jsRange");
const mode = document.getElementById("jsMode");
const saveBtn = document.getElementById("jsSave");

const INITIAL_COLOR = "#000000";


ctx.strokeStyle = "#2c2c2c";

canvas.width = 800;
canvas.height = 500;

ctx.fillStyle = "white";
ctx.fillRect(0, 0, 800, 500);

ctx.strokeStyle = INITIAL_COLOR;
ctx.fillStyle = INITIAL_COLOR;
ctx.lineWidth = 2.5; /* 라인 굵기 */

let painting = false;
let filling = false;

function stopPainting() {
    painting = false;
}

function startPainting() {
    painting = true;
}

function onMouseMove(event) {
    const x = event.offsetX;
    const y = event.offsetY;
    if (!painting) {
        ctx.beginPath();
        ctx.moveTo(x, y);
    } else{
        ctx.lineTo(x, y);
        ctx.stroke();
    }
}

document.addEventListener('keydown', handleKeyPress);

function handleKeyPress(event) {
  // 키보드 입력에서 숫자 1부터 9까지에 해당하는 키 코드를 사용하여 색상 변경
  switch (event.key) {
    case '1':
      changeColor('#000000'); // 예시로 검은색
      break;
    case '2':
      changeColor('#ffffff'); // 예시로 흰색
      break;

    case '3':1
      changeColor('#ff0000'); // 예시로 빨간색
      break;
    case '4':
      changeColor('#0000ff'); // 예시로 파란색
      break;
    case '5':
      changeColor('#00ff00'); // 예시로 녹색
      break;






    default:
      break;
  }
}

function changeColor(color) {
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
}

function handleRangeChange(event) {
    const size = event.target.value;
    ctx.lineWidth = size;
  }

function handleModeClick() {
 if (filling === true) {
   filling = false;
   mode.innerText = "Fill";
 } else {
  filling = true;
  mode.innerText = "Paint";  
 }
}

function handleCanvasClick() {
    if (filling) {
      ctx.fillRect(0, 0, 800, 500);
    }
  }


function handleCM(event) {
   event.preventDefault();
 }
 

 function handleSaveClick() {
  // localStorage에서 입력값 가져오기
  const filename = localStorage.getItem("Value") || "PaintJS_EXPORT";
  
  // 캔버스 이미지를 데이터 URL로 변환
  const image = canvas.toDataURL("image/png");
  
  // 새로운 a 엘리먼트 생성
  const link = document.createElement("a");
  
  // 다운로드 경로 및 파일명 설정
  link.href = image;
  link.download = `${filename}.png`;
  
  // 클릭 이벤트 발생시켜 다운로드 수행
  link.click();

}

if (canvas) {
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
    canvas.addEventListener("click", handleCanvasClick);
    // canvas.addEventListener("contextmenu", handleCM);

}

Array.from(colors).forEach(color => 
    color.addEventListener("click", handleColorClick));

    
if (range) {
    range.addEventListener("input", handleRangeChange);
}
  
if (mode) {
    mode.addEventListener("click", handleModeClick);
}

if (saveBtn){
  saveBtn.addEventListener("click", handleSaveClick);
}
