// 컬러 종류 (부트 스트랩 코드 컬러 모음)
const colors = ['#0275d8', '#5bc0de', '#5cb85c', '#f0ad4e', '#d9534f', '#292b2c', '#f7f7f7'];

const colorBox = document.getElementById('colorBox');
const changeColorButton = document.getElementById('changeColorButton');

// 버튼 클릭 시 색상 변경
changeColorButton.addEventListener('click', () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    colorBox.style.backgroundColor = randomColor;
});