let seconds = 5; // 시간을 더 짧게 설정했습니다.

function updateTimer() {
    document.getElementById('timer').innerText = seconds;
    if (seconds === 0) {
        displayTransparentBox();
    } else {
        seconds--;
        setTimeout(updateTimer, 1000);
    }
}

// 페이지 로드 시 타이머 시작
updateTimer();

function displayTransparentBox() {
    // 투명 상자 생성
    var transparentBox = document.createElement("div");
    transparentBox.className = "transparent-box";
    transparentBox.innerHTML = "<p>이것은 투명 상자입니다.<br>마우스 클릭이 작동하지 않습니다.</p>";
    document.body.appendChild(transparentBox);

    // 마우스 클릭 이벤트 무시
    transparentBox.style.pointerEvents = "none";
}
