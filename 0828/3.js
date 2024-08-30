
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const target = 5;

// 배열을 순회
for (let i = 0; i < numbers.length; i++) {
  // 현재 요소
  let number = numbers[i];

  // 3의 배수일 경우, 현재 반복을 건너뛰고 다음 요소로 넘김
  if (number % 3 === 0) {
    continue; // 
  }

  if (number === target) {
    console.log(`${target}을 찾았습니다!`); // 
    break; // target값을 찾으면 for문 종료
  }
}